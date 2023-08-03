import { Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency";
type StoreItemPros = {
    id: number,
    name: string,
    price: number,
    image: string
}

export function StoreItem({id, name, price, image}:
    StoreItemPros) {
        const quantity = 0;
        return <Card>
          <Card.Img variant="top" src={image} height="200px"
          style={{objectFit: "cover"}}></Card.Img>  
          <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name} </span>
                    <span className="ms-2 text-muted">{formatCurrency(price)} </span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <button></button>
                    )}
                </div>
          </Card.Body>
        </Card> 
    }
