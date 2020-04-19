import React from 'react'
import styled from 'styled-components'
import { withTheme } from '../../../utils'
import css from './Paragraph.style'

const Paragraph = (props) => {
  const { className, children } = props

  return (
    <p className={className} {...props}>
      {children}
    </p>
  )
}

export default withTheme(styled(Paragraph)`
  ${css}
`)
