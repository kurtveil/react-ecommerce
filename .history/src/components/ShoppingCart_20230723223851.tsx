import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';

type ShoppingCartProps = {
    isOpen: boolean
 }
export default function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart} = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
      )
}
