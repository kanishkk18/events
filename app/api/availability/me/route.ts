import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { withErrorHandling } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'
import { NotFoundException } from '@/lib/errors'

const handler = async (req: NextRequest) => {
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

  if (!user || !user.availability) {
    throw new NotFoundException("User not found or availability")
  }

  const availabilityData = {
    timeGap: user.availability.timeGap,
    days: user.availability.days.map((dayAvailability) => ({
      day: dayAvailability.day,
      startTime: dayAvailability.startTime.toISOString().slice(11, 16),
      endTime: dayAvailability.endTime.toISOString().slice(11, 16),
      isAvailable: dayAvailability.isAvailable,
    })),
  }

  return NextResponse.json(
    {
      message: "Fetched availability successfully",
      availability: availabilityData,
    },
    { status: HTTPSTATUS.OK }
  )
}

export const GET = withErrorHandling(handler)