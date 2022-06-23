import classNames from 'classnames'
import { Component, createRef, RefObject } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import dateParser from 'utils/dateParser'
import { removeHTMLTags } from 'utils/richTextEditor'
import taskParser from 'utils/taskParser'

interface Props {
  setTaskName: (taskName: string) => void
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
}

interface State {
  contentEditable: RefObject<HTMLElement>
  html: string
}

export default class TaskNameInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.taskNameChange = this.taskNameChange.bind(this)

    this.state = {
      contentEditable: createRef(),
      html: taskParser('', dateParser('')),
    }
  }

  taskNameChange = (e: ContentEditableEvent) => {
    const { setTaskName, setTaskDueDateExact } = this.props
    const stripped = removeHTMLTags(e.target.value)
    const taskDueDate = dateParser(stripped)
    if (taskDueDate.length > 0) {
      setTaskDueDateExact(taskDueDate[taskDueDate.length - 1].date())
    } else {
      setTaskDueDateExact(undefined)
    }
    setTaskName(stripped)
    this.setState({
      html: taskParser(e.target.value, taskDueDate),
    })
  }

  render() {
    const { contentEditable, html } = this.state

    return (
      <ContentEditable
        innerRef={contentEditable}
        html={html}
        onChange={(e) => this.taskNameChange(e)}
        className={classNames(
          { 'text-gray-400': html === '' },
          'task-name min-h-8 border-none focus:ring-0 text-lg font-medium outline-none ml-1 mt-1',
        )}
        placeholder="Task name"
      />
    )
  }
}
