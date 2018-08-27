import React from 'react'
import FaGithubSquare from 'react-icons/lib/fa/github-square'

import Icon from './Icon'

export default function GithubIcon() {
  return (
    <Icon href="https://www.github.com/SeanGroff">
      <FaGithubSquare size={25} />
    </Icon>
  )
}
