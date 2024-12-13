const NewArrivals = ({ selectedCollection }) => {
  return (
    <div
      className="border-2 border-black w-full h-5/6"
      hidden={selectedCollection === "Best Sellers"}
    >
      NewArrivals
    </div>
  );
};

export default NewArrivals;
