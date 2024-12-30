import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Outlet/Layout";
import Home from "./components/pages/Home/Home";
import Product from "./components/pages/Product/Product";
import AboutUs from "./components/pages/About Us/AboutUs";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/About Us" element={<AboutUs />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
