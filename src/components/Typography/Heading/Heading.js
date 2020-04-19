import React from 'react'
import styled from 'styled-components'
import { withTheme } from '../../../utils'
import css from './Heading.style'

const Heading = (props) => {
  const { className, children, type } = props

  switch (type) {
    case 1:
      return (
        <h1 className={className} {...props}>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 className={className} {...props}>
          {children}
        </h2>
      )
    case 3:
      return (
        <h3 className={className} {...props}>
          {children}
        </h3>
      )
    default:
      return (
        <h1 className={className} {...props}>
          {children}
        </h1>
      )
  }
}

export default withTheme(styled(Heading)`
  ${css}
`)
