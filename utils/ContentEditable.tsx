/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/no-danger-with-children */

import deepEqual from 'fast-deep-equal'
import * as PropTypes from 'prop-types'
import * as React from 'react'

export type ContentEditableEvent = React.SyntheticEvent<any, Event> & {
  target: { value: string }
}
type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R
type DivProps = Modify<
  JSX.IntrinsicElements['div'],
  { onChange: (event: ContentEditableEvent) => void }
>
export interface Props extends DivProps {
  html: string
  disabled?: boolean
  tagName?: string
  className?: string
  style?: Record<string, unknown>
  innerRef?: React.RefObject<HTMLElement>
}

/**
 * A simple component for an html element with editable contents.
 */
export default class ContentEditable extends React.Component<Props> {
  // eslint-disable-next-line react/destructuring-assignment
  lastHtml: string = this.props.html

  el: React.RefObject<HTMLElement> = React.createRef<HTMLElement>()

  static propTypes = {
    html: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    tagName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    const { props } = this
    const el = this.getEl()

    // We need not rerender if the change of props simply reflects the user's edits.
    // Rerendering in this case would make the cursor/caret jump

    // Rerender if there is no element yet... (somehow?)
    if (!el) return true

    // ...or if html really changed... (programmatically, not by user edit)
    // if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
    //   console.log(nextProps.html)
    //   console.log(el.innerHTML)
    //   console.log('here')
    //   return true
    // }

    // Handle additional properties
    return (
      props.disabled !== nextProps.disabled ||
      props.tagName !== nextProps.tagName ||
      // props.className !== nextProps.className ||
      props.innerRef !== nextProps.innerRef ||
      props.placeholder !== nextProps.placeholder ||
      !deepEqual(props.style, nextProps.style)
    )
  }

  componentDidUpdate() {
    const { html } = this.props

    const el = this.getEl()
    if (!el) return

    // Perhaps React (whose VDOM gets outdated because we often prevent
    // rerendering) did not update the DOM. So we update it manually now.
    if (html !== el.innerHTML) {
      el.innerHTML = html
    }
    this.lastHtml = html
  }

  getEl = () => this.el.current as HTMLElement

  emitChange = (originalEvt: React.SyntheticEvent<any>) => {
    const { onChange } = this.props

    const el = this.getEl() as HTMLElement
    if (!el) return

    const html = el.innerHTML
    if (onChange && html !== this.lastHtml) {
      // Clone event with Object.assign to avoid
      // "Cannot assign to read only property 'target' of object"
      const evt = {
        ...originalEvt,
        target: {
          value: html,
        },
      }
      onChange(evt as ContentEditableEvent)
    }
    this.lastHtml = html
  }

  render() {
    const {
      tagName,
      html,
      innerRef,
      onBlur,
      onKeyUp,
      onKeyDown,
      disabled,
      children,
      ...props
    } = this.props

    return React.createElement(
      tagName || 'div',
      {
        ...props,
        ref: innerRef || this.el,
        onInput: this.emitChange,
        onBlur: onBlur || this.emitChange,
        onKeyUp: onKeyUp || this.emitChange,
        onKeyDown: onKeyDown || this.emitChange,
        contentEditable: !disabled,
        dangerouslySetInnerHTML: { __html: html },
      },
      children,
    )
  }
}
