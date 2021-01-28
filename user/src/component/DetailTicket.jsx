import React, { useState, useEffect } from 'react'
import { Container, Card, CardGroup, Form, Row, Col, Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import { updateCapacity, updateCapacityVip, updateCapacityVvip } from "../store/action/eventAction"
import { fetchTickets, fetchTicketById } from '../store/action/ticketAction'
import { useDispatch, useSelector } from 'react-redux'
import { payment, realPayment } from '../hooks/apiRequest'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

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
          <Row>
            <Col>
              {
                (statusTicket === 'unpaid') ?
                  <Card.Img src={'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'}
                    style={{
                      objectFit: 'cover',
                      borderRadius: 10,
                    }} /> :
                  <Card.Img src={'data:image/png;base64,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'}
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
                    <Form.Control type='text' placeholder={'Weeding'} disabled />
                  </Form.Group>
                  <Form.Group controlId='formGroupEventOrganizer'>
                    <Form.Label><strong>Event Organizer</strong></Form.Label>
                    <Form.Control type='text' placeholder={'Bromo Ranger'} disabled />
                  </Form.Group>
                  <Form.Group controlId='formGroupLocation'>
                    <Form.Label><strong>Location</strong></Form.Label>
                    <Form.Control type='text' placeholder={'Bromo'} disabled />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId='formGroupEventDate'>
                        <Form.Label><strong>Event Date</strong></Form.Label>
                        <Form.Control type='text' placeholder={'12-05-2021'} disabled />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId='formGroupTime'>
                        <Form.Label><strong>Event Time</strong></Form.Label>
                        <Form.Control type='text' placeholder={'19:30'} disabled />
                      </Form.Group>
                    </Col>
                  </Row>
                  {(!priceTicket) ?
                    <div></div> :
                    <Form.Group controlId='formGroupName'>
                      <Form.Label><strong>Ticket Class</strong></Form.Label>
                      <Form.Control as="select" onChange={e => {
                        setSelected(e.target.value)
                        dispatch(updateCapacity({
                          id: detailEvent.id,
                          value: detailEvent.capacity_regular
                        }))
                      }} defaultValue="Choose...">
                        <option> - Choose Ticket - </option>
                        {
                          detailEvent.capacity_regular ? <option value='1'>Regular: {detailEvent.price_regular}</option> : ''
                        }
                        {
                          detailEvent.capacity_vip ? <option value='2' >VIP: {detailEvent.price_vip}</option> : ''
                        }
                        {
                          detailEvent.capacity_vvip ? <option value='3'>VVIP: {detailEvent.price_vvip}</option> : ''
                        }
                        {
                          // newEvents.map(event => {
                          // return (
                          // <option onSelect={(id) => dispatch(updateCapacity({
                          //   id: .id,
                          //   value: id.capacity_regular - 1,
                          // }))}>Regular</option>
                          //   )
                          // })
                        }

                      </Form.Control>
                    </Form.Group>
                  }
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
                    type='submit'
                    style={{
                      margin: 5,
                      width: 100,
                      height: 30,
                      color: 'whitesmoke',
                      backgroundColor: '#F2C94C',
                      border: 'none'
                    }}
                  >
                    Pay Now
                  </Button>}

                <Button
                  onClick={goHome}
                  style={{
                    margin: 5,
                    width: 100,
                    height: 30,
                    color: 'whitesmoke',
                    backgroundColor: '#F2C94C',
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