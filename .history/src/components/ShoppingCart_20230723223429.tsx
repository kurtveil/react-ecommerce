import { Offcanvas } from 'react-bootstrap'

export default function ShoppingCart() {
  return (
    <Offcanvas open={true} placement='end'>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
      )
}
