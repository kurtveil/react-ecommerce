import { useShoppingCart } from "../context/ShoppingCartContext"
// import storeItems from '../data/items.json'
type CartItemProps = {
  id: number,
  quantity: number
}
export function CartItem() {
const { removeFromCart } = useShoppingCart();
// const item = storeItems 
  return (
    <div>CartItem</div>
  )
}
