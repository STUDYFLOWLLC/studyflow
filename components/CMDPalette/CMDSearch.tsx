import { Combobox } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'

interface Props {
  placeholder: string
  setQuery: (query: string) => void
  open?: boolean
  setOpen?: (open: boolean) => void
}

export default function CMDSearch({
  placeholder,
  setQuery,
  open,
  setOpen,
}: Props) {
  return (
    <div className="flex">
      <SearchIcon
        className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      <Combobox.Input
        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 focus:ring-0 sm:text-sm"
        placeholder={placeholder}
        onChange={(event: { target: { value: string } }) =>
          setQuery(event.target.value)
        }
        autoComplete="off"
        autoFocus
      />
      {setOpen && (
        <kbd
          onClick={() => {
            if (open !== undefined && setOpen) setOpen(!open)
          }}
          onKeyDown={() => {
            if (open !== undefined && setOpen) setOpen(!open)
          }}
          className="kbd kbd-xs absolute top-4 right-4 h-5 w-8 cursor-pointer"
        >
          esc
        </kbd>
      )}
    </div>
  )
}
