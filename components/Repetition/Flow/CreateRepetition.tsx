import Tippy from '@tippyjs/react'
import { useState } from 'react'

interface Props {
  flowId: string
}

export default function CreateRepetition({ flowId }: Props) {
  const [creating, setCreating] = useState(false)

  return (
    <div className="prose mx-auto max-w-none w-full px-2">
      <h3>Create a repetition</h3>
      <p className="mb-0">
        Based on the science of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Spaced_repetition"
          target="_blank"
          rel="noreferrer"
          className="no-underline text-primary/80"
        >
          spaced repetition
        </a>
        , a Studyflow repetition is a simple and time-efficient way to memorize
        anything. By spacing out your review, you spend less time studying and
        end up learning more. The greatest part: Studyflow does all the planning
        for you. You just have to show up and review your flashcards. A
        repetition contains:
      </p>
      <ul>
        <li>A flashcard stack.</li>
        <li>A set of review tasks.</li>
      </ul>
      <h3 className="mt-4">Choose your intensity</h3>
      <p>
        Have a test coming soon or studying difficult content? Increase the
        amount of repetitions and decrease the space between them.
      </p>
      <div className="mt-14 flex flex-wrap justify-center lg:justify-between items-center">
        <Tippy
          content="A test coming soon"
          showOnCreate
          hideOnClick={false}
          trigger="manual"
        >
          <button
            type="button"
            className="mb-12 lg:mb-2 alex-button bg-rose-300 flex flex-col items-center"
          >
            <p className="m-0 p-0">4/10</p>
            <p className="m-0 p-0">4 repetitions in 10 days</p>
          </button>
        </Tippy>
        <Tippy
          content="Recommended"
          showOnCreate
          hideOnClick={false}
          trigger="manual"
        >
          <button
            type="button"
            className="mb-12 lg:mb-2 alex-button bg-primary/80 flex flex-col items-center"
          >
            <p className="m-0 p-0">4/30</p>
            <p className="m-0 p-0">4 repetitions in 30 days</p>
          </button>
        </Tippy>
        <Tippy
          content="Difficult content"
          showOnCreate
          hideOnClick={false}
          trigger="manual"
        >
          <button
            type="button"
            className="mb-12 lg:mb-2 alex-button bg-green-300 flex flex-col items-center"
          >
            <p className="m-0 p-0">6/30</p>
            <p className="m-0 p-0">6 repetitions in 30 days</p>
          </button>
        </Tippy>
      </div>
    </div>
  )
}
