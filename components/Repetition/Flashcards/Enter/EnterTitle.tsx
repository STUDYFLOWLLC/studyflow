/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames'
import { FlowDetail } from 'hooks/flows/useFlowDetails'
import React from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { KeyedMutator } from 'swr'
import { FlashcardStack } from 'types/Repetition'
import { removeHTMLTags } from 'utils/flows/richTextEditor'
import { changeTitle } from 'utils/repetition/flashcards/flashcardStackHandlers'

interface Props {
  flowDetails: FlowDetail | null
  mutateFlowDetails: KeyedMutator<any>
  flashcardStack: FlashcardStack | null
  mutateFlashcardStack: KeyedMutator<any>
  setSaving: (saving: boolean) => void
  disabled: boolean
}

interface State {
  focused: boolean
  html: string
}

class EnterTitle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.state = {
      focused: false,
      html: props.flashcardStack?.Title || '',
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { flashcardStack } = this.props
    if (prevProps.flashcardStack?.Title !== flashcardStack?.Title) {
      this.setState({ html: flashcardStack?.Title || '' })
    }
  }

  onChangeHandler = (e: ContentEditableEvent) => {
    const {
      flowDetails,
      mutateFlowDetails,
      flashcardStack,
      mutateFlashcardStack,
      setSaving,
    } = this.props
    const decoded = removeHTMLTags(e.target.value)
    this.setState({ html: decoded })
    changeTitle(
      decoded,
      flowDetails,
      mutateFlowDetails,
      flashcardStack,
      mutateFlashcardStack,
      setSaving,
    )
  }

  render() {
    const { disabled } = this.props
    const { html, focused } = this.state

    return (
      <div className="my-2">
        <div className="min-h-8 relative">
          <ContentEditable
            disabled={disabled}
            html={html}
            onChange={this.onChangeHandler}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            placeholder="Untitled"
            className={classNames(
              { 'text-info/80': html === '' },
              'truncate duration-100 text-xl font-semibold outline-none w-48 sm:w-64 md:w-72 transition-all cursor-text',
            )}
          />
          <div
            className={classNames(
              { 'w-48 sm:w-64 md:w-72': focused },
              { 'w-0': !focused },
              'absolute bottom-0 transition-all h-1 bg-primary mx-auto',
            )}
          />
        </div>
      </div>
    )
  }
}

export default EnterTitle
