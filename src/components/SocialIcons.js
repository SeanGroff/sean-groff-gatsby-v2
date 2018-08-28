import React from 'react'
import styled from 'react-emotion'

import TwitterIcon from './TwitterIcon'
import LinkedinIcon from './LinkedinIcon'
import GithubIcon from './GithubIcon'
import MediumIcon from './MediumIcon'
import CodepenIcon from './CodepenIcon'

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function SocialIcons() {
  return (
    <IconsWrapper>
      <TwitterIcon />
      <LinkedinIcon />
      <GithubIcon />
      <MediumIcon />
      <CodepenIcon />
    </IconsWrapper>
  )
}
