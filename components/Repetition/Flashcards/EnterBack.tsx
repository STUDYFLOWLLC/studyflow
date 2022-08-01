/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames'
import { changeBack } from 'hooks/repetition/flashcardHandlers'
import React from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { KeyedMutator } from 'swr'
import { Flashcard, FlashcardStack } from 'types/Repetition'

interface Props {
  flashcard: Flashcard
  flashcardStack: FlashcardStack | null
  mutateFlashcardStack: KeyedMutator<any>
  setSaving: (saving: boolean) => void
}

interface State {
  focused: boolean
  html: string
}

class EnterBack extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.state = {
      focused: false,
      html: props.flashcard.Back,
    }
  }

  onChangeHandler = (e: ContentEditableEvent) => {
    const { flashcard, flashcardStack, mutateFlashcardStack, setSaving } =
      this.props
    this.setState({ html: e.target.value })
    changeBack(
      flashcard.FlashcardID,
      e.target.value,
      flashcardStack,
      mutateFlashcardStack,
      setSaving,
    )
  }

  render() {
    const { html, focused } = this.state

    return (
      <div className="my-4">
        <div className="min-h-8 relative">
          <ContentEditable
            html={html}
            onChange={this.onChangeHandler}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            placeholder="Enter defintion, image, etc."
            className={classNames(
              { 'text-info/80': html === '' },
              'duration-100 border-b-2 outline-none w-48 sm:w-64 md:w-72 transition-all cursor-text',
            )}
          />
          <div
            className={classNames(
              { 'w-full': focused },
              { 'w-0': !focused },
              'absolute bottom-0 transition-all h-1 bg-primary mx-auto',
            )}
          />
        </div>
        <p className="uppercase text-sm font-medium text-info m-0 p-0 mt-1">
          Back
        </p>
      </div>
    )
  }
}

export default EnterBack
