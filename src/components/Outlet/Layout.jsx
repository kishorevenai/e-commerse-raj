import { Outlet } from "react-router-dom";
import PrimaryHeader from "../Header/PrimaryHeader";
import Footer from "../pages/Footer/Footer";

const Layout = () => {
  return (
    <div className="h-screen w-full">
      <PrimaryHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
