import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../pages/Banner/Banner";
import ProductCategory from "../pages/ProductCategory/ProductCategory";
import ProductCategoryTwo from "../pages/ProductCategoryTwo/ProductCategoryTwo";

const Layout = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <Banner />
      <ProductCategory />
      <ProductCategoryTwo />
      <Outlet />
    </div>
  );
};

export default Layout;
