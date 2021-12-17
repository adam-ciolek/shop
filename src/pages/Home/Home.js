import React from 'react'

import {slideImgs} from '../../data'

import './Home.scss'
import {Carousel} from 'react-bootstrap';
import '../../coustom.scss'


const Home = () => {
  return ( 
    <Carousel className='home__img'>
      {slideImgs.map(slideImg => {
        const {id,img,title} = slideImg;
        return(
          <Carousel.Item interval={3000} key={id} >
            <img
              className="d-block w-100"
              src={img}
              alt={title}
            />
            <Carousel.Caption>
              <h3>{title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })}
      </Carousel>   
  )
}

export default Home
