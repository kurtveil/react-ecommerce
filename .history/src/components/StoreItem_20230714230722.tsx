import { Card } from "react-bootstrap"
import logo from '../assets/detodito.png';
type StoreItemPros = {
    id: number,
    name: string,
    price: number,
    image: string
}

export function StoreItem({id, name, price, image}:
    StoreItemPros) {
        return <Card>
          <Card.Img variant="top" src={image} height="200px"
          style={{objectFit: "cover"}}></Card.Img>  
          <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline-mb-4">

                </Card.Title>
          </Card.Body>
        </Card> 
    }
