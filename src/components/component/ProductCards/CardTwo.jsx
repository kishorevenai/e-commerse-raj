import LongArrowIcon from "../../../assets/longArrow.svg";
import sunGlass from "../../../assets/sunglass.webp";
const CardOne = ({ className: CardClassName }) => {
  return (
    <div
      className={`${CardClassName} h-[500px] group make_row_between relative duration-500 ml-10 aspect-3/4 border bg-primary_color hover:scale-110`}
    >
      <div className="overflow-hidden group-hover:scale-90 duration-500  border-black h-5/6">
        <img alt="glasses" src={sunGlass}></img>
      </div>
      <div className="flex w-11/12 mx-auto make_between">
        <div className="make_row_between_start">
          <p className="p_primary">Product Name</p>
          <p className="p_secondary ">10 Items</p>
        </div>
        <button className="make_center duration-150 bg-white rounded-full h-[40px] aspect-square hover:scale-125">
          <img alt="arrow" src={LongArrowIcon}></img>
        </button>
      </div>
    </div>
  );
};

export default CardOne;
