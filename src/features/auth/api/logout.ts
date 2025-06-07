import { api } from "@/lib/api-client"

import type { LogoutResponse } from "../types/api"

export const logout = (): Promise<LogoutResponse> => {
  return api.post("/auth/logout")
}
