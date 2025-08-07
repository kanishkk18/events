import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { EventIdSchema } from '@/lib/validation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling, withValidation } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'
import { NotFoundException } from '@/lib/errors'

const handler = withValidation(
  EventIdSchema,
  async (req: NextRequest, data: any) => {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: HTTPSTATUS.UNAUTHORIZED }
      )
    }

      const event = await prisma.event.findFirst({
        where: { 
          id: data.eventId, 
          userId: session.user.id 
        },
      })

      if (!event) {
        throw new NotFoundException("Event not found")
      }

      const updatedEvent = await prisma.event.update({
        where: { id: event.id },
        data: { isPrivate: !event.isPrivate },
      })

      return NextResponse.json(
        {
          message: `Event set to ${updatedEvent.isPrivate ? "private" : "public"} successfully`,
        },
        { status: HTTPSTATUS.OK }
      )
  }
)

export const PUT = withErrorHandling(handler)