const CircleCard = ({ src, name }) => {
  return (
    <div className="make_row_between">
      <p className="p_3 mt-5">{name}</p>
      <div className="w-[200px] border-2 border-black duration-500 hover:shadow-md aspect-square overflow-hidden rounded-full">
        <img className="duration-500 hover:scale-110" src={src}></img>
      </div>
    </div>
  );
};

export default CircleCard;
