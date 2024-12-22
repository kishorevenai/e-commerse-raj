import shirtone from "../../../assets/shirtone.avif";
import shirttwo from "../../../assets/shirttwo.avif";
import shirtthree from "../../../assets/shirtthree.avif";
import shirtfour from "../../../assets/shirtfour.webp";
import shirtfive from "../../../assets/shirtfive.avif";
import shirtsix from "../../../assets/shirtsix.avif";
import ProductImageVarients from "./ProductImageVarients";
import primaryShirt from "../../../assets/personOne.png";
import Icons from "../../component/Icons/Icons";
import favouriteIcon from "../../../assets/starIcon.svg";
import scaleIcon from "../../../assets/scaleIcon.png";
import longArrowIcon from "../../../assets/longArrow.svg";
import PrimaryButton from "../../component/Buttons/PrimaryButton";
import ProductReview from "./ProductReview";

const Product = () => {
  const dummyData = {
    productName: "Made To worship - Wannabe Premium",
    price: "499",
    currency: "Rs",
    review: "2",
    size: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].reverse(),
    color: ["black", "red", "grey"],
    imageTypes: [
      shirtone,
      shirttwo,
      shirtthree,
      shirtfour,
      shirtfive,
      shirtsix,
    ],
  };

  const Size_button = dummyData.size.map((sizes) => {
    return (
      <button
        className="h-[50px] w-[50px] border  rounded-[5px]"
        key={sizes}
        type="button"
      >
        <p className="p_1">{sizes}</p>
      </button>
    );
  });
  return (
    <div className="border-2 border-black w-full h-fit make_row_between">
      <div className="w-8/12 make_between mt-20 mx-auto h-[600px]">
        {/* ----------image varients---------------- */}

        <div className="w-1/12 h-full make_row_between">
          <ProductImageVarients totalTypes={dummyData.imageTypes} />
        </div>

        {/* ----------image---------------- */}

        <div className="w-4/12 aspect-3/4 make_center bg-gray-100">
          <img className="w-full bg-cover" src={primaryShirt}></img>
        </div>

        {/* ----------content---------------- */}
        <div className="w-6/12 make_row_between_start h-full">
          <div className="make_between w-full">
            <p className="h1_tertiary font-normal">{dummyData.productName}</p>
            <button className="w-[40px] aspect-square make_center border-2 border rounded-full">
              <Icons src={favouriteIcon} className={"w-[20px]"} />
            </button>
          </div>

          {/* ---------price--------------- */}

          <div className="make_row_between_start">
            <p className="p_0">Rs. {dummyData.price}.00</p>
            <p className="p_3 font-normal">Tax included</p>
          </div>

          {/* ---------review--------------- */}

          <div className="w-5/12 make_between">
            <div className="make_between w-[150px]">
              <Icons src={favouriteIcon} className={"w-[20px]"} />
              <Icons src={favouriteIcon} className={"w-[20px]"} />
              <Icons src={favouriteIcon} className={"w-[20px]"} />
              <Icons src={favouriteIcon} className={"w-[20px]"} />
              <Icons src={favouriteIcon} className={"w-[20px]"} />
            </div>
            <p className="p_2 font-normal">{dummyData.review} reviews</p>
          </div>

          {/* ---------sizes--------------- */}

          <div className="w-full">
            <div className="make_between mb-5">
              <p className="p_2 font-normal">Choose the size 4XL</p>
              <button className="make_between w-[130px]">
                <Icons src={scaleIcon} className={"w-[20px] rotate-90"} />
                <p className="p_1 font-normal">Size Guide</p>
              </button>
            </div>
            <div className="make_between">{Size_button}</div>
          </div>

          {/* ---------------------Color-------------------------- */}

          <div>
            <p className="p_2 font-normal mb-5">Select a Color: Black</p>
            <div className="make_between w-[250px]">
              <div className="w-[40px] h-[40px] rounded-full bg-black"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-red-600"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-green-300"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-500"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-600"></div>
            </div>
          </div>

          {/* ---------------------Quantity and Button-------------------------- */}

          <div className="w-full">
            <p className="p_2 font-normal mb-5">Quantity</p>
            <div className="make_between">
              {/* ---------------------Quantity-------------------------- */}
              <div className="border borde-black make_even h-[50px] w-[180px] rounded-[5px]">
                <button>
                  <Icons
                    src={longArrowIcon}
                    className={"img_icon_size -rotate-180"}
                  />
                </button>
                <p>1</p>

                <button>
                  <Icons src={longArrowIcon} className={"img_icon_size"} />
                </button>
              </div>

              {/* ---------------------Button-------------------------- */}
              <PrimaryButton
                content={"ADD TO CART"}
                className={"border w-8/12 hover:bg-sclr duration-150"}
              />
            </div>
            <PrimaryButton
              content={"Buy It Now"}
              className={"w-full bg-sclr mt-3"}
            />
          </div>
        </div>
      </div>

      <ProductReview />
    </div>
  );
};

export default Product;
