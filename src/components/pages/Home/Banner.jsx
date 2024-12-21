import { useEffect, useState } from "react";
import BannerPic from "../../../assets/productOne.webp";
import BannerPicOne from "../../../assets/productTwo.webp";
import BannerPicTwo from "../../../assets/productThree.webp";

const Banner = () => {
  const [switchBanner, setSwitchBanner] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setSwitchBanner((prev) => (prev < 2 ? prev + 1 : 0));
    }, 3000);

    return () => {
      clearInterval(bannerInterval);
    };
  }, []);

  let banner;

  if (switchBanner === 0) {
    banner = BannerPic;
  } else if (switchBanner === 1) {
    banner = BannerPicOne;
  } else if (switchBanner === 2) {
    banner = BannerPicTwo;
  }
  return (
    <div className="w-full h-fit relative border-2">
      <div className="make_between w-[100px] absolute top-[90%] left-1/2 -translate-x-1/2">
        <div
          className={`border duration-150 ${
            switchBanner === 0
              ? "bg-black w-[15px] h-[15px]"
              : "bg-white w-[10px] h-[10px]"
          } border-black rounded-full`}
        ></div>
        <div
          className={`border duration-150 ${
            switchBanner === 1
              ? "bg-black w-[15px] h-[15px]"
              : "bg-white w-[10px] h-[10px]"
          } border-black rounded-full`}
        ></div>
        <div
          className={`border duration-150 ${
            switchBanner === 2
              ? "bg-black w-[15px] h-[15px]"
              : "bg-white w-[10px] h-[10px]"
          } border-black rounded-full`}
        ></div>
      </div>
      <div className="w-full overflow-hidden">
        <img className={`border-2 duration-500`} src={banner}></img>
      </div>
    </div>
  );
};

export default Banner;
