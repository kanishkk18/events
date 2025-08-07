import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'
import { IntegrationAppType, IntegrationProvider, IntegrationCategory } from '@prisma/client'

// Define our supported integrations
const SUPPORTED_INTEGRATIONS: IntegrationAppType[] = [
  IntegrationAppType.GOOGLE_MEET_AND_CALENDAR,
  IntegrationAppType.ZOOM_MEETING,
  IntegrationAppType.OUTLOOK_CALENDAR
]

const appTypeToProviderMap: Record<IntegrationAppType, IntegrationProvider> = {
  [IntegrationAppType.GOOGLE_MEET_AND_CALENDAR]: IntegrationProvider.GOOGLE,
  [IntegrationAppType.ZOOM_MEETING]: IntegrationProvider.ZOOM,
  [IntegrationAppType.OUTLOOK_CALENDAR]: IntegrationProvider.MICROSOFT,
}

const appTypeToCategoryMap: Record<IntegrationAppType, IntegrationCategory> = {
  [IntegrationAppType.GOOGLE_MEET_AND_CALENDAR]: IntegrationCategory.CALENDAR_AND_VIDEO_CONFERENCING,
  [IntegrationAppType.ZOOM_MEETING]: IntegrationCategory.VIDEO_CONFERENCING,
  [IntegrationAppType.OUTLOOK_CALENDAR]: IntegrationCategory.CALENDAR,
}

const appTypeToTitleMap: Record<IntegrationAppType, string> = {
  [IntegrationAppType.GOOGLE_MEET_AND_CALENDAR]: "Google Meet & Calendar",
  [IntegrationAppType.ZOOM_MEETING]: "Zoom",
  [IntegrationAppType.OUTLOOK_CALENDAR]: "Outlook Calendar",
}

const handler = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: HTTPSTATUS.UNAUTHORIZED }
      )
    }

    const userIntegrations = await prisma.integration.findMany({
      where: { userId: session.user.id },
      select: { appType: true }
    })

    // Create a Set for faster lookup
    const connectedAppTypes = new Set(
      userIntegrations.map(integration => integration.appType)
    )

    // Map only supported integrations
    const integrations = SUPPORTED_INTEGRATIONS.map((appType) => ({
      provider: appTypeToProviderMap[appType],
      title: appTypeToTitleMap[appType],
      app_type: appType,
      category: appTypeToCategoryMap[appType],
      isConnected: connectedAppTypes.has(appType),
    }))

    return NextResponse.json(
      {
        message: "Fetched user integrations successfully",
        integrations,
      },
      { status: HTTPSTATUS.OK }
    )
  } catch (error) {
    console.error('Failed to fetch user integrations:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: HTTPSTATUS.INTERNAL_SERVER_ERROR }
    )
  }
}

export const GET = withErrorHandling(handler)