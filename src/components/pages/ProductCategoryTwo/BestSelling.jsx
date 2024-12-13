const BestSelling = ({ selectedCollection }) => {
  return (
    <div
      className="h-5/6 border-2 border-black w-full"
      hidden={selectedCollection === "New Arrivals"}
    >
      Best Sellers
    </div>
  );
};

export default BestSelling;
