import BestSelling from "./BestSelling";
import { useState } from "react";
import NewArrivals from "./NewArrivals";

const ProductCategoryTwo = () => {
  const [selectedCollection, setSelectedCollection] = useState("Best Sellers");

  const handle_change_collection = (e) => {
    const { value } = e.target;
    setSelectedCollection(value);
  };

  const collectionOption = (
    <select
      className="bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      onChange={handle_change_collection}
    >
      <option value={"Best Sellers"}>Best Sellers</option>
      <option value={"New Arrivals"}>New Arrivals</option>
    </select>
  );
  return (
    <div className="h-full border-black make_row_evenly">
      <p className="h1_tertiary">You are in {collectionOption}</p>
      <BestSelling selectedCollection={selectedCollection} />
      <NewArrivals selectedCollection={selectedCollection} />
    </div>
  );
};

export default ProductCategoryTwo;
