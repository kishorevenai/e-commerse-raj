import PrimaryButton from "../Buttons/PrimaryButton";

const CardOne = ({ product }) => {
  return (
    <div className="w-4/12 overflow-hidden group relative aspect-3/4">
      <img className="w-full duration-500 group-hover:scale-110" src={product.img}></img>

      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="h1_primary text-white">{product.category}</p>
        <PrimaryButton
          className={"duration-150 border-white bg-white hover:bg-black hover:text-white"}
          content="Shop Now"
        ></PrimaryButton>
      </div>
    </div>
  );
};

export default CardOne;
