import React from 'react';

import {homeItems} from '../../data';
import { Link } from 'react-router-dom';

import {Row,Col,Card,Container} from 'react-bootstrap';
import '../../coustom.scss';

const Hero = () => {
  return (
    <Container>
      <h3 className='mt-5 hero'>Sprawdź również</h3>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4 mt-4">
        {homeItems.map(item => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.price} PLN
                    </Card.Text>
                    <Card.Text>
                      {item.info}
                    </Card.Text>
                    <Card.Text>
                      <Link to='/' className='card__links'>More</Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        ))}
      </Row>        
    </Container>
  )
}

export default Hero
