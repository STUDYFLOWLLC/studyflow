/* eslint-disable import/prefer-default-export */

import { formatHTML } from 'dinnerplate/common/formatHTML'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

export const HighlightHTML = ({ code }: { code: string }) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={formatHTML(code)}
    language="jsx"
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })} key={i}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)
