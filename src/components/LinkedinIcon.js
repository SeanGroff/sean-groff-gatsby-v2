import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

import Icon from './Icon'

export default function LinkedinIcon() {
  return (
    <Icon href="https://www.linkedin.com/in/sgroff" target="_blank">
      <FaLinkedin size={25} />
    </Icon>
  )
}
