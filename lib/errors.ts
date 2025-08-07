import { HTTPSTATUS, HttpStatusCodeType } from './http-status'

export const ErrorCodeEnum = {
  AUTH_USER_NOT_FOUND: "AUTH_USER_NOT_FOUND",
  AUTH_EMAIL_ALREADY_EXISTS: "AUTH_EMAIL_ALREADY_EXISTS",
  AUTH_INVALID_TOKEN: "AUTH_INVALID_TOKEN",
  AUTH_NOT_FOUND: "AUTH_NOT_FOUND",
  AUTH_TOO_MANY_ATTEMPTS: "AUTH_TOO_MANY_ATTEMPTS",
  AUTH_UNAUTHORIZED_ACCESS: "AUTH_UNAUTHORIZED_ACCESS",
  AUTH_TOKEN_NOT_FOUND: "AUTH_TOKEN_NOT_FOUND",
  ACCESS_UNAUTHORIZED: "ACCESS_UNAUTHORIZED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const

export type ErrorCodeEnumType = keyof typeof ErrorCodeEnum

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: HttpStatusCodeType = HTTPSTATUS.INTERNAL_SERVER_ERROR,
    public errorCode: AppErrorCode = 'INTERNAL_ERROR'
  ) {
    super(message)
  }
}

export class UnauthorizedException extends AppError {
  constructor(message: string = 'Authentication required', errorCode?: AppErrorCode) {
    super(message, HTTPSTATUS.UNAUTHORIZED, errorCode)
  }
}

export class ForbiddenException extends AppError {
  constructor(
    message: string, 
    errorCode: AppErrorCode = 'FORBIDDEN'
  ) {
    super(message, HTTPSTATUS.FORBIDDEN, errorCode)
  }
}

export class BadRequestException extends AppError {
  constructor(
    message: string, 
    errorCode: AppErrorCode = 'VALIDATION_ERROR'
  ) {
    super(message, HTTPSTATUS.BAD_REQUEST, errorCode)
  }
}

export class NotFoundException extends AppError {
  constructor(message: string) {
    super(message, HTTPSTATUS.NOT_FOUND, 'NOT_FOUND')
  }
}