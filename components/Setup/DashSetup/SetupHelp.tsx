export default function SetupHelp() {
  return (
    <div className="prose absolute bottom-20 right-4 bg-info/10 p-4 rounded-md border w-64">
      <h3>Need help?</h3>
      <p className="p-0 m-1">
        You can find a{' '}
        <a
          href="https://docs.studyflow.ai/docs/category/getting-started"
          target="_blank"
          rel="noreferrer"
          className="text-primary no-underline"
        >
          complete setup tutorial
        </a>{' '}
        in our docs.
      </p>
      <p className="p-0 m-1">
        Still wondering what Studyflow is and how it works?{' '}
        <a
          href="https://docs.studyflow.ai/blog/introduction"
          target="_blank"
          rel="noreferrer"
          className="text-primary no-underline"
        >
          Read our first blog post
        </a>
        .
      </p>
    </div>
  )
}
