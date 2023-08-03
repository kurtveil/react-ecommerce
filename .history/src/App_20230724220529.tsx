import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Store from './pages/Store';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
       
        products: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // 'https://manage-projects.onrender.com/graphql',
  cache
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
    <ShoppingCartProvider>

    <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
        </ApolloProvider >
    </>
  )
}

export default App
