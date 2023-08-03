import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function ShoppingCart({isOpen}) {
    const {closeCart} = useShoppingCart();
  return (
    <Offcanvas open={isOpen} placement='end' onHide={closeCart}>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
      )
}
