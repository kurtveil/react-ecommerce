import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
function App() {

  return (
    <>
      <Container>
        <Routes path="/" element={<Home/>}></Routes>
        <Routes path="/store" element={<Store/>}></Routes>
        <Routes path="/about" element={<About/>}></Routes>
      </Container>
    </>
  )
}

export default App
