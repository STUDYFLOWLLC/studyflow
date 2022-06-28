import classNames from 'classnames'
import { Component, createRef, RefObject } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import dateParser from 'utils/dateParser'
import { removeHTMLTags } from 'utils/richTextEditor'
import taskParser from 'utils/taskParser'

interface Props {
  setTaskName: (taskName: string) => void
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
  taskView: string | undefined
}

interface State {
  contentEditable: RefObject<HTMLElement>
  html: string
  exemptWords: number
}

export default class TaskNameInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.taskNameChange = this.taskNameChange.bind(this)
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this)

    this.state = {
      contentEditable: createRef(),
      html: taskParser('', dateParser(''), 0),
      exemptWords: 0,
    }
  }

  componentDidMount() {
    const { contentEditable } = this.state
    contentEditable.current?.focus()
  }

  onKeyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { setTaskDueDateExact } = this.props
    const { html, exemptWords } = this.state

    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault()
      // check for empty span tag (most recent entry is date)
      if (
        html.substring(html.length - 17, html.length - 4) === '<span></span>'
      ) {
        const stripped = removeHTMLTags(html)
        this.setState({
          exemptWords: exemptWords + 1,
          html: taskParser(stripped, dateParser(stripped), exemptWords + 1),
        })
        setTaskDueDateExact(undefined)
      } else {
        const stripped = removeHTMLTags(html)
        if (stripped.length === 1) {
          this.setState({
            exemptWords: 0,
          })
        }
        const lastCharRemoved = stripped.substring(0, stripped.length - 1)
        this.setState({
          html: taskParser(
            lastCharRemoved,
            dateParser(lastCharRemoved),
            exemptWords,
          ),
        })
      }
    }
  }

  taskNameChange = (e: ContentEditableEvent) => {
    const { setTaskName, setTaskDueDateExact, taskView } = this.props
    const { exemptWords } = this.state
    const stripped = removeHTMLTags(e.target.value)
    const taskDueDate = dateParser(stripped)
    if (taskDueDate.length > exemptWords) {
      setTaskDueDateExact(taskDueDate[taskDueDate.length - 1].date())
    } else {
      setTaskDueDateExact(taskView === 'Today' ? new Date() : undefined)
    }
    setTaskName(stripped)
    this.setState({
      html: taskParser(e.target.value, taskDueDate, exemptWords),
    })
  }

  render() {
    const { contentEditable, html } = this.state

    return (
      <ContentEditable
        innerRef={contentEditable}
        html={html}
        onChange={(e) => this.taskNameChange(e)}
        onKeyDown={(e) => this.onKeyDownHandler(e)}
        className={classNames(
          { 'text-gray-400': html === '' },
          'task-name border-none focus:ring-0 text-lg font-medium outline-none mx-2.5 mt-1 caret-black',
        )}
        placeholder="Task name"
      />
    )
  }
}
