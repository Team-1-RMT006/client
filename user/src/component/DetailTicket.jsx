import React, { useState, useEffect } from 'react'
import { Container, Card, CardGroup, Form, Row, Col } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import { updateCapacity, updateCapacityVip, updateCapacityVvip } from "../store/action/eventAction"
import { fetchTickets, fetchTicketById } from '../store/action/ticketAction'
import { useDispatch, useSelector } from 'react-redux'
import { payment, realPayment } from '../hooks/apiRequest'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Button } from 'reactstrap'

export default function DetailTicket(props) {
  const history = useHistory();
  const params = useParams()
  const [selected, setSelected] = useState()
  const dispatch = useDispatch()
  const detailEvent = useSelector(state => state.eventReducer.detailEvent)
  const newEvents = useSelector(state => state.eventReducer.newEvents)

  const buttonPayment = () => {
    // e.preventDefault()
    dispatch(realPayment())
    Swal.fire('Payment Success')
    history.push('/')
  }

  const sendToMyTicket = () => {
    // kirim data ticket ke redux dan pindah page ke home
    history.push('/')
  }

  useEffect(() => {
    dispatch(fetchTicketById(params.id))
    dispatch(fetchTickets())
  }, [])

  if (!props.ticket) {
    return <h1>Loading ...</h1>
  }

  const goHome = () => {
    history.push('/')
  }
  {/*dummy capacity seat dan harga ticket */ }
  const jumlahCapacity = 0
  const priceTicket = true
  const regTicket = 100
  const vipTicket = 1000
  const wipTicket = 10000
  const statusTicket = 'unpaid'

  return (
    <Container fluid>
      {/* <Button
        onClick={goHistory}
        style={{
          width: 100,
          height: 30,
          color: 'whitesmoke',
          backgroundColor: '#F2C94C',
          border: 'none'
        }}
      >
        Back to History
          </Button> */}

      <CardGroup className="m-4 d-block">
        <Card className="m-5 border-0 shadow" style={{
          backgroundColor: '#FFF5D5',
          borderRadius: 10,
          padding: '3rem'
        }}>
          <h1><strong>Detail Event</strong></h1>
          <hr/>
          <Row>
            <Col>
              {
                (statusTicket === 'unpaid') ?
                  <Card.Img src={detailEvent.event_preview}
                    style={{
                      objectFit: 'cover',
                      borderRadius: 10,
                    }} /> :
                  <Card.Img src={detailEvent.event_preview}
                    style={{
                      objectFit: 'cover',
                      borderRadius: 10,
                    }} />
              }
            </Col>
            <Col>
              <Card.Body>
                <Form>
                  <Form.Group controlId='formGroupEventName'>
                    <Form.Label><strong>Event Name</strong></Form.Label>
                    <Form.Control type='text' placeholder={detailEvent.title} disabled />
                  </Form.Group>
                  <Form.Group controlId='formGroupEventOrganizer'>
                    <Form.Label><strong>Event Organizer</strong></Form.Label>
                    <Form.Control type='text' placeholder={detailEvent.Organizer?.name} disabled />
                  </Form.Group>
                  <Form.Group controlId='formGroupLocation'>
                    <Form.Label><strong>Location</strong></Form.Label>
                    <Form.Control type='text' placeholder={detailEvent.location} disabled />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId='formGroupEventDate'>
                        <Form.Label><strong>Event Date</strong></Form.Label>
                        <Form.Control type='text' placeholder={detailEvent.date} disabled />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId='formGroupTime'>
                        <Form.Label><strong>Event Time</strong></Form.Label>
                        <Form.Control type='text' placeholder={detailEvent.time} disabled />
                      </Form.Group>
                    </Col>
                  </Row>
            
                  {(jumlahCapacity <= 0) ?
                    <div></div> :
                    <span>Jumlah: {jumlahCapacity} Capacity</span>
                  }
                  <br />
                </Form>
                {/* {
                  newEvents.map(event => {
                    return (
                      <>
                        <option onSelect={(id) => dispatch(updateCapacity({
                          id: event.id,
                          value: event.capacity_regular - 1,
                        }))}>Regular</option>
                      </>
                    )
                  })
                } */}
                {(statusTicket === 'unpaid') &&
                  <Button
                    onClick={buttonPayment}
                    color='danger'
                    type='submit'
                    style={{
                      margin: 5,
                      width: 100,
                      height: 30,
                      color: 'whitesmoke',
                      border: 'none'
                    }}
                  >
                    Pay Now
                  </Button>}

                <Button
                  onClick={goHome}
                  color='danger'
                  style={{
                    margin: 5,
                    width: 100,
                    height: 30,
                    color: 'whitesmoke',
                      border: 'none'
                  }}
                >
                  Cancel
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  )
}          