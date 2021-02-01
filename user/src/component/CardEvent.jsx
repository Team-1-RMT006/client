import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlist, removeWishlist } from '../store/action/wishlistAction'
import { useRouteMatch } from 'react-router-dom'
import { Button } from 'reactstrap'


export default function CardEvent(props) {
  const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [showButton, setShowButton] = useState(true)
  const [local, setLocal] = useState(localStorage.getItem('access_token'))
  const temp = useSelector(state => state.userReducer.local)
  const { path } = useRouteMatch()
  const event = useSelector(state => state.eventReducer.events)


  useEffect(() => {
    setLocal(localStorage.getItem('access_token'))
  }, [temp])

  useEffect(() => {
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

  function goTicketDetail(id) {
    history.push(`/ticket/${id}`)
  }

  function goEventDetail(id) {
    history.push(`/event/${id}`)
  }


  function getEventPic(id) {
    
  }

  function handleRemoveWishlist() {
    for (let i = 0; i < wishlists.length; i++) {
      if (wishlists[i].EventId === props.data.id) {
        dispatch(removeWishlist(wishlists[i].id))
      }
    }
  }

  return (
    <Col lg={6}>
      {
        path === '/' &&

        <Card style={{ flexDirection: 'row', margin: 10, width: '600px', height: 145 }}>
          <Card.Img style={{ width: '125px', objectFit: 'cover' }} src={props.data.event_preview} />
          <Card.Body style={{ width: 500 }}>
            <h6><strong>{props.data.title}</strong></h6>
            <Card.Text>
              <p>{props.data.location?.length >= 50 ? `${props.data.location.slice(0, 50)}...` : props.data.location}</p>
            </Card.Text>
            <Row>
              <Col sm={6}>
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
                    onClick={() => path === '/' ? goEventDetail(props.data.id) : goTicketDetail(props.data.id)}
                    color='danger'
                    style={{
                      margin: '28px 0px 0px 0px',
                      width: '180px',
                      height: '30px',
                      color: 'whitesmoke',
                      border: 'none',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                    }}>
                    Detail
                  </Button>
                  {/* { (path === '/') &&
                  (
                    <Button
                      color='danger'
                      onClick={handleAddWishlist}
                      style={{
                        margin: '8px 0px 12px 0px',
                        width: '180px',
                        height: '30px',
                        color: 'whitesmoke',
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                      }}>
                      Add Wishlist
                    </Button>
                  )
                  (
                    <Button
                      color='danger'
                      onClick={handleRemoveWishlist}
                      style={{
                        margin: '8px 0px 12px 0px',
                        width: '180px',
                        height: '30px',
                        color: 'whitesmoke',
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                      }}>
                      Remove Wishlist
                    </Button>
                  )} */}
                </div>
              )}
          </Card.Footer>
        </Card>
      }
      {
        path === '/history' &&

        <Card style={{ flexDirection: 'row', margin: 10, width: '600px', height: 145 }}>
          <Card.Img style={{ width: '125px', objectFit: 'cover' }} src={'https://cdn.discordapp.com/attachments/801794812671426574/804466570256056350/Banner1.jpg'} />
          <Card.Body style={{ width: 500 }}>
            <h6><strong>{props.data.title}</strong></h6>
            <Card.Text>
              <p>{props.data.location?.length >= 50 ? `${props.data.location.slice(0, 50)}...` : props.data.location}</p>
            </Card.Text>
            <Row>
              <Col sm={6}>
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
                    onClick={() => path === '/' ? goEventDetail(props.data.id) : goTicketDetail(props.data.id)}
                    color='danger'
                    style={{
                      margin: '28px 0px 0px 0px',
                      width: '180px',
                      height: '30px',
                      color: 'whitesmoke',
                      border: 'none',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                    }}>
                    Detail
                  </Button>
                  {/* { (path === '/') &&
                  (
                    <Button
                      color='danger'
                      onClick={handleAddWishlist}
                      style={{
                        margin: '8px 0px 12px 0px',
                        width: '180px',
                        height: '30px',
                        color: 'whitesmoke',
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                      }}>
                      Add Wishlist
                    </Button>
                  )
                  (
                    <Button
                      color='danger'
                      onClick={handleRemoveWishlist}
                      style={{
                        margin: '8px 0px 12px 0px',
                        width: '180px',
                        height: '30px',
                        color: 'whitesmoke',
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                      }}>
                      Remove Wishlist
                    </Button>
                  )} */}
                </div>
              )}
          </Card.Footer>
        </Card>
      }
    </Col>
  )
}