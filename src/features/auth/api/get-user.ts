import { api } from "@/lib/api-client"

import type { UsersMeResponse } from "../types/api"

export const getUser = (): Promise<UsersMeResponse> => {
  return api.get("/auth")
}
