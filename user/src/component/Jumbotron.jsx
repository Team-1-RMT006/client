import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
// import {useDispatch, useSelector} from 'react-redux'


export default function Jumbotron() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
            style={{
              padding: '15px',
              height: '450px',
              objectFit: 'cover'
            }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}