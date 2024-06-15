import Cabecera from "../src/components/CabeceraLink/CabeceraLink.js";
import Container from "../src/components/Container/index.js";
import Pie from "../src/components/Pie/index.js";
import Favoritos from "../src/pages/Favoritos/index.js";
import Inicio from "../src/pages/Inicio/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </Container>
      <Pie />
    </BrowserRouter>
  );
}

export default AppRoutes;
