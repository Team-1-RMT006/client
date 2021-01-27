import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, CardDeck, Col } from 'react-bootstrap'
import Jumbotron from '../component/Jumbotron'
import CardEvent from '../component/CardEvent'
import FooterPage from '../component/FooterPage'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvent } from '../store/action/eventAction'
import { fetchWishlist } from '../store/action/wishlistAction'
import { useHistory } from "react-router-dom"

export default function Mainpage() {
  const events = useSelector(state => state.eventReducer.events)
  const loading = useSelector(state => state.eventReducer.loading)
  // const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)


  const dispatch = useDispatch()
  const history = useHistory()

  // useEffect(() => {
  //   if(!localStorage.getItem("access_token")) {
  //     history.push("/login")
  //   }
  // })

  useEffect(() => {
    if (loading) {
      dispatch(fetchEvent())
      dispatch(fetchWishlist())
    }
  }, [events, loading])

  if (loading) {
    return (<h1>Loading.....</h1>)
  }

  return (
    <Container fluid>
      <Jumbotron />
      <hr /><br />
      <div
        style={{
          width: '1280px',
          height: '500px',
          backgroundColor: '#0FF5D5',
          alignItems: 'center',
          borderRadius: '10px',
          margin: '0 auto'
        }}
      >
        <div style={{ padding: '22px 42px 0px 42px' }}>
          <h1>Event</h1>
          <hr />
        </div>
        <Row>
          <Col>
            <CardDeck style={{ margin: '15px 12px' }}>
              {events.map(event => {
                return <CardEvent data={event} key={event.id} />
              })}
            </CardDeck>
          </Col>
        </Row>
      </div>
      <FooterPage />
    </Container >
  )
}