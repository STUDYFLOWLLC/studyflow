import { MyValue } from 'dinnerplate/types/plateTypes'
import { FlowType } from 'types/Flow'

export default function bodyFromType(type: FlowType) {
  switch (type) {
    case FlowType.LECTURE:
      return JSON.stringify([
        {
          type: 'h3',
          children: [
            {
              text: 'Section A: ',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'Important thing lecturer said',
            },
          ],
        },
        {
          type: 'h3',
          children: [
            {
              text: 'Section B: ',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'Important thing lecturer said',
            },
          ],
        },
        {
          type: 'h3',
          children: [
            {
              text: 'Section C: ',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'Important thing lecturer said',
            },
          ],
        },
      ] as MyValue)
    case FlowType.DISCUSSION:
      return JSON.stringify([
        {
          type: 'ul',
          children: [
            {
              type: 'li',
              children: [{ type: 'text', text: 'Tidbit #1' }],
            },
            {
              type: 'li',
              children: [{ type: 'text', text: 'Tidbit #2' }],
            },
            {
              type: 'li',
              children: [{ type: 'text', text: 'Tidbit #3' }],
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'Important thing disuccion leader or classmate said',
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'Important thing disuccion leader or classmate said',
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'Important thing disuccion leader or classmate said',
            },
          ],
        },
      ] as MyValue)
    case FlowType.NOTE:
      return 'N## - Note Title'
    case FlowType.ASSIGNMENT:
      return 'Assignment Title'
    case FlowType.ASSESSMENT:
      return 'Assessment Title'
    case FlowType.SYNTHESIS:
      return 'Synthesis #'
    default:
      return 'Untitled'
  }
}
