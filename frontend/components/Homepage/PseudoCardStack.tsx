import PseudoCard from './PseudoCard'
import charles from 'images/charles.jpeg'
import sierra from 'images/sierra.jpg'
import julio from 'images/julio.jpg'
import alex from 'images/alex.jpeg'
import jarif from 'images/jarif.jpg'

const PseudoCardStack = () => {
  return (
    <div className="relative bg-white w-96 rounded shadow-lg mx-16 p-4">
      <div className="absolute left-8 bottom-0">
        <PseudoCard
          title={'LOOP INVARIANTS'}
          subtitle="Lecture 8"
          image={charles}
          username="charles"
          date="02/17/22"
          views={97}
          tags={['CS2110', 'David Gries', 'SP22']}
        />
      </div>

      <div className="absolute left-12 top-36">
        <PseudoCard
          title={'BIODIVERSITY 2'}
          image={alex}
          subtitle="Lecture 7"
          username="alex"
          date="02/13/22"
          views={132}
          tags={['BIOEE1780', 'Abbey Drake', 'SP22']}
        />
      </div>
      <div className="absolute right-36 bottom-20">
        <PseudoCard
          title={'The Triple Integral'}
          subtitle="Lecture 4"
          image={julio}
          username="julio"
          date="03/16/22"
          views={186}
          tags={['MATH1920', 'SP22']}
        />
      </div>
      <div className="absolute left-6 bottom-72">
        <PseudoCard
          title={'Orcagna'}
          subtitle="Lecture 4"
          image={sierra}
          username="sierra"
          date="02/12/22"
          views={13}
          tags={['ARTH-311', 'SP22']}
        />
      </div>
      <div className="absolute right-24 top-12">
        <PseudoCard
          title={"Newton's Law of Gravitation"}
          image={jarif}
          subtitle="Lecture 12"
          username="jarif"
          date="02/14/22"
          views={54}
          tags={['PHYS1112', 'SP22']}
        />
      </div>
      <div className="w-96 h-96"></div>
    </div>
  )
}

export default PseudoCardStack
