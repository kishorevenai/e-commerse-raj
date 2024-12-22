import favouriteIcon from "../../../assets/starIcon.svg";
import Icons from "../../component/Icons/Icons";
import ReviewStar from "./ReviewStar";
const ProductReview = () => {
  return (
    <div className="border-2 w-8/12 h-fit mt-20 mb-20">
      <div className="mb-2">
        <p className="h1_secondary font-normal w-11/12 mx-auto border border-black">
          Customer Reviews
        </p>
        <div className="w-11/12 border mt-5 mx-auto make_between">
          <div className="border flex justify-start items-start">
            <div className="w-[200px] border-black">
              <div className="make_between w-[150px]">
                <Icons src={favouriteIcon} className={"img_icon_size"} />
                <Icons src={favouriteIcon} className={"img_icon_size"} />
                <Icons src={favouriteIcon} className={"img_icon_size"} />
                <Icons src={favouriteIcon} className={"img_icon_size"} />
                <Icons src={favouriteIcon} className={"img_icon_size"} />
              </div>
              <p className="p_2 font-normal">Based on 2 Reviews</p>
            </div>
            <div className="border-l border-black pl-10">
              <ReviewStar review_fill={5} />
              <ReviewStar review_fill={4} />
              <ReviewStar review_fill={3} />
              <ReviewStar review_fill={2} />
              <ReviewStar review_fill={1} />
            </div>
          </div>
          <button className="p-2 border p_1 border-black">Write A Review</button>
        </div>
      </div>
      <EachReview />
      <EachReview />
    </div>
  );
};

export const EachReview = () => {
  return (
    <div className="border-t pt-2 w-11/12 mx-auto">
      <div className="make_start gap-5">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-400 overflow-hidden">
          <img className="w-full"></img>
        </div>
        <div>
          <div className="make_between gap-3">
            <ReviewStar />
            <p className="p_2 font-normal">11/25/2025</p>
          </div>
          <div className="make_start gap-1">
            <p className="p_4 font-normal bg-black text-white px-[2px]">
              Verified
            </p>
            <p className="p_2 font-normal">Tester Name</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="p_1 font-normal">Review Title</p>
        <p className="p_3 font-normal">
          "I recently purchased the XYZ brand T-shirt, and I'm impressed with
          the overall quality. The fabric is soft and breathable, making it
          comfortable to wear all day long. The fit is true to size, providing a
          relaxed yet flattering silhouette. The design is simple yet stylish,
          and the color options are versatile. Overall, I believe it offers
          great value for the price and would highly recommend it to others
          looking for a high-quality everyday T-shirt."
        </p>
      </div>
    </div>
  );
};

export default ProductReview;
