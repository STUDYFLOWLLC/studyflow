import { Breadcrumb, Menu } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>MATH2210</Menu.Item>
    <Menu.Item>CS2110</Menu.Item>
    <Menu.Item>CS2800</Menu.Item>
    <Menu.Item>COGST1101</Menu.Item>
    <Menu.Item>BIOEE1780</Menu.Item>
  </Menu>
)

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item overlay={menu}>
      <a href="">MATH2210</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>9.1 CHANGE OF BASIS</Breadcrumb.Item>
  </Breadcrumb>
)
