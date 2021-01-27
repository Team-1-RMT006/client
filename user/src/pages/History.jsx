import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, DropdownButton, Dropdown, Form, Row, Col, Card, CardDeck } from 'react-bootstrap'
import NavbarMenu from '../component/NavbarMenu'
import CardEvent from '../component/CardEvent'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets } from '../store/action/ticketAction'


export default function History() {
  const tickets = useSelector(state => state.ticketReducer.tickets);
  const ticketsIsLoading = useSelector(state => state.ticketReducer.ticketsIsLoading);
  const ticketsError = useSelector(state => state.ticketReducer.ticketsError);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  if (ticketsIsLoading) {
    return <h1>Loading ... </h1>
  }

  return (
    <Container fluid>
      <NavbarMenu />

      <div style={{ width: '1280px', height: '500px', backgroundColor: '#FFF5D5', alignItems: 'center', borderRadius: '5px', margin: '20px auto' }}>
        <div inline style={{ padding: '17px 35px' }}>
          <h1>History</h1><br />
          <Form className='mr-auto'>
            <Form.Control style={{ width: '500px' }} type="text" placeholder="Search" />
          </Form>
        </div>

        <Row>
          <CardDeck style={{ margin: '0px 17px' }}>
            {tickets.map(ticket => <Col lg={6} className='p-3'><CardEvent data={ticket} key={ticket.id}/></Col>)}
          </CardDeck>
        </Row>
      </div>
    </Container>
  )
}