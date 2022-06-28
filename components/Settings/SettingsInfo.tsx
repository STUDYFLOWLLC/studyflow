interface Props {
  title: string
  description: string
}

export default function SettingsInfo({ title, description }: Props) {
  return (
    <div className="space-y-1">
      <h3 className="text-lg leading-6 font-medium">{title}</h3>
      <p className="max-w-2xl text-sm text-info">{description}</p>
    </div>
  )
}
