import React from 'react'
import styled from 'react-emotion'
import 'normalize.css'

import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export default function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Portfolio />
      <ContactMe />
      <Footer />
    </Container>
  )
}
