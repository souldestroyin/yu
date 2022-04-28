import Cookies, { CookieAttributes } from 'js-cookie'

const TokenKey = 'Admin-Token'

const publicToken = 'Public-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getSid() {
  return Cookies.get('sid')
}
export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function setPublicToken(token: string, params: CookieAttributes) {
  return Cookies.set(publicToken, token, params)
}
export function removePublicToken(params: CookieAttributes) {
  return Cookies.remove(publicToken, params)
}
export function setSid(sid: string) {
  return Cookies.set('sid', sid)
}
export function removeSid() {
  return Cookies.remove('sid')
}
