import { useShoppingCart } from "../context/ShoppingCartContext"
type CartItemProps = {
  id: number,
  quantity: number
}
export function CartItem() {
const { removeFromCart } = useShoppingCart();
  return (
    <div>CartItem</div>
  )
}
