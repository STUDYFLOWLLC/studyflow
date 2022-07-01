export default function bgToTextColor(color: string) {
  const colorOpacity = parseInt(
    color.substring(color.length - 3, color.length),
    10,
  )
  const textColor = color.substring(3, color.length - 4)
  return `text-${textColor}-${colorOpacity}`
}
