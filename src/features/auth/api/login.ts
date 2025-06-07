import { api } from "@/lib/api-client"

import type { AuthUserResponse } from "../types/api"
import type { LoginRequest } from "../types/form"

export const loginWithEmailAndPassword = (
  data: LoginRequest
): Promise<AuthUserResponse> => {
  return api.post("/auth", data)
}
