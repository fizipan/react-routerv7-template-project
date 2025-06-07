import type { AuthResponse, Entity } from "@/types/api"

export type User = Entity<{
  name: string
  email: string
  phone_number: string
  last_location: string
  last_login: string
  is_active: boolean
  register_complete: boolean
}>

export type AuthUser = {
  access_token: string
  refresh_token: string
  user: User
}

export type AuthPermission = {
  permissions: string[]
}

export type RefreshTokenResponse = AuthResponse<AuthUser>

export type LogoutResponse = AuthResponse<{ message: string }>

export type AuthUserResponse = AuthResponse<AuthUser>

export type UsersMeResponse = AuthResponse<User>

export type AuthPermissionResponse = AuthResponse<AuthPermission>
