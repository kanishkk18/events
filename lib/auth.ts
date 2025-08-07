import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'
import { v4 as uuidv4 } from 'uuid'
import { DayOfWeek } from '@prisma/client'

async function generateUsername(name: string): Promise<string> {
  const cleanName = name.replace(/\s+/g, "").toLowerCase()
  const baseUsername = cleanName
  const uuidSuffix = uuidv4().replace(/\s+/g, "").slice(0, 4)
  let username = `${baseUsername}${uuidSuffix}`
  
  let existingUser = await prisma.user.findUnique({
    where: { username },
  })

  while (existingUser) {
    username = `${baseUsername}${uuidv4().replace(/\s+/g, "").slice(0, 4)}`
    existingUser = await prisma.user.findUnique({ where: { username } })
  }

  return username
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  events: {
    async createUser({ user }) {
      try {
        const username = await generateUsername(user.name || user.email!.split('@')[0])
        await prisma.user.update({
          where: { id: user.id },
          data: {
            username,
            availability: {
              create: {
                timeGap: 30,
                days: {
                  create: Object.values(DayOfWeek).map((day) => ({
                    day,
                    startTime: new Date(`2025-03-01T09:00:00Z`),
                    endTime: new Date(`2025-03-01T17:00:00Z`),
                    isAvailable: day !== DayOfWeek.SUNDAY && day !== DayOfWeek.SATURDAY,
                  })),
                },
              },
            },
          },
        })
      } catch (error) {
        console.error('Error in createUser event:', error)
        throw error
      }
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email! },
          })

          if (existingUser) {
            // Check if Google account is linked
            const existingAccount = await prisma.account.findFirst({
              where: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            })

            // Link account if not already linked
            if (!existingAccount) {
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  refresh_token: account.refresh_token,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                  session_state: account.session_state,
                },
              })
            }

            // Update username if missing
            if (!existingUser.username) {
              const username = await generateUsername(existingUser.name || existingUser.email.split('@')[0])
              await prisma.user.update({
                where: { id: existingUser.id },
                data: { username },
              })
            }
          }
        } catch (error) {
          console.error('Error in signIn callback:', error)
          return false
        }
      }
      return true
    },
    async session({ session, user }) {
      if (session.user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email! },
        })
        
        if (dbUser) {
          session.user.id = dbUser.id
          session.user.username = dbUser.username
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'database',
  },
}