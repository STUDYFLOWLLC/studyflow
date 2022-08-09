/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
// @refresh reset

import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
import Element from 'components/slate/renderers/Element'
import Toolbar from 'components/slate/toolbar/Toolbar'
import isHotkey from 'is-hotkey'
import { useCallback, useState } from 'react'
import { createEditor, Descendant, Editor, Range } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, useFocused, withReact } from 'slate-react'
import { Color } from 'types/Colors'
import {
  ElementAlign,
  ElementType,
  Format,
  RenderElementProps,
  RenderLeafProps,
} from 'types/CustomSlate'
import { BlockTag } from 'types/Flow'
import customEditor from 'utils/slate/customEditor'
import Leaf from './Leaf'

const HOTKEYS = {
  'mod+b': Format.BOLD,
  'mod+i': Format.ITALIC,
  'mod+u': Format.UNDERLINE,
  'mod+e': Format.CODE,
}
const blockTypes = [
  Format.HEADING_ONE,
  Format.HEADING_TWO,
  Format.HEADING_THREE,
  Format.BLOCK_QUOTE,
  Format.NUMBERED_LIST,
  Format.BULLETED_LIST,
]

// eslint-disable-next-line no-use-before-define

interface Props {
  disabled?: boolean
}

export default function SlateMain({ disabled }: Props) {
  const [openMenu, setOpenMenu] = useState(false)

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    [],
  )
  const renderLeaf = useCallback((props: RenderLeafProps) => {
    if (props.leaf.placeholder) {
      return (
        <span contentEditable className="w-full relative p-0 m-0">
          <Leaf {...props} />
          <span
            contentEditable={false}
            className="w-96 absolute -top-1 left-0 opacity-30 pointer-events-none"
          >
            Type / to open menu
          </span>
        </span>
      )
    }
    return <Leaf {...props} />
  }, [])

  const [editor] = useState(() => withReact(withHistory(createEditor())))

  const [value, setValue] = useState<Descendant[]>([
    {
      type: ElementType.PARAGRAPH,
      align: ElementAlign.ALIGN_LEFT,
      children: [
        {
          text: '',
        },
      ],
    },
  ])

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' && !openMenu) {
        event.preventDefault()
        Editor.insertBreak(editor)
        for (let i = 0; i < blockTypes.length; i += 1) {
          const format = blockTypes[i]
          if (customEditor.isBlockActive(editor, format)) {
            customEditor.toggleBlock(editor, format)
          }
        }
      }

      if (event.key === 'Enter' && openMenu) {
        event.preventDefault()
      }

      if (event.key === '/') {
        setOpenMenu(true)
      }

      const keys = Object.keys(HOTKEYS)
      const values = Object.values(HOTKEYS)
      for (let i = 0; i < keys.length; i += 1) {
        if (isHotkey(keys[i], event)) {
          event.preventDefault()
          const mark = values[i]
          customEditor.toggleMark(editor, mark)
        }
      }
    },
    [],
  )

  return (
    <div
      className={classNames(
        'max-w-3xl mx-auto overflow-none prose',
        'prose-h1:text-4xl prose-h1:my-0 prose-h1:py-[0.4rem] prose-h1:font-bold prose-h1:leading-normal',
        'prose-h2:text-3xl prose-h2:my-0 prose-h2:py-[0.35rem] prose-h2:font-bold prose-h2:leading-normal',
        'prose-h3:text-2xl prose-h3:my-0 prose-h3:py-[0.3rem] prose-h3:font-bold prose-h3:leading-normal',
        'prose-p:text-lg prose-p:my-0 prose-p:py-[0.25rem] t prose-p:leading-normal',
      )}
    >
      <Slate editor={editor} value={value} onChange={setValue}>
        <Toolbar />
        <Editable
          id="editor"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          decorate={([node, path]) => {
            if (editor.selection != null) {
              if (
                (!Editor.isEditor(node) &&
                  Editor.string(editor, [path[0]]) === '' &&
                  Range.includes(editor.selection, path) &&
                  Range.isCollapsed(editor.selection)) ||
                (value.length === 1 &&
                  // @ts-expect-error this works, fuck off
                  !value[0].children?.[0].text &&
                  !useFocused())
              ) {
                return [
                  {
                    ...editor.selection,
                    placeholder: true,
                  },
                ]
              }
            }
            return []
          }}
          spellCheck
          autoFocus
          onKeyDown={onKeyDown}
        />
      </Slate>

      {openMenu && (
        <FlowMenu
          editor={editor}
          theme="light"
          onTagSelect={(tag: BlockTag) => console.log(tag)}
          onColorSelect={(color: Color) => console.log(color)}
          close={() => setOpenMenu(false)}
        />
      )}
    </div>
  )
}

