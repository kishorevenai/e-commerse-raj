import CardOne from "../../component/ProductCards/CardOne";
import ProductOne from "../../../assets/shirtOne.jpg";
import ProductTwo from "../../../assets/shirtTwo.jpg";
import ProductThree from "../../../assets/shirtThree.jpg";
import ProductFour from "../../../assets/shirtFour.jpg";

const ContentOne = () => {
  const products = [
    {
      img: ProductOne,
      category: "HOODIE - Wannabe Premium Tee",
      review: 2,
      star: 5,
      price: 499,
      currency: "Rs",
      color_varient: ["violet", "blue", "black"],
    },
    {
      img: ProductThree,
      category: "COAT",
      review: 2,
      star: 5,
      price: 499,
      currency: "Rs",
      color_varient: ["red", "blue", "black"],
    },
    {
      img: ProductFour,
      category: "TOPS",
      review: 2,
      star: 5,
      price: 499,
      currency: "Rs",
      color_varient: ["red", "blue", "black"],
    },
  ].map((products) => {
    return <CardOne key={products.category} product={products} />;
  });

  return (
    <div className="w-full mt-5">
      <p className="h1_secondary mb-5 text-center">HOT THIS WEEK</p>
      <div className="w-full make_between">{products}</div>
    </div>
  );
};

export default ContentOne;
