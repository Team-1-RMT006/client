import React, { useEffect, useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlist, removeWishlist } from '../store/action/wishlistAction'
import { Button } from 'reactstrap'

export default function CardEvent(props) {
  // const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchWishlist())
  // }, [wishlists])

  function goDetail(id) {
    history.push(`event/${id}`)
  }

  function handleRemoveWishlist() {
    dispatch(removeWishlist(props.data.id))
  }

  return (
    <Col lg={6}>
      <Card style={{ width: '18rem', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Img variant="top" src={'https://infomedhealth.com/wp-content/uploads/2018/11/download.png'} />
        <Card.Body>
          <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <h6 ><strong>{'Blink182 Concert'}</strong></h6>
            <div>
              <span>{'2021-02-13'}</span>
            </div>
            <div>
              <span>{'19:30'}</span>
            </div>
          </div>
          <hr /><br />
          <Button
            color='danger'
            onClick={() => goDetail(props.data.id)}
            style={{
              margin: 3,
              width: '180px',
              height: '30px',
              color: 'whitesmoke',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Pay Now
      </Button>
          <Button
            color='danger'
            onClick={handleRemoveWishlist}
            style={{
              margin: 3,
              width: '180px',
              height: '30px',
              color: 'whitesmoke',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Remove Wishlist
        </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}