import { Stack } from "react-bootstrap";
// import { useShoppingCart } from "../context/ShoppingCartContext"
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/productQueries";
// type CartItemProps = {
//   id: number
//   quantity: number
// }
export function CartItem() {
// const { removeFromCart } = useShoppingCart();
const { data } = useQuery(GET_PRODUCTS);
// const item = data.products.find((i: any) => i.id === id);
// if (item == null) return null;
console.warn(data);

return (
    <Stack direction="horizontal" gap={2}>
      {/* <img src={item.image} alt="" /> */}
    </Stack>
  )
}
