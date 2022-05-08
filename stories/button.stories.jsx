import AppleButton from 'components/buttons/AppleButton'
import BigProfileButton from 'components/buttons/BigProfileButton'
import GoogleButton from 'components/buttons/GoogleButton'

export default {
  title: 'Buttons',
  component: AppleButton,
}

export const Apple = () => <AppleButton />

export const Google = () => <GoogleButton />

const ProfileBigTemplate = (args) => <BigProfileButton {...args} />
export const ProfileBig = ProfileBigTemplate.bind({})
ProfileBig.args = {
  name: 'Jessy Schwartz',
  username: 'jschwartz',
  pfpLink:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
}
