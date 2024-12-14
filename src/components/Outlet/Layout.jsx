import { Outlet } from "react-router-dom";
import PrimaryHeader from "../Header/PrimaryHeader";

const Layout = () => {
  return (
    <div className="h-screen w-full">
      <PrimaryHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
