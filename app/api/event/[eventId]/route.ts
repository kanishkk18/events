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

      await prisma.event.delete({
        where: { id: event.id },
      })

      return NextResponse.json(
        {
          message: "Event deleted successfully",
        },
        { status: HTTPSTATUS.OK }
      )
  }
)

export const DELETE = withErrorHandling((req: NextRequest, { params }: { params: { eventId: string } }) => 
  handler(req, { eventId: params.eventId })
)