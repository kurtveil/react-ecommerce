import { Offcanvas,Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import { GET_PRODUCTS } from '../queries/productQueries';
import { useQuery } from '@apollo/client';

type ShoppingCartProps = {
    isOpen: boolean
 }
export default function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart,cartItems} = useShoppingCart();
    const {  data } = useQuery(GET_PRODUCTS);
    console.warn(data);
    
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
              {data.products !== undefined}?(
                <div className='ms-auto fw-bold fs-5'>
                Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                 const item = data.products.find((i: any) => i.id == cartItem.id)
                 return total + (item?.price||0) * cartItem.quantity
                }, 0)
                )}
              </div>
              ) : (null)
          </Stack>
        </Offcanvas.Body>
    </Offcanvas>
      )
}
