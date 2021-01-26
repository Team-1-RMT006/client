import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    // console.log(email.target.value, password.target.value)
    dispatch({
      type: 'LOGIN',
      payload: {
        email,
        password
      }
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4} style={{ backgroundColor: 'white' }}>
          <img
            src="https://www.imore.com/sites/imore.com/files/styles/small/public/field/image/2020/08/image-size-icon.jpg"
            style={{ margin: '210px' }} />
        </Col>
        <Col xs={10} md={8} style={{ margin: '55px 0' }}>
          <div style={{ marginBottom: '50px', marginLeft: '700px' }}>
            <span>Not a member? <Link to={'/register'} style={{ color: 'orange' }}><strong> Sign Up</strong></Link></span>
          </div>
          <Container style={{ padding: '25px', width: '400px' }}>
            <h2><strong>Sign In to Createvent</strong></h2><br />
            <Button
              style={{
                width: '100%',
                height: '30px',
                color: 'whitesmoke',
                backgroundColor: '#2D9CDB',
                border: 'none'
              }}
            >
              Sign In with Google
              </Button><br /><br />
            <hr />
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='email'>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control onChange={(value) => setEmail(value)} type='email' placeholder={email} />
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control onChange={(value) => setPassword(value)} type='password' placeholder={password} />
              </Form.Group>
              <br />
              <Button
                type='submit'
                style={{
                  width: '100px',
                  height: '30px',
                  color: 'whitesmoke',
                  backgroundColor: '#F2C94C',
                  border: 'none',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                }}
              >
                Sign In
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}