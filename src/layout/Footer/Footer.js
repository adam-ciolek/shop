import React from 'react';

import { Link } from 'react-router-dom';
import { social,links } from '../../data';

import './Footer.scss';
import {Col,Container,Row,Nav} from 'react-bootstrap';
import '../../coustom.scss';


const Footer = () => {
  return (
    <footer className='footer '>
      <Container className='mt-5 pt-4 pb-4'>
        <Row>
          <Col xs={12} md={6} className='footer__links'>
            {links.map(link=> (
              <Link to='/' key={link.id} className='mb-2 footer__link'>{link.link}</Link>
            ))}
          </Col>
          <Col md={6} className='mt-3'>
          <h3 className='footer__title'>Bądź z nami na:</h3>
          <div className='footer__icon'>
            {social.map(iconSocial => {
              const {id,icon,url} = iconSocial
              return (
                <Nav.Item key={id}>
                  <Nav.Link href={url}  className='footer__icon-link'>{icon}</Nav.Link>
                </Nav.Item>
              )
            })}  
          </div>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
