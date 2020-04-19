import { css } from 'styled-components'

const h1Styles = (theme) => `
  font-size: 42px;
  ${theme.fonts.cairo.bold};
`

const h2Styles = (theme) => `
  font-size: 30px;
  ${theme.fonts.cairo.semiBold};
`

const h3Styles = (theme) => `
  font-size: 20px;
  ${theme.fonts.cairo.bold};
  color: ${theme.colors.neutral['300']};
`

export default css`
  ${(props) => props.type === 1 && h1Styles(props.theme)}
  ${(props) => props.type === 2 && h2Styles(props.theme)}
  ${(props) => props.type === 3 && h3Styles(props.theme)}
  margin: 0.5em 0;
  line-height: 100%;
`
