import { useQuery } from "@apollo/client";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { GET_PRODUCTS } from "../queries/productQueries";
type CartItemProps = {
  id: number,
  quantity: number
}
export function CartItem() {
const { removeFromCart } = useShoppingCart();
const { loading, error, data } = useQuery(GET_PRODUCTS);
  return (
    <div>CartItem</div>
  )
}
