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
      events: {
        include: {
          _count: {
            select: { meetings: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!user) {
    throw new NotFoundException("User not found")
  }

  return NextResponse.json(
    {
      message: "User events fetched successfully",
      data: {
        events: user.events,
        username: user.username,
      },
    },
    { status: HTTPSTATUS.OK }
  )
}

export const GET = withErrorHandling(handler)