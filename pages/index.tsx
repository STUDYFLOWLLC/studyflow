import type { NextPage } from 'next'
import HomeHeader from 'components/Homepage/HomeHeader'
import HomeBody from 'components/Homepage/HomeBody'
import HomeFooter from 'components/Homepage/HomeFooter'
import HomeBody2 from 'components/Homepage/HomeBody2'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-stone-100">
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </div>
  )
}

export default Home
