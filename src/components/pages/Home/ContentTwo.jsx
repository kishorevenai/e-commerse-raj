import { Products } from "../../../utils/Sample Products/Products";
import CardOne from "../../component/ProductCards/CardOne";

const ContentTwo = () => {
  const cards = Products.map((each_product) => {
    return (
      <CardOne
        isFavourite={true}
        key={each_product.img}
        className={"w-[90%]"}
        product={each_product}
      />
    );
  });
  return (
    <div className="w-full mt-5">
      <p className="h1_secondary text-center">Our Unisex Collections</p>
      <div className="grid grid-cols-CardGrid place-content-center gap-3 place-items-center">
        {cards}
      </div>
    </div>
  );
};

export default ContentTwo;
