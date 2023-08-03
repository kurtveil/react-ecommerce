import { useQuery } from "@apollo/client";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { GET_PRODUCTS } from "../queries/productQueries";
import { Stack } from "react-bootstrap";
type CartItemProps = {
  id: number,
  quantity: number
}
export function CartItem({id, quantity}: CartItemProps) {
const { removeFromCart } = useShoppingCart();
const { loading, error, data } = useQuery(GET_PRODUCTS);
console.warn(data);
const item = data.products.find((i: any) => i.id == id);
  return (
   <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.image}  style={{width:"125px", height: "75px", objectFit:"cover"}} />
   </Stack>
  )
}
