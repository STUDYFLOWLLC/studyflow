/* eslint-disable no-nested-ternary */
import {
  AutoformatPlugin,
  Combobox,
  ComboboxItemProps,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createDndPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlateUI,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  ELEMENT_CODE_BLOCK,
  MentionCombobox,
  Plate,
  StyledElement,
  useEditorRef,
} from '@udecode/plate'
import { createJuicePlugin } from '@udecode/plate-juice'
import {
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-ui-excalidraw'
import classNames from 'classnames'
import { alignPlugin } from 'dinnerplate/align/alignPlugin'
import { autoformatPlugin } from 'dinnerplate/autoformat/autoformatPlugin'
import {
  CommandItem,
  COMMAND_MENU_ITEMS,
  TCommandMenuItem,
} from 'dinnerplate/commandMenu/commandMenuItems'
import { editableProps } from 'dinnerplate/common/editableProps'
import { resetBlockTypePlugin } from 'dinnerplate/common/resetBlockTypePlugin'
import { selectOnBackspacePlugin } from 'dinnerplate/common/selectOnBackspacePlugin'
import { softBreakPlugin } from 'dinnerplate/common/softBreakPlugin'
import { withStyledDraggables } from 'dinnerplate/common/withStyledDraggables'
import { CursorOverlayContainer } from 'dinnerplate/cursor/CursorOverlayContainer'
import { dragOverCursorPlugin } from 'dinnerplate/cursor/dragOverCursorPlugin'
import { exitBreakPlugin } from 'dinnerplate/exitbreak/exitBreakPlugin'
import { indentPlugin } from 'dinnerplate/indent/indentPlugin'
import { linkPlugin } from 'dinnerplate/link/linkPlugin'
import { MENTIONABLES } from 'dinnerplate/mention/mentionables'
import { withStyledPlaceHolders } from 'dinnerplate/placeholder/withStyledPlaceHolders'
import { MarkBalloonToolbar } from 'dinnerplate/toolbar/MarkBalloonToolbar'
import { Toolbar } from 'dinnerplate/toolbar/Toolbar'
import { ToolbarButtons } from 'dinnerplate/toolbar/ToolbarButtons'
import { trailingBlockPlugin } from 'dinnerplate/trailingblock/trailingBlockPlugin'
import {
  createMyPlugins,
  MyEditor,
  MyPlatePlugin,
  MyValue,
} from 'dinnerplate/types/plateTypes'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { matchSorter } from 'match-sorter'
import { CSSProperties, useMemo, useRef, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { commandMenuOnKeyDownHandler } from './commandMenu/commandMenuOnKeyDownHandler'
import MainItem from './commandMenu/MainItem'

let components = createPlateUI({
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  [ELEMENT_CODE_BLOCK]: StyledElement,
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)

const styles: Record<string, CSSProperties> = {
  container: { position: 'relative' },
}

interface Props {
  flowId?: string
  saveFlow?: (body: MyValue) => void
  defaultValue?: MyValue
  readonly?: boolean
}

export default function MainPlate({
  flowId,
  saveFlow,
  defaultValue,
  readonly,
}: Props) {
  const { flowDetails } = useFlowDetails(flowId)

  const containerRef = useRef(null)

  const [lastSave, setLastSave] = useState(0)

  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          createComboboxPlugin({
            handlers: {
              onKeyDown: commandMenuOnKeyDownHandler(),
            },
          }),
          createParagraphPlugin(),
          createBlockquotePlugin({
            options: {
              hotkey: 'mod+shift+q',
            },
          }),
          createTodoListPlugin(),
          createHeadingPlugin(),
          createImagePlugin(),
          createHorizontalRulePlugin(),
          createLinkPlugin(linkPlugin),
          createListPlugin(),
          createTablePlugin(),
          createMediaEmbedPlugin(),
          // createExcalidrawPlugin() as MyPlatePlugin,
          // createCodeBlockPlugin(),
          createAlignPlugin(alignPlugin),
          createBoldPlugin(),
          createCodePlugin({
            options: {
              hotkey: 'mod+e',
            },
          }),
          createItalicPlugin(),
          createHighlightPlugin(),
          createUnderlinePlugin(),
          createStrikethroughPlugin({
            options: {
              hotkey: 'mod+shift+s',
            },
          }),
          createSubscriptPlugin(),
          createSuperscriptPlugin(),
          createFontColorPlugin(),
          createFontBackgroundColorPlugin(),
          // createFontSizePlugin(),
          createKbdPlugin(),
          createNodeIdPlugin(),
          createDndPlugin(),
          dragOverCursorPlugin,
          createIndentPlugin(indentPlugin),
          createAutoformatPlugin<
            AutoformatPlugin<MyValue, MyEditor>,
            MyValue,
            MyEditor
          >(autoformatPlugin),
          createResetNodePlugin(resetBlockTypePlugin),
          createSoftBreakPlugin(softBreakPlugin),
          createExitBreakPlugin(exitBreakPlugin),
          // createNormalizeTypesPlugin(forcedLayoutPlugin),
          createTrailingBlockPlugin(trailingBlockPlugin),
          createSelectOnBackspacePlugin(selectOnBackspacePlugin),
          createMentionPlugin(),
          createJuicePlugin() as MyPlatePlugin,
        ],
        {
          components: withStyledDraggables(components),
        },
      ),
    [],
  )

  const renderMenuItem = (
    item: ComboboxItemProps<{
      itemDetails: CommandItem
      onSelect: (item: TCommandMenuItem) => void
    }>,
  ) => {
    const editor = useEditorRef()

    return (
      <MainItem
        item={item.item.data.itemDetails}
        onSelect={() => {
          // @ts-expect-error its not picking up my custom typing, but this works.
          item.item.data.onSelect(item.item.data.itemDetails, editor)
        }}
      />
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={classNames(
          { 'pointer-events-none': readonly },
          'max-w-3xl mx-auto overflow-none prose',
          'prose-h1:text-4xl prose-h1:my-0 prose-h1:py-[0.4rem] prose-h1:font-bold prose-h1:leading-normal',
          'prose-h2:text-3xl prose-h2:my-0 prose-h2:py-[0.35rem] prose-h2:font-bold prose-h2:leading-normal',
          'prose-h3:text-2xl prose-h3:my-0 prose-h3:py-[0.3rem] prose-h3:font-bold prose-h3:leading-normal',
          'prose-p:text-lg prose-p:my-0 prose-p:py-[0.25rem] t prose-p:leading-normal',
        )}
      >
        <Toolbar>
          <ToolbarButtons />
        </Toolbar>

        <div ref={containerRef} style={styles.container}>
          <Plate<MyValue, MyEditor>
            // enabled={!readonly}
            editableProps={editableProps}
            initialValue={
              flowDetails?.Body
                ? JSON.parse(flowDetails.Body)
                : defaultValue || [
                    {
                      type: 'p',
                      children: [
                        {
                          text: 'Welcome to Studyflow :)',
                        },
                      ],
                    },
                  ]
            }
            plugins={plugins}
            onChange={(value) => {
              const now = new Date().getTime()
              if (now - lastSave > 5 * 1000 && saveFlow) {
                setLastSave(now)
                saveFlow(value)
              }
            }}
          >
            <MarkBalloonToolbar />

            <MentionCombobox items={MENTIONABLES} />

            <Combobox
              classNames={{
                root: 'overflow-x-none overflow-y-auto shadow-sm border rounded-md',
                item: '',
                highlightedItem: '',
              }}
              id="test"
              trigger="/"
              // @ts-expect-error again its not picking up my custom types but it works
              items={COMMAND_MENU_ITEMS}
              filter={(search) => {
                const itemsSorted = matchSorter(COMMAND_MENU_ITEMS, search, {
                  keys: [
                    'data.itemDetails.label',
                    'data.itemDetails.description',
                    'data.itemDetails.abbreviation',
                  ],
                  // @ts-expect-error base sorter weird typing error but it works
                  baseSort: (a: Command, b: Command) =>
                    COMMAND_MENU_ITEMS.indexOf(a) <
                    COMMAND_MENU_ITEMS.indexOf(b)
                      ? -1
                      : 1,
                })
                return (item) => itemsSorted.includes(item)
              }}
              onRenderItem={renderMenuItem}
            />

            <CursorOverlayContainer containerRef={containerRef} />
          </Plate>
        </div>
      </div>
    </DndProvider>
  )
}
