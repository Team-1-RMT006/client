import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Row, Col, CardDeck } from 'react-bootstrap'
import CardEvent from '../component/CardEvent'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets } from '../store/action/ticketAction'


export default function History() {
  const tickets = useSelector(state => state.ticketReducer.tickets);
  const ticketsIsLoading = useSelector(state => state.ticketReducer.ticketsIsLoading);
  const ticketsError = useSelector(state => state.ticketReducer.ticketsError);
  const newEvents = useSelector(state => state.eventReducer.newEvents)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  if (ticketsIsLoading) {
    return <h1>Loading ... </h1>
  }

  return (
    
    <Container fluid>
      <div style={{ width: '1280px', backgroundColor: '#FFF5D5', alignItems: 'center', borderRadius: '5px', margin: '20px auto' }}>
        <div inline style={{ padding: '17px 35px' }}>
          <h1><strong>Tickets</strong></h1>
          <hr /><br />
          <Form className='mr-auto'>
            <Form.Control style={{ width: '500px' }} type="text" placeholder="Search" />
          </Form>
        </div>
        <Row>
          <CardDeck style={{ margin: '0px 17px' }}>
            {tickets.map(ticket => {
              return <CardEvent data={ticket} key={ticket.id} />
            })}
          </CardDeck>
        </Row>
      </div>
    </Container>
  )
}