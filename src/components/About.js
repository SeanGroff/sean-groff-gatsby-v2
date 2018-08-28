import React from 'react'
import styled from 'react-emotion'

import Heading from './Heading'
import Colors from '../utils/Colors'
import Globals from '../utils/Globals'
import '../fonts/LoraRegular.css'

const { bgColorLight, darkText } = Colors

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorLight};
  padding: ${Globals.sectionPadding};
`

const Content = styled.p`
  font-size: 16px;
  font-family: Lora-Regular;
  line-height: 30px;
  color: ${darkText};
  margin: 0;
  max-width: 968px;
  padding: 0 10px;
`

export default function About() {
  return (
    <AboutContainer id="about">
      <Heading>{'About me'}</Heading>
      <Content>
        {
          'I am a Full-Stack Web Developer and React-Native Mobile App Developer. I am well versed with React, React-Native, VueJS, Redux, GraphQL, Apollo, Node, Express, and MongoDB. Learning new things and staying on the bleeding edge of JavaScript is my passion. I strive for pixel perfect responsive styles, highly performant solutions, code reuse and code maintainability.'
        }
      </Content>
    </AboutContainer>
  )
}
