import { Combobox } from '@headlessui/react'
import { DocumentAddIcon } from '@heroicons/react/outline'
import CMDEntry from 'components/CMDPalette/CMDEntry'

export default {
  title: 'CMD Entry',
  component: CMDEntry,
}

const CMDEntryTemplate = (args) => (
  <Combobox>
    <Combobox.Options>
      <CMDEntry {...args} />
    </Combobox.Options>
  </Combobox>
)
export const CMDEntry1 = CMDEntryTemplate.bind({})
CMDEntry1.args = {
  name: 'Create a flow',
  icon: DocumentAddIcon,
  shortcut: 'C',
  url: '#',
}
