import { useQuery } from "@apollo/client";
import { Row, Col } from 'react-bootstrap';
import { GET_PRODUCTS } from "../queries/productQueries";

export default function Store(){
  const { loading, error, data } = useQuery(GET_PRODUCTS);
    return (
      <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className=""> 
        <Col>{JSON.stringify(item)}</Col>
      </Row>
      </>
    )
}