// const withMentions = (editor: BaseEditor & ReactEditor & HistoryEditor) => {
//   const { isInline, isVoid } = editor

//   editor.isInline = (element) =>
//     element.type === ElementType.MENTION ? true : isInline(element)

//   editor.isVoid = (element) =>
//     element.type === ElementType.MENTION ? true : isVoid(element)

//   return editor
// }

// const insertMention = (
//   editor: BaseEditor & ReactEditor & HistoryEditor,
//   character: string,
// ) => {
//   const mention: MentionElement = {
//     type: ElementType.MENTION,
//     character,
//     children: [{ text: '' }],
//   }
//   Transforms.insertNodes(editor, mention)
//   Transforms.move(editor)
// }

// const CHARACTERS = [
//   'Aayla Secura',
//   'Adi Gallia',
//   'Admiral Dodd Rancit',
//   'Admiral Firmus Piett',
//   'Admiral Gial Ackbar',
//   'Admiral Ozzel',
//   'Admiral Raddus',
//   'Admiral Terrinald Screed',
//   'Admiral Trench',
//   'Admiral U.O. Statura',
//   'Agen Kolar',
//   'Agent Kallus',
//   'Aiolin and Morit Astarte',
//   'Aks Moe',
//   'Almec',
//   'Alton Kastle',
//   'Amee',
//   'AP-5',
//   'Armitage Hux',
//   'Artoo',
//   'Arvel Crynyd',
//   'Asajj Ventress',
//   'Aurra Sing',
//   'AZI-3',
//   'Bala-Tik',
//   'Barada',
//   'Bargwill Tomder',
//   'Baron Papanoida',
//   'Barriss Offee',
//   'Baze Malbus',
//   'Bazine Netal',
//   'BB-8',
//   'BB-9E',
//   'Ben Quadinaros',
//   'Berch Teller',
//   'Beru Lars',
//   'Bib Fortuna',
//   'Biggs Darklighter',
//   'Black Krrsantan',
//   'Bo-Katan Kryze',
//   'Boba Fett',
//   'Bobbajo',
//   'Bodhi Rook',
//   'Borvo the Hutt',
//   'Boss Nass',
//   'Bossk',
//   'Breha Antilles-Organa',
//   'Bren Derlin',
//   'Brendol Hux',
//   'BT-1',
//   'C-3PO',
//   'C1-10P',
//   'Cad Bane',
//   'Caluan Ematt',
//   'Captain Gregor',
//   'Captain Phasma',
//   'Captain Quarsh Panaka',
//   'Captain Rex',
//   'Carlist Rieekan',
//   'Casca Panzoro',
//   'Cassian Andor',
//   'Cassio Tagge',
//   'Cham Syndulla',
//   'Che Amanwe Papanoida',
//   'Chewbacca',
//   'Chi Eekway Papanoida',
//   'Chief Chirpa',
//   'Chirrut Îmwe',
//   'Ciena Ree',
//   'Cin Drallig',
//   'Clegg Holdfast',
//   'Cliegg Lars',
//   'Coleman Kcaj',
//   'Coleman Trebor',
//   'Colonel Kaplan',
//   'Commander Bly',
//   'Commander Cody (CC-2224)',
//   'Commander Fil (CC-3714)',
//   'Commander Fox',
//   'Commander Gree',
//   'Commander Jet',
//   'Commander Wolffe',
//   'Conan Antonio Motti',
//   'Conder Kyl',
//   'Constable Zuvio',
//   'Cordé',
//   'Cpatain Typho',
//   'Crix Madine',
//   'Cut Lawquane',
//   'Dak Ralter',
//   'Dapp',
//   'Darth Bane',
//   'Darth Maul',
//   'Darth Tyranus',
//   'Daultay Dofine',
//   'Del Meeko',
//   'Delian Mors',
//   'Dengar',
//   'Depa Billaba',
//   'Derek Klivian',
//   'Dexter Jettster',
//   'Dineé Ellberger',
//   'DJ',
//   'Doctor Aphra',
//   'Doctor Evazan',
//   'Dogma',
//   'Dormé',
//   'Dr. Cylo',
//   'Droidbait',
//   'Droopy McCool',
//   'Dryden Vos',
//   'Dud Bolt',
//   'Ebe E. Endocott',
//   'Echuu Shen-Jon',
//   'Eeth Koth',
//   'Eighth Brother',
//   'Eirtaé',
//   'Eli Vanto',
//   'Ellé',
//   'Ello Asty',
//   'Embo',
//   'Eneb Ray',
//   'Enfys Nest',
//   'EV-9D9',
//   'Evaan Verlaine',
//   'Even Piell',
//   'Ezra Bridger',
//   'Faro Argyus',
//   'Feral',
//   'Fifth Brother',
//   'Finis Valorum',
//   'Finn',
//   'Fives',
//   'FN-1824',
//   'FN-2003',
//   'Fodesinbeed Annodue',
//   'Fulcrum',
//   'FX-7',
//   'GA-97',
//   'Galen Erso',
//   'Gallius Rax',
//   'Garazeb "Zeb" Orrelios',
//   'Gardulla the Hutt',
//   'Garrick Versio',
//   'Garven Dreis',
//   'Gavyn Sykes',
//   'Gideon Hask',
//   'Gizor Dellso',
//   'Gonk droid',
//   'Grand Inquisitor',
//   'Greeata Jendowanian',
//   'Greedo',
//   'Greer Sonnel',
//   'Grievous',
//   'Grummgar',
//   'Gungi',
//   'Hammerhead',
//   'Han Solo',
//   'Harter Kalonia',
//   'Has Obbit',
//   'Hera Syndulla',
//   'Hevy',
//   'Hondo Ohnaka',
//   'Huyang',
//   'Iden Versio',
//   'IG-88',
//   'Ima-Gun Di',
//   'Inquisitors',
//   'Inspector Thanoth',
//   'Jabba',
//   'Jacen Syndulla',
//   'Jan Dodonna',
//   'Jango Fett',
//   'Janus Greejatus',
//   'Jar Jar Binks',
//   'Jas Emari',
//   'Jaxxon',
//   'Jek Tono Porkins',
//   'Jeremoch Colton',
//   'Jira',
//   'Jobal Naberrie',
//   'Jocasta Nu',
//   'Joclad Danva',
//   'Joh Yowza',
//   'Jom Barell',
//   'Joph Seastriker',
//   'Jova Tarkin',
//   'Jubnuk',
//   'Jyn Erso',
//   'K-2SO',
//   'Kanan Jarrus',
//   'Karbin',
//   'Karina the Great',
//   'Kes Dameron',
//   'Ketsu Onyo',
//   'Ki-Adi-Mundi',
//   'King Katuunko',
//   'Kit Fisto',
//   'Kitster Banai',
//   'Klaatu',
//   'Klik-Klak',
//   'Korr Sella',
//   'Kylo Ren',
//   'L3-37',
//   'Lama Su',
//   'Lando Calrissian',
//   'Lanever Villecham',
//   'Leia Organa',
//   'Letta Turmond',
//   'Lieutenant Kaydel Ko Connix',
//   'Lieutenant Thire',
//   'Lobot',
//   'Logray',
//   'Lok Durd',
//   'Longo Two-Guns',
//   'Lor San Tekka',
//   'Lorth Needa',
//   'Lott Dod',
//   'Luke Skywalker',
//   'Lumat',
//   'Luminara Unduli',
//   'Lux Bonteri',
//   'Lyn Me',
//   'Lyra Erso',
//   'Mace Windu',
//   'Malakili',
//   'Mama the Hutt',
//   'Mars Guo',
//   'Mas Amedda',
//   'Mawhonic',
//   'Max Rebo',
//   'Maximilian Veers',
//   'Maz Kanata',
//   'ME-8D9',
//   'Meena Tills',
//   'Mercurial Swift',
//   'Mina Bonteri',
//   'Miraj Scintel',
//   'Mister Bones',
//   'Mod Terrik',
//   'Moden Canady',
//   'Mon Mothma',
//   'Moradmin Bast',
//   'Moralo Eval',
//   'Morley',
//   'Mother Talzin',
//   'Nahdar Vebb',
//   'Nahdonnis Praji',
//   'Nien Nunb',
//   'Niima the Hutt',
//   'Nines',
//   'Norra Wexley',
//   'Nute Gunray',
//   'Nuvo Vindi',
//   'Obi-Wan Kenobi',
//   'Odd Ball',
//   'Ody Mandrell',
//   'Omi',
//   'Onaconda Farr',
//   'Oola',
//   'OOM-9',
//   'Oppo Rancisis',
//   'Orn Free Taa',
//   'Oro Dassyne',
//   'Orrimarko',
//   'Osi Sobeck',
//   'Owen Lars',
//   'Pablo-Jill',
//   'Padmé Amidala',
//   'Pagetti Rook',
//   'Paige Tico',
//   'Paploo',
//   'Petty Officer Thanisson',
//   'Pharl McQuarrie',
//   'Plo Koon',
//   'Po Nudo',
//   'Poe Dameron',
//   'Poggle the Lesser',
//   'Pong Krell',
//   'Pooja Naberrie',
//   'PZ-4CO',
//   'Quarrie',
//   'Quay Tolsite',
//   'Queen Apailana',
//   'Queen Jamillia',
//   'Queen Neeyutnee',
//   'Qui-Gon Jinn',
//   'Quiggold',
//   'Quinlan Vos',
//   'R2-D2',
//   'R2-KT',
//   'R3-S6',
//   'R4-P17',
//   'R5-D4',
//   'RA-7',
//   'Rabé',
//   'Rako Hardeen',
//   'Ransolm Casterfo',
//   'Rappertunie',
//   'Ratts Tyerell',
//   'Raymus Antilles',
//   'Ree-Yees',
//   'Reeve Panzoro',
//   'Rey',
//   'Ric Olié',
//   'Riff Tamson',
//   'Riley',
//   'Rinnriyin Di',
//   'Rio Durant',
//   'Rogue Squadron',
//   'Romba',
//   'Roos Tarpals',
//   'Rose Tico',
//   'Rotta the Hutt',
//   'Rukh',
//   'Rune Haako',
//   'Rush Clovis',
//   'Ruwee Naberrie',
//   'Ryoo Naberrie',
//   'Sabé',
//   'Sabine Wren',
//   'Saché',
//   'Saelt-Marae',
//   'Saesee Tiin',
//   'Salacious B. Crumb',
//   'San Hill',
//   'Sana Starros',
//   'Sarco Plank',
//   'Sarkli',
//   'Satine Kryze',
//   'Savage Opress',
//   'Sebulba',
//   'Senator Organa',
//   'Sergeant Kreel',
//   'Seventh Sister',
//   'Shaak Ti',
//   'Shara Bey',
//   'Shmi Skywalker',
//   'Shu Mai',
//   'Sidon Ithano',
//   'Sifo-Dyas',
//   'Sim Aloo',
//   'Siniir Rath Velus',
//   'Sio Bibble',
//   'Sixth Brother',
//   'Slowen Lo',
//   'Sly Moore',
//   'Snaggletooth',
//   'Snap Wexley',
//   'Snoke',
//   'Sola Naberrie',
//   'Sora Bulq',
//   'Strono Tuggs',
//   'Sy Snootles',
//   'Tallissan Lintra',
//   'Tarfful',
//   'Tasu Leech',
//   'Taun We',
//   'TC-14',
//   'Tee Watt Kaa',
//   'Teebo',
//   'Teedo',
//   'Teemto Pagalies',
//   'Temiri Blagg',
//   'Tessek',
//   'Tey How',
//   'Thane Kyrell',
//   'The Bendu',
//   'The Smuggler',
//   'Thrawn',
//   'Tiaan Jerjerrod',
//   'Tion Medon',
//   'Tobias Beckett',
//   'Tulon Voidgazer',
//   'Tup',
//   'U9-C4',
//   'Unkar Plutt',
//   'Val Beckett',
//   'Vanden Willard',
//   'Vice Admiral Amilyn Holdo',
//   'Vober Dand',
//   'WAC-47',
//   'Wag Too',
//   'Wald',
//   'Walrus Man',
//   'Warok',
//   'Wat Tambor',
//   'Watto',
//   'Wedge Antilles',
//   'Wes Janson',
//   'Wicket W. Warrick',
//   'Wilhuff Tarkin',
//   'Wollivan',
//   'Wuher',
//   'Wullf Yularen',
//   'Xamuel Lennox',
//   'Yaddle',
//   'Yarael Poof',
//   'Yoda',
//   'Zam Wesell',
//   'Zev Senesca',
//   'Ziro the Hutt',
//   'Zuckuss',
// ]
