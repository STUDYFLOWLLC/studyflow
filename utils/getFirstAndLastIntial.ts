export default function getFirstAndLastInitialFromName(
  name: string | undefined | null,
) {
  if (!name) return 'SF'
  const realName = name.trim()
  const firstInitial = realName.split(' ')[0][0]
  if (realName.split(' ').length > 1) {
    const lastInitial = realName.split(' ')[realName.split(' ').length - 1][0]
    return `${firstInitial}${lastInitial}`.toLocaleUpperCase()
  }
  return `${firstInitial}`.toLocaleUpperCase()
}
