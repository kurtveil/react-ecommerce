import { useQuery } from "@apollo/client";
import { Row } from 'react-bootstrap';
import { GET_PRODUCTS } from "../queries/productQueries";

export default function Store(){
  const { loading, error, data } = useQuery(GET_PRODUCTS);
    return (
      <>
      <h1>Store</h1>
      <Row></Row>
      </>
    )
}
