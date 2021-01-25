import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavbarMenu from '../component/NavbarMenu'
import CardEventDetail from '../component/CardEventDetail'

export default function DetailEvent() {
  return (
    <Container fluid>
      <NavbarMenu />
      <CardEventDetail />
    </Container>
  )
}