import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function ShoppingCart() {
    const {closeCart} = useShoppingCart();
  return (
    <Offcanvas open={true} placement='end' onHide={closeCart}>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
      )
}
