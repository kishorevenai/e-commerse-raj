import { Outlet } from "react-router-dom";
import PrimaryHeader from "../Header/PrimaryHeader";
import Footer from "../pages/Footer/Footer";
import MoveUp from "../Buttons/MoveUp";

const Layout = () => {
  return (
    <div className="h-screen relative w-full">
      <PrimaryHeader />
      <Outlet />
      <Footer />
      <MoveUp />
    </div>
  );
};

export default Layout;
