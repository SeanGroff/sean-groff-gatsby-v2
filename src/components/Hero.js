import React from 'react'
import styled from 'react-emotion'

import NavBar from '../components/NavBar'
import Me from '../components/Me'
import hero from '../assets/hero1.jpg'
import Colors from '../utils/Colors'

const { transparentDarkBlue } = Colors

const HeroImage = styled.header`
  background: linear-gradient(${transparentDarkBlue}, ${transparentDarkBlue}), url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

export default function Hero() {
  return (
    <HeroImage>
      <NavBar />
      <Me />
    </HeroImage>
  )
}
