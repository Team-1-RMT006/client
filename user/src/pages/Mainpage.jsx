import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, CardDeck, Carousel } from 'react-bootstrap'
import CardEvent from '../component/CardEvent'
import FooterPage from '../component/FooterPage'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvent } from '../store/action/eventAction'
import { fetchWishlist } from '../store/action/wishlistAction'
import { useHistory } from "react-router-dom"
import { showBanner } from '../store/action/bannerAction'

export default function Mainpage() {
  const events = useSelector(state => state.eventReducer.events)
  const loading = useSelector(state => state.eventReducer.loading)
  const banner = useSelector(state => state.bannerReducer.banner)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (loading) {
      dispatch(fetchEvent())
      dispatch(fetchWishlist())
      dispatch(showBanner())
    }
  }, [events, loading, banner])

  if (loading) {
    return (<h1>Loading.....</h1>)
  }
  return (
    <Container fluid>
      <Container>
        <Carousel>
          {banner.map(el => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={el.image_url}
                  style={{
                    padding: '15px',
                    height: '450px',
                    objectFit: 'cover'
                  }}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </Container>
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
          <CardDeck style={{ margin: '15px 12px' }}>
            {events.map(event => {
              return <CardEvent data={event} key={event.id} />
            })}
          </CardDeck>
        </Row>
      </div>
      <FooterPage />
    </Container >
  )
}