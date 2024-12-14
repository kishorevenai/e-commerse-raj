import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Outlet/Layout";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
