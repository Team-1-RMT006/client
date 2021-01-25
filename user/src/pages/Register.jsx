import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {userRegister} from '../store/action/user'

export default function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handlerSubmit = e => {
    e.preventDefault()
    const payload = {
      firstName: firstName.target.value,
      lastName: lastName.target.value,
      email: email.target.value,
      password: password.target.value
    }
    // console.log(firstName.target.value, lastName.target.value, email.target.value, password.target.value);
    userRegister(payload)
    console.log(payload)
    
    // dispatch({
    //   type: 'REGISTER',
    //   payload: {
    //     firstName,
    //     lastName,
    //     email,
    //     password
    //   }
    // })
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          <img
            src="https://www.imore.com/sites/imore.com/files/styles/small/public/field/image/2020/08/image-size-icon.jpg"
            style={{ margin: '210px' }} />
        </Col>
        <Col xs={10} md={8} style={{ margin: '55px 0' }}>
          <div style={{ marginBottom: '50px', marginLeft: '700px' }}>
            <span>Already a member? <Link to={'/login'} style={{ color: 'orange' }}><strong> Sign In</strong></Link></span>
          </div>
          <Container style={{ padding: '25px', width: '400px' }}>
            <h2><strong>Sign Up to Createvent</strong></h2><br />
            <Button style={{
              width: '100%',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#2D9CDB',
              border: 'none'
            }}>
              Sign Up with Google
              </Button><br /><br />
            <hr />
            <Form onSubmit={handlerSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId='firstname'>
                    <Form.Label><strong>First Name</strong></Form.Label>
                    <Form.Control type='firstname' onChange={(e) => setFirstName(e)} placeholder={firstName} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='formGroupLastName'>
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control type='lastname' onChange={e => setLastName(e)} placeholder={lastName} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId='formGroupEmail'>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control type='email' onChange={e => setEmail(e)} placeholder={email} />
              </Form.Group>
              <Form.Group controlId='formGroupPassword'>
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control type='password' onChange={e => setPassword(e)} placeholder={password} />
              </Form.Group>
              <br />
              <Button
                type='submit'
                style={{
                  width: '100px',
                  color: 'whitesmoke',
                  backgroundColor: '#F2C94C',
                  border: 'none',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                }}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}