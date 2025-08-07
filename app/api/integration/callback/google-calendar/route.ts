import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { googleCalendarClient } from '@/lib/calendar-client'
import { decodeState } from '@/lib/utils'
import { config } from '@/lib/config'
import { BadRequestException } from '@/lib/errors'
import { IntegrationProvider, IntegrationCategory, IntegrationAppType } from '@prisma/client'
import { withErrorHandling } from '@/lib/middleware'

const CLIENT_APP_URL = config.FRONTEND_INTEGRATION_URL

const handler = async (req: NextRequest) => {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const error = url.searchParams.get('error')

  const CLIENT_URL = `${CLIENT_APP_URL}?app_type=google`

  // Handle OAuth errors
  if (error) {
    return NextResponse.redirect(`${CLIENT_URL}&error=${encodeURIComponent(error)}`)
  }

  // Validate required parameters
  if (!code) {
    return NextResponse.redirect(`${CLIENT_URL}&error=Authorization code is required`)
  }

  if (!state) {
    return NextResponse.redirect(`${CLIENT_URL}&error=State parameter is required`)
  }

  try {
    // Decode state parameter
    const decodedState = decodeState(state)
    const userId = decodedState?.userId
    const appType = decodedState?.appType

    if (!userId) {
      return NextResponse.redirect(`${CLIENT_URL}&error=User ID not found in state`)
    }

    if (appType !== IntegrationAppType.GOOGLE_MEET_AND_CALENDAR) {
      return NextResponse.redirect(`${CLIENT_URL}&error=Invalid app type`)
    }

    // Exchange code for tokens
    const { tokens } = await googleCalendarClient.getToken({
      code,
      redirect_uri: config.GOOGLE_CALENDAR_REDIRECT_URI
    })

    if (!tokens.access_token) {
      return NextResponse.redirect(`${CLIENT_URL}&error=Failed to obtain access token`)
    }

    // Prepare integration data
    const integrationData = {
      userId,
      provider: IntegrationProvider.GOOGLE,
      category: IntegrationCategory.CALENDAR_AND_VIDEO_CONFERENCING,
      appType: IntegrationAppType.GOOGLE_MEET_AND_CALENDAR,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token || undefined,
      expiryDate: tokens.expiry_date ? BigInt(tokens.expiry_date) : null,
      metadata: {
        scope: tokens.scope,
        token_type: tokens.token_type,
        id_token: tokens.id_token
      },
    }

    // Check for existing integration
    const existingIntegration = await prisma.integration.findFirst({
      where: {
        userId,
        appType: IntegrationAppType.GOOGLE_MEET_AND_CALENDAR,
      },
    })

    // Update or create integration
    if (existingIntegration) {
      await prisma.integration.update({
        where: { id: existingIntegration.id },
        data: integrationData
      })
    } else {
      await prisma.integration.create({
        data: integrationData
      })
    }

    return NextResponse.redirect(`${CLIENT_URL}&success=true`)
  } catch (err) {
    console.error('Google Calendar callback error:', err)
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.redirect(`${CLIENT_URL}&error=${encodeURIComponent(errorMessage)}`)
  }
}

export const GET = withErrorHandling(handler)
export const POST = withErrorHandling(handler)