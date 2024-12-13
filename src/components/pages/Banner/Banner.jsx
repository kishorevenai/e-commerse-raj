import { BannerContent } from "../../../utils/Banner/Banner";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useEffect, useState } from "react";
const Banner = () => {
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedBannerIndex((prev) => {
        if (prev < 2) return prev + 1;
        else return 0;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const Banners = BannerContent.map((products, index) => {
    return (
      <div
        className="w-5/12"
        hidden={index != selectedBannerIndex}
        key={products.productName}
      >
        <p>New Arrivals</p>
        <p className="h1_primary">{products.productName}</p>
        <PrimaryButton>Shop Now</PrimaryButton>
      </div>
    );
  });

  const handle_change_banner = (e) => {
    const { value } = e.target;
    setSelectedBannerIndex(value);
  };

  return (
    <div className="h-full relative make_between max-h-[850px] w-full">
      <div
        className={`w-full ${
          selectedBannerIndex == 0 ? "opacity-100" : "opacity-0"
        } h-full absolute duration-150 top-0 left-0 bg-blue-50 -z-10`}
      >
        <img src={BannerContent[0].img}></img>
      </div>
      <div
        className={`w-full ${
          selectedBannerIndex == 1 ? "opacity-100" : "opacity-0"
        } h-full absolute duration-150 top-0 left-0 bg-blue-50 -z-10`}
      >
        <img src={BannerContent[1].img}></img>
      </div>
      <div
        className={`w-full ${
          selectedBannerIndex == 2 ? "opacity-100" : "opacity-0"
        } h-full absolute duration-150 top-0 left-0 bg-blue-50 -z-10`}
      >
        <img src={BannerContent[2].img}></img>
      </div>
      <div className="w-9/12 mx-auto make_between">
        {Banners}

        <div className="flex flex-col h-[80px] border justify-between items-center">
          <button
            onClick={handle_change_banner}
            value={0}
            className={`${
              selectedBannerIndex == 0
                ? " h-[15px] w-[15px]"
                : "bg-black h-[10px] w-[10px]"
            } border m-1 border-black rounded-full`}
          ></button>
          <button
            onClick={handle_change_banner}
            value={1}
            className={`${
              selectedBannerIndex == 1
                ? " h-[15px] w-[15px]"
                : "bg-black h-[10px] w-[10px] hover:scale-110 duration-150"
            } border m-1 border-black rounded-full`}
          ></button>
          <button
            onClick={handle_change_banner}
            value={2}
            className={`${
              selectedBannerIndex == 2
                ? " h-[15px] w-[15px]"
                : "bg-black h-[10px] w-[10px] hover:scale-110 duration-150"
            } border m-1 border-black rounded-full`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
