import React, { useState, useEffect } from 'react'
import { Container, Card, CardGroup, Form, Row, Col } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import { updateCapacity, updateCapacityVip, updateCapacityVvip, fetchEventById, fetchEvents } from "../store/action/eventAction"
import { useDispatch, useSelector } from 'react-redux'
import { payment, realPayment } from '../hooks/apiRequest'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function CardEventDetail(props) {

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

  const handleShow = (e) => {
    e.preventDefault()
    let className = null
    let price = null

    if (selected === '1') {
      className = "regular"
      price = detailEvent.price_regular
      dispatch(updateCapacity({
        id: detailEvent.id,
        value: detailEvent.capacity_regular - 1
      }))
    } else
      if (selected === "2") {
        className = "vip"
        price = detailEvent.price_vip
        dispatch(updateCapacityVip({
          id: detailEvent.id,
          value: detailEvent.capacity_vip - 1
        }))
      } else if (selected === "3") {
        className = "vvip"
        price = detailEvent.price_vvip
        dispatch(updateCapacityVvip({
          id: detailEvent.id,
          value: detailEvent.capacity_vvip - 1
        }))
      }

    let inputData = {
      class: className,
      EventId: detailEvent.id,
      seat: "a01",
      price,

    }
    payment(inputData)
      .then(data => {
        Swal.fire({
          icon: 'success',
          title: 'Transaction succesed',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        console.log(err, '<<<<< error payment');
      })
    history.push({
      pathname: '/history',
      state: {
        [detailEvent]: detailEvent
      }
    })
  }




  const sendToMyTicket = () => {
    // kirim data ticket ke redux dan pindah page ke home
    history.push('/')
  }

  useEffect(() => {
    dispatch(fetchEventById(params.id))
    console.log(params.id, '<<<params')
    dispatch(fetchEvents())
  }, [])
  console.log(detailEvent, 'detailEvent')

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
        <Card className="m-3 border-0 shadow" style={{
          backgroundColor: '#FFF4EB',
          borderRadius: 10,
          padding: '3rem'
        }}>
          <h1><strong>Detail Event</strong></h1>
          <hr />
          <Row>
            <Col>
              {
                (statusTicket === 'unpaid') ?
                  <Card.Img src={detailEvent?.event_preview}
                    style={{
                      objectFit: 'cover',
                      borderRadius: 10,
                    }} /> :
                  <Card.Img src={detailEvent?.event_preview}
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
                    <Form.Control type='text' placeholder={detailEvent?.title} disabled />
                  </Form.Group>
                  <Form.Group controlId='formGroupEventOrganizer'>
                    <Form.Label><strong>Event Organizer</strong></Form.Label>
                    <Form.Control type='text' placeholder={detailEvent?.Organizer?.name} disabled />
                  </Form.Group>
                  <Form.Group controlId='formGroupLocation'>
                    <Form.Label><strong>Location</strong></Form.Label>
                    <Form.Control type='text' placeholder={detailEvent?.location} disabled />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId='formGroupEventDate'>
                        <Form.Label><strong>Event Date</strong></Form.Label>
                        <Form.Control type='text' placeholder={detailEvent?.date} disabled />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId='formGroupTime'>
                        <Form.Label><strong>Event Time</strong></Form.Label>
                        <Form.Control type='text' placeholder={detailEvent?.time} disabled />
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
                          detailEvent?.capacity_regular ? <option value='1'>Regular: {detailEvent.price_regular}</option> : ''
                        }
                        {
                          detailEvent?.capacity_vip ? <option value='2' >VIP: {detailEvent.price_vip}</option> : ''
                        }
                        {
                          detailEvent?.capacity_vvip ? <option value='3'>VVIP: {detailEvent.price_vvip}</option> : ''
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
                <Button
                  onClick={handleShow}
                  type='submit'
                  color='danger'
                  style={{
                    marginRight: 5,
                    width: 100,
                    height: 30,
                    color: 'whitesmoke',
                    border: 'none'
                  }}
                >
                  Book
                  </Button>
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