import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, CardDeck, Col } from 'react-bootstrap'
import NavbarMenu from '../component/NavbarMenu'
import Jumbotron from '../component/Jumbotron'
import CardEvent from '../component/CardEvent'
import FooterPage from '../component/FooterPage'
import { useHistory } from 'react-router-dom'

export default function Mainpage() {
  const history = useHistory()
  useEffect(() => {
    if(!localStorage.getItem("access_token")) {
      history.push("/login")
    }
  })

  return (
    <Container fluid>
      <NavbarMenu />
      <Jumbotron />
      <hr /><br />
      <div
        style={{
          width: '1280px',
          height: '500px',
          backgroundColor: '#0FF5D5',
          alignItems: 'center',
          borderRadius: '10px',
          margin: '0 auto'
        }}
      >
        <div style={{ padding: '22px 42px 0px 42px' }}>
          <h1>Event</h1>
          <hr />
        </div>
        <Row>
          <CardDeck style={{ margin: '0px 17px' }}>
            <Col lg={6} className='p-3'>
              <CardEvent />
            </Col>
            <Col lg={6} className='p-3'>
              <CardEvent />
            </Col>
            <Col lg={6} className='p-3'>
              <CardEvent />
            </Col>
          </CardDeck>
        </Row>
      </div>
      <FooterPage />
    </Container >
  )
}