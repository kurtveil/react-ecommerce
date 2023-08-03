import { gql } from "@apollo/client";
const GET_PRODUCTS = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`;

export {GET_PRODUCTS};