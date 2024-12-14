const CircleCard = ({ src }) => {
  return (
    <div className="make_row_between">
      <div className="w-[150px] duration-500 hover:shadow-md aspect-square overflow-hidden rounded-full">
        <img className="duration-500 hover:scale-110" src={src}></img>
      </div>
      <p className="p_3 mt-5">Hoodie</p>
    </div>
  );
};

export default CircleCard;
