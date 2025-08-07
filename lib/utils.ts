import { v4 as uuidv4 } from 'uuid'
import { decode, encode } from 'js-base64'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  const uuid = uuidv4().replace(/\s+/g, "").slice(0, 4)

  const slug = text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")

  return `${slug}-${uuid}`
}

export function encodeState(data: any): string {
  return encode(JSON.stringify(data))
}

export function decodeState(state: string): any {
  return JSON.parse(decode(state))
}

export const MeetingFilterEnum = {
  UPCOMING: "UPCOMING",
  PAST: "PAST",
  CANCELLED: "CANCELLED",
} as const

export type MeetingFilterEnumType = (typeof MeetingFilterEnum)[keyof typeof MeetingFilterEnum]