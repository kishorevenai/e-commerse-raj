import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Outlet/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
