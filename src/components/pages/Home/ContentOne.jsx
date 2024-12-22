import CardOne from "../../component/ProductCards/CardOne";
import ProductOne from "../../../assets/shirtOne.jpg";
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
    return (
      <CardOne
        isSelectOptionButton={true}
        isFavourite={false}
        key={products.category}
        className={"w-[90%]"}
        product={products}
        isDiscount={false}
      />
    );
  });

  return (
    <div className="w-full mt-5">
      <p className="h1_secondary mb-5 text-center">HOT THIS WEEK</p>

      <div className="grid grid-cols-OneCardGrid gap-5 place-content-center place-items-center">
        {products}
      </div>
    </div>
  );
};

export default ContentOne;
