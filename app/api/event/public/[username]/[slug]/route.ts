import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UserNameAndSlugSchema } from '@/lib/validation'
import { withErrorHandling } from '@/lib/middleware'
import { HTTPSTATUS } from '@/lib/http-status'

export const GET = withErrorHandling(
  async (req: NextRequest, { params }: { params: { username: string; slug: string } }) => {
    const parse = UserNameAndSlugSchema.safeParse(params)
    if (!parse.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: parse.error.flatten().fieldErrors,
        },
        { status: HTTPSTATUS.BAD_REQUEST }
      )
    }

    const { username, slug } = parse.data

    const event = await prisma.event.findFirst({
      where: {
        slug,
        isPrivate: false,
        user: {
          username,
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        slug: true,
        duration: true,
        locationType: true,
        user: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
      },
    })

    if (!event) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: HTTPSTATUS.NOT_FOUND }
      )
    }

    return NextResponse.json(
      {
        message: "Event details fetched successfully",
        event,
      },
      { status: HTTPSTATUS.OK }
    )
  }
)
