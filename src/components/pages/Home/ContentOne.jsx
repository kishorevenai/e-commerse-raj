import CardOne from "../../component/ProductCards/CardOne";
import ProductOne from "../../../assets/shirtOne.jpg";
import ProductTwo from "../../../assets/shirtTwo.jpg";
import ProductThree from "../../../assets/shirtThree.jpg";
import ProductFour from "../../../assets/shirtFour.jpg";

const ContentOne = () => {
  const products = [
    {
      img: ProductOne,
      category: "HOODIE",
    },
    {
      img: ProductThree,
      category: "COAT",
    },
    {
      img: ProductFour,
      category: "TOPS",
    },
  ].map((products) => {
    return <CardOne product={products} />;
  });

  return (
    <div className="w-full mt-5 make_between border-black">{products}</div>
  );
};

export default ContentOne;
