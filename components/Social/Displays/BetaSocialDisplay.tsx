/* This example requires Tailwind CSS v2.0+ */
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default function BetaSocialDisplay() {
  return (
    <div className="relative rounded-md max-w-xl my-3 border-red-300 border mx-auto bg-red-50 px-4 py-2">
      <InformationCircleIcon
        className="h-5 w-5 text-red-400 absolute top-1 left-1"
        aria-hidden="true"
      />
      <div className="mx-3">
        <h3 className="text-sm font-medium text-red-800 p-0 m-0">
          A word about how academic integrity aligns with our mission
        </h3>
        <div className="mt-2 text-sm text-red-700 p-0">
          <p className="p-0 m-0">
            Our goal is to enhance the student experience. Studyflow is a
            powerful tool on its own, but is{' '}
            <b>even more powerful when used collaboratively</b>. Although we
            want you to benefit from the note sharing capabilities of Studyflow,
            we realize that it could violate Cornell Academic Integrity
            policies.
          </p>
          <p>
            We are therefore in the process of contacting the Dean of Faculty to
            get some clarification on this point and have{' '}
            <b>temporarily have suspended flow sharing</b>. You can still view
            other students&apos; profiles.
          </p>
          <p>
            Read the full blog post{' '}
            <a
              href="https://docs.studyflow.ai/blog/integrity"
              target="_blank"
              rel="noreferrer"
              className="no-underline text-primary"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
