import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { bgColor } from 'types/Colors'

interface Props {
  colors: string[]
  selectedColor: string
  setSelectedColor: (color: bgColor) => void
}

export default function CourseColorPicker({
  colors,
  selectedColor,
  setSelectedColor,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classnames(
        { 'border-2 border-gray-300': theme === 'light' },
        { 'bg-base-100': theme === 'dark' },
        'grid grid-cols-6 justify-self-center justify-center px-2 py-1 m-2 rounded-md',
      )}
    >
      {colors.map((color) => (
        <div
          key={color}
          className={classnames(
            {
              'ring-2 ring-gray-500 ':
                theme === 'light' && selectedColor === color,
            },
            {
              'ring-2 ring-gray-100':
                theme === 'dark' && selectedColor === color,
            },
            color,
            'ring-offset-1 w-5 h-5 m-2 rounded-full cursor-pointer',
          )}
          onClick={() => setSelectedColor(color as bgColor)}
          onKeyDown={() => setSelectedColor(color as bgColor)}
        />
      ))}
    </div>
  )
}
