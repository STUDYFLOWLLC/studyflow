import { BetaDisplays } from 'components/BetaCenter/BetaNavbar'
import PlaygroundPlate from 'dinnerplate/PlaygroundPlate'

interface Props {
  setBetaView: (newView: BetaDisplays) => void
}

export default function index({ setBetaView }: Props) {
  return (
    <div className="prose max-w-3xl mx-auto mt-3">
      <h1 className="mb-0 pb-0">Tutorials</h1>
      <p className="my-1 p-0">
        Studyflow is an intuitive learning platform designed specifically for
        students. To help our students take as much advantage of Studyflow as
        they can, we provide{' '}
        <a
          href="https://docs.studyflow.ai/docs/intro"
          target="_blank"
          rel="noreferrer"
          className="text-primary no-underline"
        >
          tutorials ranging from setup walkthroughs to more complicated
          functionalities like dynamic task menus
        </a>
        . We are always looking for new ways to improve our student experience,
        so if you have any suggestions, please make a{' '}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setBetaView(BetaDisplays.REQUEST_FEATURE)}
          onKeyDown={() => setBetaView(BetaDisplays.REQUEST_FEATURE)}
        >
          feature request
        </span>
        .
      </p>
      <a
        href="https://docs.studyflow.ai/docs/intro"
        target="_blank"
        rel="noreferrer"
        className="text-primary no-underline"
      >
        <p>See all of our tutorials here</p>
      </a>
      <h1>Flow playground</h1>
      <PlaygroundPlate />
      {/* <TutorialTableOfContents /> */}
    </div>
  )
}
