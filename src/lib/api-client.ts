import Axios, { type InternalAxiosRequestConfig } from "axios"
import { toast } from "sonner"

import { env } from "@/config/env"
import { paths } from "@/config/paths"
import { Cookie } from "@/utils/storage"

import { refreshToken } from "@/features/auth/api/refresh-token"

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json"
  }

  const token = Cookie.getAccessToken()
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
}

export const api = Axios.create({
  baseURL: `${env.API_URL}/${env.API_VERSION}`,
})

api.interceptors.request.use(authRequestInterceptor)

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error?.config

    const message =
      error?.response?.data?.data?.message ||
      error?.response?.data?.data?.error?.message ||
      error?.response?.data?.message ||
      error?.message

    // Jika error 401 dan belum pernah retry, coba refresh token
    if (
      error?.response?.status === 401 &&
      !originalRequest?._retry &&
      message !== "The refresh token field is required." &&
      message !== "Refresh Token Tidak Valid"
    ) {
      originalRequest._retry = true
      try {
        const { data } = await refreshToken({
          refresh_token: Cookie.getRefreshToken() || "",
        })

        const { access_token, refresh_token } = data
        Cookie.setAccessToken(access_token)
        Cookie.setRefreshToken(refresh_token)

        originalRequest.headers.authorization = `Bearer ${access_token}`
        return api(originalRequest)
      } catch (refreshError) {
        // Gagal refresh → clear token dan redirect
        Cookie.clearTokens()
        const searchParams = new URLSearchParams()
        const redirectTo =
          searchParams.get("redirectTo") || window.location.pathname
        window.location.href = paths.auth.login.getHref(redirectTo)
        return Promise.reject(refreshError)
      }
    }

    // Tampilkan toast jika bukan error refresh token
    if (
      message !== "The refresh token field is required." &&
      message !== "Refresh Token Tidak Valid"
    ) {
      toast.error(message)
    }

    // Jika tetap 401 → redirect
    if (error.response?.status === 401) {
      Cookie.clearTokens()
      const searchParams = new URLSearchParams()
      const redirectTo =
        searchParams.get("redirectTo") || window.location.pathname
      window.location.href = paths.auth.login.getHref(redirectTo)
    }

    return Promise.reject(error)
  }
)
