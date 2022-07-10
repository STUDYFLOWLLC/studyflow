interface Props {
  title: string
}

export default function SetupStepTitle({ title }: Props) {
  return (
    <div className="prose">
      <h1 className="mt-4 mb-8 text-center text-decoration-line: underline decoration-primary decoration-4">
        {title}
      </h1>
    </div>
  )
}
