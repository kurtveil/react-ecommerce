import { Offcanvas,Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';

type ShoppingCartProps = {
    isOpen: boolean
 }
export default function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart,cartItems} = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
              {cartItems.map(item=>(
                  <CartItem key={item.id} {...item}/>
              ))}
              <div className='ms-auto fw-bold fs-5'>
                Total
              </div>
          </Stack>
        </Offcanvas.Body>
    </Offcanvas>
      )
}
