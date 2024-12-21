import starIcon from "../../../assets/starIcon.svg";
import PrimaryButton from "../Buttons/PrimaryButton";
import Icons from "../Icons/Icons";
const CardOne = ({ product }) => {
  return (
    <div className="w-4/12 group aspect-3/4">
      <div className="w-full h-[90%] overflow-hidden">
        <img
          className="w-full duration-500 group-hover:scale-110"
          src={product.img}
        ></img>
      </div>
      <div className="make_row_evenly h-[200px]">
        <p className="p_3">{product.category}</p>
        <div className="make_center gap-3">
          <div className="make_between">
            <Icons src={starIcon} className="img_icon_size" />
            <Icons src={starIcon} className="img_icon_size" />
            <Icons src={starIcon} className="img_icon_size" />
            <Icons src={starIcon} className="img_icon_size" />
            <Icons src={starIcon} className="img_icon_size" />
          </div>
          <p className="p_2">{product.review} Reviews</p>
        </div>
        <p className="p_2">
          {product.currency}. {product.price}.00
        </p>
        <div className="w-5/12 mx-auto h-[60px] make_between">
          <div className="w-[35px] h-[35px] bg-black border-grey border rounded-full"></div>
          <div className="w-[35px] h-[35px] bg-[#f86b4c] border-grey border rounded-full"></div>
          <div className="w-[35px] h-[35px] bg-[#f8c44c] border-grey border rounded-full"></div>
          <div className="w-[35px] h-[35px] bg-white border-grey border rounded-full"></div>
          <div className="w-[35px] h-[35px] bg-black border-grey border rounded-full"></div>
        </div>
        <PrimaryButton
          content={"SELECT OPTIONS"}
          className={
            "duration-150 w-[90%] border border-black bg-white hover:bg-sclr hover:border-white"
          }
        />
      </div>
    </div>
  );
};

export default CardOne;
