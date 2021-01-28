import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from "../store/action/user"
import Swal from 'sweetalert2'
import { Button } from 'reactstrap'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  //ketika ada acces token di local nstorage dia langsung arahin ke main page. dengan bisa oakai local storage.
  // tapi ketika ga ada lovbaklb SVGAnimateTransformElement.s ,apanm n  sdia bnalik ke ? loghl


  const submitHandler = e => {
    e.preventDefault()
    // alert(password.target.value)
    const inputData = {
      email: email.target.value,
      password: password.target.value
    }
    dispatch(userLogin(inputData))
      .then(res => {
        localStorage.setItem("access_token", res.data.access_token)
        dispatch({ type: 'SET_LOCAL', payload: res.data.access_token })
        history.push("/")
      })
      .catch(err => {
        Swal.fire(`${err.response.data.message}`);
      })
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          <img
            src="https://www.imore.com/sites/imore.com/files/styles/small/public/field/image/2020/08/image-size-icon.jpg"
            style={{ margin: '180px' }} />
        </Col>
        <Col xs={10} md={8} style={{ margin: '40px 0' }}>
          <div style={{ marginBottom: '10px', marginLeft: '700px', fontSize: 12 }}>
            <span>Not a member? <Link to={'/register'} style={{ color: 'orange' }}><strong> Sign Up</strong></Link></span>
          </div>
          <Container style={{ padding: '20px', width: '500px' }}>
            <h2><strong>Sign In to Createvent</strong></h2><br />
            {/* <Button
              style={{
                width: '100%',
                height: '30px',
                color: 'whitesmoke',
                backgroundColor: '#2D9CDB',
                border: 'none'
              }}
            >
              Sign In with Google
              </Button><br /><br /> */}
            <hr />
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='email'>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control onChange={(value) => setEmail(value)} type='email' placeholder='your email'/>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control onChange={(value) => setPassword(value)} type='password' placeholder='your password'/>
              </Form.Group>
              <br />
              <Button
                color='danger'
                type='submit'
                style={{
                  width: '100px',
                  height: '30px',
                  color: 'whitesmoke',
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