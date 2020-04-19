import React from 'react'
import styled from 'styled-components'
import css from './Card.style'
import Typography from '../../Typography'

const handleClick = (url) => {
  window.location = url
}

export const CARD_SIZES = {
  REGULAR: 'REGULAR',
  SMALL: 'SMALL',
}

/*
  Card

  props :
    * title
    * image
    * desc
    * date
*/
const Card = (props) => {
  const { className, title, image, url, desc, date, size } = props

  return (
    <div className={className} onClick={() => handleClick(url)}>
      {size !== CARD_SIZES.SMALL && (
        <div className='image' title={title} alt={title} image={image} />
      )}
      <div className='content'>
        <Typography.Heading type={2}>{title}</Typography.Heading>
        {desc && size !== CARD_SIZES.SMALL && (
          <Typography.Paragraph>{desc}</Typography.Paragraph>
        )}
        {date && <Typography.Heading type={3}>{date}</Typography.Heading>}
      </div>
    </div>
  )
}

export default styled(Card)`
  ${css}
`
