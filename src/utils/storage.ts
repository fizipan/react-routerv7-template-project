import Cookies from "js-cookie"

export const Cookie = {
  setAccessToken(token: string) {
    const inOneDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    Cookies.set("access_token", token, {
      secure: true,
      sameSite: "lax",
      expires: inOneDay,
    })
  },
  getAccessToken() {
    return Cookies.get("access_token")
  },
  setRefreshToken(token: string) {
    const inOneMonth = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
    Cookies.set("refresh_token", token, {
      secure: true,
      sameSite: "lax",
      expires: inOneMonth,
    })
  },
  getRefreshToken() {
    return Cookies.get("refresh_token")
  },
  clearTokens() {
    Cookies.remove("access_token", {
      secure: true,
      sameSite: "lax",
    })

    Cookies.remove("refresh_token", {
      secure: true,
      sameSite: "lax",
    })
  },
}
