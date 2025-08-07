import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { AppTypeSchema } from '@/lib/validation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling, withValidation } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'

const handler = withValidation(
  AppTypeSchema,
  async (req: NextRequest, data: any) => {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: HTTPSTATUS.UNAUTHORIZED }
      )
    }

      const integration = await prisma.integration.findFirst({
        where: { 
          userId: session.user.id, 
          appType: data.appType 
        },
      })

      return NextResponse.json(
        {
          message: "Integration checked successfully",
          isConnected: !!integration,
        },
        { status: HTTPSTATUS.OK }
      )
  }
)

export const GET = withErrorHandling((req: NextRequest, { params }: { params: { appType: string } }) => 
  handler(req, { appType: params.appType })
)