import MainPlate from 'dinnerplate/MainPlate'
import { MyValue } from 'dinnerplate/types/plateTypes'

interface Props {
  value: MyValue
}

export default function DisplayFlowBody({ value }: Props) {
  return (
    <MainPlate readonly defaultValue={value} />
    // <div
    //   className={classNames(
    //     'max-w-3xl mx-auto overflow-x-none overflow-y-auto prose w-full',
    //     'prose-h1:text-4xl prose-h1:my-0 prose-h1:py-[0.4rem] prose-h1:font-bold prose-h1:text-current prose-h1:leading-normal',
    //     'prose-h2:text-3xl prose-h2:my-0 prose-h2:py-[0.35rem] prose-h2:font-bold prose-h2:text-current prose-h2:leading-normal',
    //     'prose-h3:text-2xl prose-h3:my-0 prose-h3:py-[0.3rem] prose-h3:font-bold prose-h3:text-current prose-h3:leading-normal',
    //     'prose-p:text-lg prose-p:my-0 prose-p:py-[0.25rem] prose-p:text-current prose-p:leading-normal',
    //   )}
    // >
    //   {blocks.map((block) => (
    //     <DisplayFlowBlock key={block.id} block={block} />
    //   ))}
    // </div>
  )
}
