import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function ShoppingCart() {
    const {cartClose} = useShoppingCart();
  return (
    <Offcanvas open={true} placement='end' onHide={cartClose}>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
      )
}
