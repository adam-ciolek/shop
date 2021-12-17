import React,{useState} from 'react'
import {Link} from 'react-router-dom';


import {FcDebian} from 'react-icons/fc';
import { BsFillBasketFill,BsListNested } from "react-icons/bs";
import {Container} from 'react-bootstrap';
import './Navbar.scss';


const NavbarMenu = () => {
  const [Hamburger,setHamburger] = useState(false);

  return (
    <>
      <Container>
        <div className='nav mt-3 mb-3'>
          <FcDebian className='nav__logo'/>
          <div className='nav__icons'>
            <BsFillBasketFill className="nav__basket"/>
            <BsListNested onClick={()=> setHamburger(true)} className="nav__hamburger"/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default NavbarMenu

{/* <Navbar.Brand href="#home"><FcDebian/></Navbar.Brand>
<Navbar.Toggle >
  <BsListNested />
</Navbar.Toggle>
<Navbar.Collapse>
  <Nav className="me-auto">
    <Link to='/nowosci'>Nowości</Link>
    <Nav.Link href="#link">Kobieta</Nav.Link>
    <Nav.Link href="#link">Mężczyzna</Nav.Link>
    <Nav.Link href="#link">Dziewczynka</Nav.Link>
    <Nav.Link href="#link">Chłopiec</Nav.Link>
    <Nav.Link href="#link">Winter offer Do -50%</Nav.Link>
  </Nav>
</Navbar.Collapse> */}