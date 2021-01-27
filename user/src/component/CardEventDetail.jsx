import React, { useState } from 'react'
import { Container, Card, CardGroup, Form, Row, Col, Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function CardEventDetail(props) {
  const history = useHistory();
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  function goHistory() {
    history.push('/history');
  }

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
      {/* <div>{JSON.stringify(props.ticket)}</div> */}
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
              <Card.Img src='data:image/png;base64,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' style={{
                objectFit: 'cover',
                borderRadius: 10,
              }} />
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
                      <Form.Control as="select" defaultValue="Choose...">
                        <option> - Choose Ticket - </option>
                        <option>{'Reguler'}:  {regTicket}</option>
                        <option>{'VIP'}:  {vipTicket}</option>
                        <option>{'WIP Ticket'}:  {wipTicket}</option>
                      </Form.Control>
                    </Form.Group>
                  }
                  {(jumlahCapacity <= 0) ?
                    <div></div> :
                    <span>Jumlah: {jumlahCapacity} Capacity</span>
                  }
                  <br />
                </Form>
                {(statusTicket === 'unpaid') ?
                  <Button
                    // onClick={handleShow}
                    type='submit'
                    style={{
                      marginRight: 5,
                      width: 100,
                      height: 30,
                      color: 'whitesmoke',
                      backgroundColor: '#F2C94C',
                      border: 'none'
                    }}
                  >
                    Pay Now
                  </Button> :
                  <Button
                    // onClick={handleShow}
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
                    Book
                  </Button>
                }
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