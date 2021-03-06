import React from 'react'
import styled from 'react-emotion'

import Logo from './Logo'
import SocialIcons from './SocialIcons'
import Colors from '../utils/Colors'
import Globals from '../utils/Globals'
import '../fonts/LoraRegular.css'

const { bgColorDark, lightText, lighterBlueText, hoverText } = Colors

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorDark};
  color: ${lightText};
  padding: ${Globals.sectionPadding};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Copyright = styled.p`
  font-size: 14px;
  font-family: Lora-Regular;
  line-height: 30px;
  margin: 24px 0;
`

const Link = styled.a`
  color: ${lighterBlueText};
  font-size: 14px;
  font-family: Lora-Regular;
  line-height: 30px;
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: ${hoverText};
    transition: color 0.2s linear;
  }
`

export default function Footer(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Logo>{'SG'}</Logo>
        <Copyright>
          {'Copyright © '}
          {Globals.getYear()}
          <Link {...props} href="#me" rel="noopener">
            {' Sean Groff'}
          </Link>
        </Copyright>
        <SocialIcons />
      </ContentWrapper>
    </Wrapper>
  )
}
