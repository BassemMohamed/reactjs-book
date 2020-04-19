import React from 'react'
import styled from 'styled-components'
import { withTheme } from '../../../utils'
import css from './Quote.style'

/*
  Quote

  Props:
    * Text
    * Author
      * name
      * link
    * Align
*/

export const QUOTE_ALIGNMENT = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

const Quote = (props) => {
  const { className, text, author } = props

  return (
    <div className={className} {...props}>
      <p>{text}</p>
      <a href={author.page} target='_blank' rel='noopener noreferrer'>
        <h3>{author.name}</h3>
      </a>
    </div>
  )
}

export default withTheme(styled(Quote)`
  ${css}
`)
