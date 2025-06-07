import { api } from "@/lib/api-client"

import type { RefreshTokenResponse } from "../types/api"
import type { RefreshTokenRequest } from "../types/form"

export const refreshToken = (
  data: RefreshTokenRequest
): Promise<RefreshTokenResponse> => {
  return api.post("/auth/refresh", data)
}
