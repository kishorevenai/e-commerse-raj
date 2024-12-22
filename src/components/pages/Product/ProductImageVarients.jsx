const ProductImageVarients = ({ totalTypes }) => {
  const Product_Types = totalTypes.map((images) => {
    return (
      <div className="w-[50px] overflow-hidden" key={images.id}>
        <img className="w-full" src={images}></img>
      </div>
    );
  });
  return Product_Types;
};

export default ProductImageVarients;
