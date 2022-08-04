/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import {
  changeBack,
  changeBackImage,
  removeFlashcardBackImage,
} from 'hooks/repetition/flashcardHandlers'
import React from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import Dropzone from 'react-dropzone'
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
  uploading: boolean
}

class EnterBack extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.state = {
      focused: false,
      html: props.flashcard.Back,
      uploading: false,
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
    const { flashcard, flashcardStack, mutateFlashcardStack } = this.props
    const { html, focused, uploading } = this.state

    console.log(flashcard)

    return (
      <div className="my-2">
        <Dropzone
          onDrop={async (acceptedFiles) => {
            this.setState({ uploading: true })
            await changeBackImage(
              flashcard.FlashcardID,
              acceptedFiles[0],
              flashcardStack,
              mutateFlashcardStack,
            )
            this.setState({ uploading: false })
          }}
          accept={{ 'image/*': [] }}
          noClick
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()}>
              {(isDragActive || uploading || flashcard.BackImageUrl) && (
                <div>
                  {flashcard.BackImageUrl && (
                    <img
                      src={flashcard.BackImageUrl}
                      alt="The flashcard's front"
                      className="object-contain w-48 h-36 mx-auto my-0"
                    />
                  )}
                  {(isDragActive || uploading) && (
                    <div className="w-48 h-24 mx-auto border-dashed border-2 border-blue-300 flex flex-col items-center">
                      <input {...getInputProps()} accept="image/*" />
                      <p className="p-0 m-0">Drop any image!</p>
                      {uploading && <MainSpinner />}
                    </div>
                  )}
                </div>
              )}
              <div>
                <div className="min-h-8 relative">
                  <ContentEditable
                    html={html}
                    onChange={this.onChangeHandler}
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    placeholder="Enter definition, image, etc."
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
                <div className="flex justify-between">
                  <p className="uppercase text-sm font-medium text-info m-0 p-0 mt-1">
                    Back
                  </p>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  {flashcard.BackImageUrl ? (
                    <button
                      type="button"
                      className="hover:text-red-300 cursor-pointer uppercase text-sm font-medium text-info m-0 p-0 mt-1"
                      onClick={() =>
                        removeFlashcardBackImage(
                          flashcard.FlashcardID,
                          flashcardStack,
                          mutateFlashcardStack,
                        )
                      }
                      onKeyDown={() =>
                        removeFlashcardBackImage(
                          flashcard.FlashcardID,
                          flashcardStack,
                          mutateFlashcardStack,
                        )
                      }
                    >
                      Remove Image
                    </button>
                  ) : (
                    <div>
                      <label
                        htmlFor="fileSelect"
                        className="hover:text-blue-300 cursor-pointer uppercase text-sm font-medium text-info m-0 p-0 mt-1"
                      >
                        Drop Image
                      </label>
                      <input
                        id="fileSelect"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={async (e) => {
                          this.setState({ uploading: true })
                          await changeBackImage(
                            flashcard.FlashcardID,
                            e.target?.files?.[0],
                            flashcardStack,
                            mutateFlashcardStack,
                          )
                          this.setState({ uploading: false })
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    )
  }
}

export default EnterBack
