import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registering } from '../hooks/apiRequest'
import {Button} from 'reactstrap'
import Swal from 'sweetalert2'

export default function Register() {
  const statusRegister = useSelector(state => state.statusRegister)
  // const [inputData, setInputData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [errorMsg, setErrorMsg] = useState([])
  const history = useHistory()

  const inputData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  }
  function handleRegister() {
    registering(inputData)
      .then(response => {
        Swal.fire('Your New Account Is Ready!');
        history.push('/login');
      })
      .catch(err => {
        Swal.fire(`${err.response.data.message}`)
        // setErrorMsg(err.response.data.message)
      })
  }


  const handlerSubmit = e => {
    e.preventDefault()
    handleRegister()
  }

  useEffect(() => {
    if (statusRegister.statusRegister) {
      history.push("/login")
    } else {
      console.log(statusRegister);
    }
  }, [statusRegister])

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          <img
            src='https://i.imgur.com/MX8I8iu.jpeg'
            style={{ margin: '180px', width: 200 }} />
        </Col>
        <Col xs={10} md={8} style={{ margin: '40px 0' }}>
          <div style={{ marginLeft: '700px', fontSize: 12 }}>
            <span>Already a member? <Link to={'/login'} style={{ color: 'orange' }}><strong> Sign In</strong></Link></span>
          </div>
          <Container style={{ padding: '25px', width: '500px' }}>
            <h2><strong>Sign Up to Createvent</strong></h2><br />
            {/* <Button style={{
              width: '100%',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#2D9CDB',
              border: 'none'
            }}>
              Sign Up with Google
              </Button><br /><br /> */}
            <hr />
            <Form onSubmit={handlerSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId='firstname'>
                    <Form.Label><strong>First Name</strong></Form.Label>
                    <Form.Control type='firstname' onChange={e => setFirstName(e.target.value)} placeholder={"e.g John"} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='formGroupLastName'>
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control type='lastname' onChange={e => setLastName(e.target.value)} placeholder={"e.g Cena"} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId='formGroupEmail'>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control type='email' onChange={e => setEmail(e.target.value)} placeholder={"wwe@mail.com"} />
              </Form.Group>
              <Form.Group controlId='formGroupPassword'>
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control type='password' onChange={e => setPassword(e.target.value)} placeholder={"Please input min 7 character"} />
              </Form.Group>
              <br />
              <Button
                color='danger'
                type='submit'
                style={{
                  width: '100px',
                  color: 'whitesmoke',
                  border: 'none',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}