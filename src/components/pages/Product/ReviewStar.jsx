import favouriteIcon from "../../../assets/starIcon.svg";
import Icons from "../../component/Icons/Icons";

const ReviewStar = ({ review_fill }) => {
  return (
    <div className="make_between w-[150px]">
      <Icons src={favouriteIcon} className={"img_icon_size"} />
      <Icons src={favouriteIcon} className={"img_icon_size"} />
      <Icons src={favouriteIcon} className={"img_icon_size"} />
      <Icons src={favouriteIcon} className={"img_icon_size"} />
      <Icons src={favouriteIcon} className={"img_icon_size"} />
    </div>
  );
};

export default ReviewStar;
