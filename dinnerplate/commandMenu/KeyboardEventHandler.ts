import { HandlerReturnType } from '@udecode/plate-core'
import { KeyboardEvent } from 'react'

// TODO: move to core
export type KeyboardEventHandler = (event: KeyboardEvent) => HandlerReturnType
