import React from 'react'
import styled from 'react-emotion'

import Colors from '../utils/Colors'

const { lightText, hoverText } = Colors

const MyLogo = styled.a`
  color: ${lightText};
  font-size: 18px;
  font-family: OpenSans-Regular;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: ${hoverText};
    transition: color 0.2s linear;
  }
`

export default function Logo(props) {
  return (
    <MyLogo {...props} href="#me" rel="noopener">
      {props.children}
    </MyLogo>
  )
}
