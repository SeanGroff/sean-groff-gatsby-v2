import React from 'react'
import styled from 'react-emotion'

import MediaQueries from '../utils/MediaQueries'
import Colors from '../utils/Colors'
import '../fonts/OpenSansBold.css'

const { mediumUp } = MediaQueries
const { lightBlueText, lightText } = Colors

const StyledHeading = styled.h2`
  color: ${props => (props.primary ? lightText : lightBlueText)};

  font-size: 28px;
  font-family: OpenSans-Bold;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 20px 0;

  ${mediumUp} {
    font-size: 48px;
  }
`

export default function Heading(props) {
  return <StyledHeading {...props}>{props.children}</StyledHeading>
}
