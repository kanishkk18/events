// import { NextRequest, NextResponse } from 'next/server'
// import { AppTypeSchema } from '@/lib/validation'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/auth'
// import { withErrorHandling, withValidation } from '@/lib/middleware'
// import { HTTPSTATUS } from '@/lib/http-status'
// import { googleCalendarClient } from '@/lib/calendar-client'
// import { encodeState } from '@/lib/utils'
// import { BadRequestException } from '@/lib/errors'
// import { IntegrationAppType } from '@prisma/client'

// // Validation + OAuth Handler
// const handler = withValidation(
//   AppTypeSchema,
//   async (req: NextRequest, data: { appType: IntegrationAppType }) => {
//     const session = await getServerSession(authOptions)

//     if (!session?.user?.id) {
//       return NextResponse.json(
//         { message: 'Authentication required' },
//         { status: HTTPSTATUS.UNAUTHORIZED }
//       )
//     }

//     const state = encodeState({ userId: session.user.id, appType: data.appType })
//     let authUrl: string

//     switch (data.appType) {
//       case IntegrationAppType.GOOGLE_MEET_AND_CALENDAR:
//         authUrl = googleCalendarClient.generateAuthUrl({
//           access_type: "offline",
//           scope: ["https://www.googleapis.com/auth/calendar.events"],
//           prompt: "consent",
//           state,
//         })
//         break

//       default:
//         throw new BadRequestException("Unsupported app type")
//     }

//     return NextResponse.json({ url: authUrl }, { status: HTTPSTATUS.OK })
//   }
// )

// function parseAppType(appType: string): IntegrationAppType {
//   if (!(appType in IntegrationAppType)) {
//     throw new BadRequestException("Invalid app type")
//   }
//   return appType as IntegrationAppType
// }

// export const GET = withErrorHandling((req: NextRequest, { params }) =>
//   handler(req, { appType: parseAppType(params.appType) })
// )

import { NextRequest, NextResponse } from 'next/server'
import { AppTypeSchema } from '@/lib/validation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling, withValidation } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'
import { googleCalendarClient } from '@/lib/calendar-client'
import { encodeState } from '@/lib/utils'
import { BadRequestException } from '@/lib/errors'
import { IntegrationAppType } from '@prisma/client'
import { config } from 'lib/config'


// Validation + OAuth Handler
// const handler = withValidation(
//   AppTypeSchema,
//   async (req: NextRequest, data: { appType: IntegrationAppType }) => {
//     const session = await getServerSession(authOptions)

//     if (!session?.user?.id) {
//       return NextResponse.json(
//         { message: 'Authentication required' },
//         { status: HTTPSTATUS.UNAUTHORIZED }
//       )
//     }

//     const state = encodeState({ 
//       userId: session.user.id, 
//       appType: data.appType 
//     })
    
//     let authUrl: string

//     switch (data.appType) {
//       case IntegrationAppType.GOOGLE_MEET_AND_CALENDAR:
//         authUrl = googleCalendarClient.generateAuthUrl({
//           access_type: "offline",
//           scope: [
//             "https://www.googleapis.com/auth/calendar.events",
//             "https://www.googleapis.com/auth/calendar.readonly"
//           ],
//           prompt: "consent",
//           state,
//           // Ensure redirect URI matches exactly
//           redirect_uri: process.env.GOOGLE_CALENDAR_REDIRECT_URI
//         })
//         break

//       default:
//         throw new BadRequestException("Unsupported app type")
//     }

//     return NextResponse.json({ url: authUrl }, { status: HTTPSTATUS.OK })
//   }
// )

const handler = withValidation(
  AppTypeSchema,
  async (req: NextRequest, data: { appType: IntegrationAppType }) => {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: HTTPSTATUS.UNAUTHORIZED }
      )
    }

    const state = encodeState({ 
      userId: session.user.id, 
      appType: data.appType 
    })
    let authUrl: string

    switch (data.appType) {
      case IntegrationAppType.GOOGLE_MEET_AND_CALENDAR:
        authUrl = googleCalendarClient.generateAuthUrl({
          access_type: "offline",
          scope: [
            "https://www.googleapis.com/auth/calendar.events",
            "https://www.googleapis.com/auth/calendar.readonly"
          ],
          prompt: "consent",
          state,
          // Add explicit redirect URI
          redirect_uri: config.GOOGLE_CALENDAR_REDIRECT_URI
        })
        break

      default:
        throw new BadRequestException("Unsupported app type")
    }

    return NextResponse.json({ url: authUrl }, { status: HTTPSTATUS.OK })
  }
)

function parseAppType(appType: string): IntegrationAppType {
  if (!(appType in IntegrationAppType)) {
    throw new BadRequestException("Invalid app type")
  }
  return appType as IntegrationAppType
}

export const GET = withErrorHandling((req: NextRequest, { params }) =>
  handler(req, { appType: parseAppType(params.appType) })
)