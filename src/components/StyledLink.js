import React from 'react'
import styled from 'react-emotion'

import MediaQueries from '../utils/MediaQueries'
import Colors from '../utils/Colors'
import '../fonts/OpenSansLight.css'

const { mediumUp } = MediaQueries
const { lightText, hoverText } = Colors

const StyledAchorTag = styled.a`
  display: none;
  ${mediumUp} {
    display: inline-block;
    color: ${lightText};
    font-family: OpenSans-Light;
    font-size: 13px;
    padding: 0 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s linear;

    &:hover {
      cursor: pointer;
      color: ${hoverText};
      transition: color 0.2s linear;
    }
  }
`

export default function StyledLink(props) {
  return (
    <StyledAchorTag {...props} rel="noopener">
      {props.children}
    </StyledAchorTag>
  )
}
