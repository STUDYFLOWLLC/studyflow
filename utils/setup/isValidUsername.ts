export default function isValidUsername(username: string | undefined): boolean {
  if (!username) return false
  return /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,13}[a-zA-Z0-9]$/.test(
    username,
  )
}
