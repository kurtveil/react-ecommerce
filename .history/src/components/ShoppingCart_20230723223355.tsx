import React from 'react'
import { Offcanvas } from 'react-bootstrap'

export default function ShoppingCart() {
  return (
    <Offcanvas open={true}>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
      )
    </Offcanvas>
}
