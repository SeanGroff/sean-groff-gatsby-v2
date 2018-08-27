import React from 'react'
import FaCodepen from 'react-icons/lib/fa/codepen'

import Icon from './Icon'

export default function CodepenIcon() {
  return (
    <Icon href="https://codepen.io/sgroff04" target="_blank">
      <FaCodepen size={25} />
    </Icon>
  )
}
