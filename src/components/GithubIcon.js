import React from 'react'
import { FaGithub } from 'react-icons/fa'

import Icon from './Icon'

export default function GithubIcon() {
  return (
    <Icon href="https://www.github.com/SeanGroff">
      <FaGithub size={25} />
    </Icon>
  )
}
