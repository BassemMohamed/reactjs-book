import { css } from 'styled-components'
import { CARD_SIZES } from './Card'

export default css`
  width: 100%;
  cursor: pointer;
  text-align: left;
  min-width: 300px;
  max-width: 500px;
  position: relative;
  transition: all 0.8s;
  background-color: ${(props) => props.theme.colors.neutral['100']};
  box-shadow: 0px 1px 5px ${(props) => props.theme.colors.primary['300']};

  .image {
    height: 250px;
    background-size: cover;
    background-position: top left;
    background-image: url(${(props) => props.image});
  }

  .content {
    padding: 20px;
    padding-bottom: 45px;
    border: 1px solid ${(props) => props.theme.colors.primary['300']};
    ${(props) => (props.size === CARD_SIZES.SMALL ? '' : 'border-top: 0;')}

    h2 {
      margin: 0 0 15px 0;
    }
    p {
      margin: 5px 0;
    }
    h3 {
      margin: 0;
      left: 20px;
      bottom: 20px;
      position: absolute;
    }
  }
`
