import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
