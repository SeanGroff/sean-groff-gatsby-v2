import React from 'react'
import styled from 'react-emotion'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import StyledLink from './StyledLink'
import LinkGatsby from './LinkGatsby'
import MediaQueries from '../utils/MediaQueries'
import Colors from '../utils/Colors'
import '../fonts/OpenSansRegular.css'

const { mediumUp } = MediaQueries
const { lightText, bgColorDark } = Colors

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: ${bgColorDark};
  height: 50px;
  padding: 0 20px;
  color: ${lightText};
  box-shadow: 0 1px 3px 0 rgba(20, 20, 20, 0.8);
  ${mediumUp} {
    box-shadow: none;
    background-color: transparent;
  }
`

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 15px;
`

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  position: relative;
`

export default function NavBar() {
  return (
    <Wrapper>
      <LeftColumn>
        <Logo>{'SG'}</Logo>
      </LeftColumn>
      <RightColumn>
        <StyledLink href="#about">{'about'}</StyledLink>
        <StyledLink href="#portfolio">{'portfolio'}</StyledLink>
        <StyledLink href="#contact">{'contact me'}</StyledLink>
        <LinkGatsby to="/blog">{'blog'}</LinkGatsby>
        <HamburgerMenu />
      </RightColumn>
    </Wrapper>
  )
}
