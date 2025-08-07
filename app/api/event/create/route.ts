import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { CreateEventSchema } from '@/lib/validation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling, withValidation } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'
import { slugify } from '@/lib/utils'
import { EventLocationType } from '@prisma/client'
import { BadRequestException } from '@/lib/errors'

const handler = withValidation(
  CreateEventSchema,
  async (req: NextRequest, data: any) => {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: HTTPSTATUS.UNAUTHORIZED }
      )
    }

      if (!Object.values(EventLocationType).includes(data.locationType)) {
        throw new BadRequestException("Invalid location type")
      }

      const slug = slugify(data.title)

      const event = await prisma.event.create({
        data: {
          title: data.title,
          description: data.description,
          duration: data.duration,
          locationType: data.locationType,
          slug,
          userId: session.user.id, // <- this must match schema

        }
       
      })

      return NextResponse.json(
        {
          message: "Event created successfully",
          event,
        },
        { status: HTTPSTATUS.CREATED }
      )
  }
)

export const POST = withErrorHandling(handler)