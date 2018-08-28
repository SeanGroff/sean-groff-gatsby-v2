import React from 'react'
import styled from 'react-emotion'

import Colors from '../utils/Colors'

const { lightText, hoverText } = Colors

const StyledIcon = styled.a`
  color: ${lightText};
  padding: 0 10px;
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: ${hoverText};
    transition: color 0.2s linear;
  }
`

export default function Icon(props) {
  return (
    <StyledIcon {...props} rel="noopener">
      {props.children}
    </StyledIcon>
  )
}
