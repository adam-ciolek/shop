import React from 'react'

import Home from '../../pages/Home/Home';
import Hero from '../../pages/Hero/Hero'

import {Container} from 'react-bootstrap';
import '../../coustom.scss'


const Main = () => {
  return (
    <main>
      <Home />
      <Container>
        <Hero />
      </Container>
    </main>
  )
}

export default Main
