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
            <h1>{image}</h1>
            <img src={logo} alt="" />
          <Card.Img variant="top" src={image} height="200px"
          style={{objectFit: "cover"}}></Card.Img>  
        </Card> 
    }
