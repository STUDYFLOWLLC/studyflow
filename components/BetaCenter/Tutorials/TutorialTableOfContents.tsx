export default function TutorialTableOfContents() {
  return (
    <div className="max-w-3xl mx-auto bg-info/5 rounded-md p-4">
      <h3 className="m-0 p-0">Table of Contents</h3>
      <div className="flex justify-around flex-wrap">
        <div>
          <p className="m-0 font-bold">Flows</p>
          <ol className="my-0 ml-3">
            <li className="my-0.5 cursor-pointer underline">
              Using the text editor
            </li>
            <li className="my-0.5 cursor-pointer underline">
              Creating a repetition
            </li>
            <li className="my-0.5 cursor-pointer underline">
              Creating a flashcard stack
            </li>
          </ol>
        </div>
        <div>
          <p className="m-0 font-bold">Tasks</p>
          <ol className="my-0 ml-3">
            <li className="m-0">Creating a task</li>
            <li>Using dynamic menus</li>
            <li>Using text-to-date</li>
            <li>Creating tasks in a flow</li>
          </ol>
        </div>
        <div>
          <p className="m-0 font-bold">Automation</p>
          <ol className="my-0 ml-3">
            <li className="my-0.5 cursor-pointer underline">
              Using the text editor
            </li>
            <li className="my-0.5 cursor-pointer underline">
              Creating a repetition
            </li>
            <li className="my-0.5 cursor-pointer underline">
              Creating a flashcard stack
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
