import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UpdateAvailabilitySchema } from '@/lib/validation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling, withValidation } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'
import { NotFoundException } from '@/lib/errors'
import { DayOfWeek } from '@prisma/client'

const handler = withValidation(
  UpdateAvailabilitySchema,
  async (req: NextRequest, data: any) => {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: HTTPSTATUS.UNAUTHORIZED }
      )
    }

      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: {
          availability: {
            include: {
              days: true,
            },
          },
        },
      })

      if (!user) {
        throw new NotFoundException("User not found")
      }

      const dayAvailabilityData = data.days.map(({ day, isAvailable, startTime, endTime }: any) => {
        const baseDate = new Date().toISOString().split("T")[0]
        return {
          day: day.toUpperCase() as DayOfWeek,
          startTime: new Date(`${baseDate}T${startTime}:00Z`),
          endTime: new Date(`${baseDate}T${endTime}:00Z`),
          isAvailable,
        }
      })

      if (user.availability) {
        // Delete existing day availabilities
        await prisma.dayAvailability.deleteMany({
          where: { availabilityId: user.availability.id },
        })

        // Update availability with new data
        await prisma.availability.update({
          where: { id: user.availability.id },
          data: {
            timeGap: data.timeGap,
            days: {
              create: dayAvailabilityData,
            },
          },
        })
      }

      return NextResponse.json(
        {
          message: "Availability updated successfully",
        },
        { status: HTTPSTATUS.OK }
      )
  }
)

export const PUT = withErrorHandling(handler)