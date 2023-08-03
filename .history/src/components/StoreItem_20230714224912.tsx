import { Card } from "react-bootstrap"

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
        </Card> 
    }
