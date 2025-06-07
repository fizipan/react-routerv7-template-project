// import { useTranslation } from "react-i18next"
import { z } from "zod"

export const loginInputSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

// export const useLoginSchemaTranslation = () => {
//   const { t } = useTranslation("validation")

//   return z.object({
//     email: z.string({ message: t("string") }).email({ message: t("email") }),
//     password: z
//       .string({ message: t("string") })
//       .min(1, t("required", { attribute: t("password") })),
//   })
// }

export type LoginRequest = z.infer<typeof loginInputSchema>

export const refreshTokenInputSchema = z.object({
  refresh_token: z.string(),
})

export type RefreshTokenRequest = z.infer<typeof refreshTokenInputSchema>
