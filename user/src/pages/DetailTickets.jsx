import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { fetchTicketById } from '../store/action/ticketAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailTicket from '../component/DetailTicket'

export default function DetailTickets() {
  const dispatch = useDispatch();
  const params = useParams();
  const TicketId = params.id;
  const ticket = useSelector(state => state.ticketReducer.ticket);
  const ticketIsLoading = useSelector(state => state.ticketReducer.ticketIsLoading);
  const ticketError = useSelector(state => state.ticketReducer.ticketError);

  useEffect(() => {
    dispatch(fetchTicketById(TicketId))
  }, [])

  if (ticketIsLoading) {
    return <h1>Loading ...</h1>
  }
  return (
    <Container fluid>
      <DetailTicket ticket={ticket} />
    </Container>
  )
}