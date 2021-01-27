import React, { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlist, removeWishlist } from '../store/action/wishlistAction'

export default function CardEvent(props) {
  const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    for (let i = 0; i < wishlists.length; i++) {
      if (wishlists[i].EventId === props.data.event.id) {
        setShowButton(false)
      }
    }
  }, [])

  function goDetail(id) {
    history.push(`event/${id}`)
  }

  function handleAddWishlist() {
    dispatch(addWishlist(props.data.event.id))
  }

  function handleRemoveWishlist() {
    dispatch(removeWishlist(props.data.event.id))
  }

  return (
    <Container>
    {/* {JSON.stringify(props.data)} */}
      <Card style={{ flexDirection: 'row' }}>
        <Card.Img style={{ width: '250px', height: "190px" }} src={props.data.event_preview} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            <p>{props.data.location}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ width: '200px' }}>
          <Button
            onClick={() => goDetail(props.data.id)}
            style={{
              margin: '20px 0px 0px 34px',
              width: '100px',
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
              width: '100px',
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
              width: '100px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Remove from Wishlist
          </Button>
        )}
        </Card.Footer>
      </Card>
    </Container>
  )
}