import BannerPic from "../../../assets/productOne.webp";
import PrimaryButton from "../../component/Buttons/PrimaryButton";
const Banner = () => {
  return (
    <div className="w-full">
      <div className="make_between w-7/12 h-[80px] mx-auto">
        <div className="make_row_between">
          <p className="p_2">Shop now, play later!</p>
          <p className="p_3 font-normal">With Your Flexway account</p>
        </div>
        <div className="make_row_between">
          <p className="p_2">Next Day Delivery</p>
          <p className="p_3 font-normal">Order by 11:00pm</p>
        </div>
        <div className="make_row_between">
          <p className="p_2">Click & Collect</p>
          <p className="p_3 font-normal">From 7000+ Evri Parcel Shop</p>
        </div>
      </div>

      {/* ------------------------------- */}

      <div className="w-full relative">
        <PrimaryButton
          className="absolute bottom-[10%] left-[15%] duration-150 hover:bg-sclr hover:text-white hover:border-sclr"
          onClick={() => console.log("HAIII")}
          content={"Shop Now"}
        ></PrimaryButton>
        <img className="border-2" src={BannerPic}></img>
      </div>
    </div>
  );
};

export default Banner;
