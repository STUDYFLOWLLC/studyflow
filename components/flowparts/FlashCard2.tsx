interface Props {
  front: string
  back: string
}

export default function FlashCard2({ front, back }: Props) {
  return (
    <label className="swap swap-flip">
      <input type="checkbox" className="invisible" />
      <div className="swap-on">
        <span className="px-6 py-4 hover:scale-[1.01] rounded shadow-lg">
          {back}
        </span>
      </div>
      <div className="swap-off">
        <span className="px-6 py-4 hover:scale-[1.01] rounded shadow-lg">
          {front}
        </span>
      </div>
    </label>
  )
}
