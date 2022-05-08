import FlashCard from 'components/flowparts/FlashCard'

export default {
  title: 'Flashcard',
  component: FlashCard,
}

const Template = (args) => <FlashCard {...args} />
export const FlashCard1 = Template.bind({})
FlashCard1.args = {
  front:
    'front Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  back: 'back Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
}
