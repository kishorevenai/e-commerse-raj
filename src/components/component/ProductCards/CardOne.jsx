import starIcon from "../../../assets/starIcon.svg";
import PrimaryButton from "../Buttons/PrimaryButton";
import Icons from "../Icons/Icons";
import favouriteIcon from "../../../assets/starIcon.svg";
import { Link } from "react-router-dom";
const CardOne = ({
  product,
  className,
  isFavourite = false,
  isSelectOptionButton = false,
}) => {
  return (
    <Link to={"/products"}>
      <div className={`${className} group relative aspect-3/4`}>
        {isFavourite && (
          <button>
            <Icons
              src={favouriteIcon}
              className={"img_icon_size absolute z-10 top-[5%] right-[5%]"}
            />
          </button>
        )}
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
          <div className="w-7/12 mx-auto h-[60px] make_between">
            <div className="w-2/12 aspect-square bg-black border-grey border rounded-full"></div>
            <div className="w-2/12 aspect-square bg-[#f86b4c] border-grey border rounded-full"></div>
            <div className="w-2/12 aspect-square bg-[#f8c44c] border-grey border rounded-full"></div>
            <div className="w-2/12 aspect-square bg-white border-grey border rounded-full"></div>
            <div className="w-2/12 aspect-square bg-black border-grey border rounded-full"></div>
          </div>

          {isSelectOptionButton && (
            <PrimaryButton
              content={"SELECT OPTIONS"}
              className={
                "duration-150 w-[90%] border border-black bg-white hover:bg-sclr hover:border-white"
              }
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardOne;
