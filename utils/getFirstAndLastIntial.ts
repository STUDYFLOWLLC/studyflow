export default function getFirstAndLastInitialFromName(
  name: string | undefined | null,
) {
  if (!name) return 'SF'
  const firstInitial = name.split(' ')[0][0]
  if (name.split(' ').length > 1) {
    const lastInitial = name.split(' ')[name.split(' ').length - 1][0]
    return `${firstInitial}${lastInitial}`.toLocaleUpperCase()
  }
  return `${firstInitial}`.toLocaleUpperCase()
}
