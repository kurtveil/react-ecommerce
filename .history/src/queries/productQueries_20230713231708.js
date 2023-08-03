import { gql } from "@apollo/client";
const GET_PRODUCTS = gql`
    query getProducts {
        products {
            id
            name
            price
            description
            amount
            characteristics
            image
        }
    }
`;

export {GET_PRODUCTS};