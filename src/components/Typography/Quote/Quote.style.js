import { css } from 'styled-components'
import { QUOTE_ALIGNMENT } from './Quote'

const AlignLeftStyle = (theme) => `
    padding: 10px 0 10px 10px;
    border-left: 5px solid ${theme.colors.accent['200']};
    p, h6 {
        text-align: left;
    }
`
const AlignRightStyle = (theme) => `
    padding: 10px 10px 10px 0;
    border-right: 5px solid ${theme.colors.accent['200']};
    p, h6 {
        text-align: right;
    }
`

export default css`
  margin: 10px 0;
  p {
    font-size: 24px;
    line-height: 100%;
    margin: 0 0 0.5em 0;
    ${(props) => props.theme.fonts.cairo.light}
    color: ${(props) => props.theme.colors.neutral['300']};
  }
  h3 {
    margin: 0;
    display: table; /* Alternative to width: fit-content; */
    font-size: 20px;
    line-height: 100%;
    ${(props) => props.theme.fonts.cairo.bold}
    color: ${(props) => props.theme.colors.primary['200']};
    cursor: ${(props) => (props.author.link ? 'pointer' : 'default')};
    text-decoration: ${(props) => (props.author.link ? 'underline' : 'none')};
  }

  ${(props) =>
    props.align === QUOTE_ALIGNMENT.RIGHT
      ? AlignRightStyle(props.theme)
      : AlignLeftStyle(props.theme)}
`
