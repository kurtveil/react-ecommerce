import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
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
