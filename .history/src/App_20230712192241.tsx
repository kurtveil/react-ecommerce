import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
function App() {

  return (
    <>
      <Container>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
      </Container>
    </>
  )
}

export default App
