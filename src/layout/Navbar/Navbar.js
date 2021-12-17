import React,{useState} from 'react'
import {Link} from 'react-router-dom';

import { links } from '../../data';
import {FcDebian} from 'react-icons/fc';
import { BsFillBasketFill,BsListNested } from "react-icons/bs";
import {IoIosClose} from "react-icons/io";
import {Container} from 'react-bootstrap';
import './Navbar.scss';


const NavbarMenu = () => {
  const [hamburger,setHamburger] = useState(false);

  return (
    <>
      <Container>
        <div className='nav mt-3 mb-3'>
          <Link to='/home'><FcDebian className='nav__logo'/></Link>
          <div className={`${hamburger ? 'menu nav__menu' : 'nav__menu menu-close'}`}>
            {links.map(item => {
              const {id,link,path} = item;
              return (
                <Link key={id} to={path} className='nav__menu__link'>{link}</Link>
              )
            })}
          </div>
          <div className='nav__icons'>
            <Link to='/shop'><BsFillBasketFill className="nav__basket"/></Link>
            {hamburger ? <IoIosClose onClick={() => setHamburger(false)} className="nav__hamburger"/> : <BsListNested onClick={()=> setHamburger(!hamburger)} className="nav__hamburger"/>}
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