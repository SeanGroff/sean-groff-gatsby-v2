import React from 'react'
import styled from 'react-emotion'

import Hero from '../migrate/components/Hero'
import About from '../migrate/components/About'
import Portfolio from '../migrate/components/Portfolio'
import ContactMe from '../migrate/components/ContactMe'
import Footer from '../migrate/components/Footer'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
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
