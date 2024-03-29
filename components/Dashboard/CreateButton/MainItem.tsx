import { Popover } from '@headlessui/react'
import classNames from 'classnames'
import { CreateButtonMenuItem } from 'components/Dashboard/CreateButton'
import RainbowSynthesisIcon from 'components/Dashboard/CreateButton/RainbowSynthesisIcon'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  item: CreateButtonMenuItem
}

export default function MainItem({ item }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Popover.Button
      key={item.name}
      className={classNames(
        { '': theme === 'light' },
        { '': theme === 'dark' },
        {
          'bg-gradient-from-tl bg-gradient-to-br from-sky-100 via-rose-100 to-lime-200 hover:border-rose-300':
            item.icon === 'SynthesisIcon',
        },
        {
          'hover:border-current': item.icon !== 'SynthesisIcon',
        },
        { 'cursor-pointer': !item.comingSoon },
        { 'pointer-events-none': item.comingSoon },
        item.bgColor,
        item.color,
        'relative border-2 text-left border-transparent flex items-center rounded-md first-of-type:my-0 last-of-type:my-0 my-2 mx-1 px-2 py-1 transition duration-150 ease-in-out focus:outline-none',
      )}
      style={{
        backgroundColor: item.bgColor,
      }}
      onClick={() => {
        if (item.onClick) item.onClick()
      }}
      onKeyDown={() => {
        if (item.onClick) item.onClick()
      }}
    >
      {item.comingSoon && (
        <div className="bg-red-400 uppercase text-2xs p-0.5 rounded-md font-semibold text-white absolute top-0.5 right-0.5">
          Coming Soon
        </div>
      )}
      <div
        className={classNames(
          item.color,
          'brightness-2 flex h-4 w-4 shrink-0 items-center justify-center sm:h-6 sm:w-6',
        )}
      >
        {item.icon !== 'SynthesisIcon' ? (
          <item.icon aria-hidden="true" />
        ) : (
          <RainbowSynthesisIcon />
        )}
      </div>
      <div className="ml-4">
        <p
          className={classNames(
            {
              'text-stone-300 brightness-[0.75]':
                theme === 'dark' && item.icon === 'SynthesisIcon',
            },
            {
              'text-stone-300':
                theme === 'dark' && item.icon !== 'SynthesisIcon',
            },
            {
              'text-neutral':
                theme === 'light' && item.icon !== 'SynthesisIcon',
            },
            'font-medium',
          )}
        >
          {item.name}
        </p>
        <p className="text-xs text-info ">{item.description}</p>
      </div>
    </Popover.Button>
  )
}
