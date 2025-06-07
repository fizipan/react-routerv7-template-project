import { Navigate, useLocation } from "react-router"

import { paths } from "@/config/paths"
import { getUser } from "@/features/auth/api/get-user"
import { loginWithEmailAndPassword } from "@/features/auth/api/login"
import { logout } from "@/features/auth/api/logout"
import type {
  AuthUserResponse,
  UsersMeResponse,
} from "@/features/auth/types/api"
import type { LoginRequest } from "@/features/auth/types/form"
import { Cookie } from "@/utils/storage"

import { configureAuth } from "./react-query-auth"

async function handleUserResponse(
  data: AuthUserResponse
): Promise<UsersMeResponse> {
  const { access_token, refresh_token, user } = data.data
  Cookie.setAccessToken(access_token)
  Cookie.setRefreshToken(refresh_token)
  return { data: user }
}

async function userFn() {
  if (Cookie.getAccessToken() || Cookie.getRefreshToken()) {
    try {
      const { data } = await getUser()
      return { data }
    } catch {
      Cookie.clearTokens()
    }
  }
  return null
}

async function loginFn(dataForm: LoginRequest): Promise<UsersMeResponse> {
  const response = await loginWithEmailAndPassword(dataForm)
  const { data } = await handleUserResponse(response)
  return { data }
}

const authConfig = {
  userFn,
  loginFn,
  logoutFn: logout,
}

export const { useUser, useLogin, useLogout, AuthLoader } =
  configureAuth(authConfig)

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser()
  const location = useLocation()

  if (!user.data) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
  }

  return children
}
