import { useQuery } from "@apollo/client";
import { Row, Col } from 'react-bootstrap';
import {GET_PRODUCTS }  from "../queries/productQueries";
import StoreItem from "../components/StoreItem";

export default function Store(){
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Loading</h1>;
  if (error) return <p>Somenting went wrong</p>;
  
    return (
      <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3"> 

          {data.products.map((item: any) =>(
             <Col key={item.id}>
               <StoreItem {...item} />
              </Col>
          ))}
       
      </Row>
      </>
    )
}
