import { useShoppingCart } from "../context/ShoppingCartContext"
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
