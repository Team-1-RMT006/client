import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlist, removeWishlist } from '../store/action/wishlistAction'

export default function CardEvent(props) {
  const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [showButton, setShowButton] = useState(true)
  const [local, setLocal] = useState(localStorage.getItem('access_token'))
  const temp = useSelector(state => state.userReducer.local)

  useEffect(() => {
    setLocal(localStorage.getItem('access_token'))
  }, [temp])

  useEffect(() => {
    // console.log('ini wishlist >>>>', wishlists)
    let isWishlist = false
    for (let i = 0; i < wishlists.length; i++) {
      if (wishlists[i].EventId === props.data.id) {
        isWishlist = true
      }
    }
    if (isWishlist) {
      setShowButton(false) // remove button
    } else {
      setShowButton(true) // add button
    }
  }, [wishlists])

  function goDetail(id) {
    history.push(`/event/${id}`)
  }

  function handleAddWishlist() {
    dispatch(addWishlist(props.data.id))
  }

  function handleRemoveWishlist() {
    for (let i = 0; i < wishlists.length; i++) {
      if (wishlists[i].EventId === props.data.id) {
        dispatch(removeWishlist(wishlists[i].id))
      }
    }
  }

  return (
    <Container>
      <Col>
        <Card style={{ flexDirection: 'row', margin: 10 }}>
          <Card.Img style={{ width: '125px' }} src={props.data.event_preview} />
          <Card.Body style={{ width: 220 }}>
            <h2><strong>{props.data.title}</strong></h2>
            <Card.Text>
              <h4>{props.data.location}</h4>
            </Card.Text>
            <Row>
              <Col>
                <h6>{props.data.date}</h6>
                <h6>{props.data.time}</h6>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer style={{ width: '250px' }}>
            {local &&
              (
                <div>
                  <Button
                    onClick={() => goDetail(props.data.id)}
                    style={{
                      margin: '20px 0px 0px 34px',
                      width: '150px',
                      height: '30px',
                      color: 'whitesmoke',
                      backgroundColor: '#F2C94C',
                      border: 'none',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                    }}>
                    Detail
                  </Button>
                  { (location.pathname === '/' && showButton) ?
                    (
                      <Button
                        onClick={handleAddWishlist}
                        style={{
                          margin: '8px 0px 12px 34px',
                          width: '150px',
                          height: '30px',
                          color: 'whitesmoke',
                          backgroundColor: '#F2C94C',
                          border: 'none',
                          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                        }}>
                        Add to Wishlist
                      </Button>
                    ) :
                    (
                      <Button
                        onClick={handleRemoveWishlist}
                        style={{
                          margin: '8px 0px 12px 34px',
                          width: '150px',
                          height: '30px',
                          color: 'whitesmoke',
                          backgroundColor: '#F2C94C',
                          border: 'none',
                          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                        }}>
                        Remove from Wishlist
                      </Button>
                    )}
                </div>
              )}
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  )
}