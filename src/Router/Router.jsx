import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Artigos from "../Pages/Artigos/Artigos";
import Psicoterapia from "../Pages/Psicoterapia/Psicoterapia";
import AvaliaçãoNeuro from "../Pages/AvaliaçãoNeuro/AvaliaçãoNeuro";
import Cursos from "../Pages/Cursos/Cursos";
import Palestras from "../Pages/Palestra/Palestra";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Artigos" element={<Artigos />} />
      <Route path="/Psicoterapia" element={<Psicoterapia />} />
      <Route path="/AvaliaçãoNeuro" element={<AvaliaçãoNeuro/>}/>
      <Route path="/Cursos" element={<Cursos/>}/>
      <Route path="/Palestras" element={<Palestras/>}/>
    </Routes>
  );
}

export default AppRoutes;
