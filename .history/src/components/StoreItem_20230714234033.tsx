import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency";
type StoreItemPros = {
    id: number,
    name: string,
    price: number,
    image: string
}

export function StoreItem({id, name, price, image}:
    StoreItemPros) {
        const quantity = 1;
        return <Card className="h-100">
          <Card.Img variant="top" src={image} height="200px"
          style={{objectFit: "cover"}}></Card.Img>  
          <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name} </span>
                    <span className="ms-2 text-muted">{formatCurrency(price)} </span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100">+Add to cart</Button>
                    ): 
                    <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>  
                        <div className="d-flex aligb-items-center justify-content-center"  style={{gap:".5rem"}}>
                            <Button>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span>
                            </div>
                            <Button>+</Button>
                        </div>
                        <Button variant="danger" size="sm">Remove</Button>
                    </div> }
                    
                </div>
          </Card.Body>
        </Card> 
    }
