import React from 'react'

import Navbar from './layout/Navbar/Navbar';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';


import {Container} from 'react-bootstrap';
import './coustom.scss'

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
