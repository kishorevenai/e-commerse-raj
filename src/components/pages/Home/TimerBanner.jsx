import { useState, useEffect } from "react";

const TimerBanner = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full shadow-inner make_center h-[150px] my-20 bg-gradient-to-tr from-[#4635fc] via-[#d45fd4] to-[#ff8000] rounded-xl">
      <div className="mx-auto make_between lg:w-10/12 md:w-full sm:w-full">
        <div className="h-fit make_row_around ml-5">
          <p className="h1_primary text-white">FLAT 100% OFF</p>
          <p className="p_0 text-white">ON ORDER ABOVE RS.999</p>
        </div>
        <div className="h-full make_between mr-5 w-5/12">
          <p className="p_0 font-normal text-white">SALE ENDS IN :</p>
          <div className="make_between w-8/12 mx-auto ">
            <div className="h-[100px] relative border-2 border-white overflow-hidden rounded-xl aspect-square make_center">
              <div className="absolute bottom-0 h-[30px] rounded-bl-[5px] rounded-br-[5px] w-full bg-white make_center">
                <p className="text-black">DAYS</p>
              </div>
              <p className="p_0 font-bold text-white">
                {time.getHours().toString().padStart(2, "0")}
              </p>
            </div>

            <div className="h-[100px] relative border-2 border-white overflow-hidden rounded-xl aspect-square make_center">
              <div className="absolute bottom-0 h-[30px] rounded-bl-[5px] rounded-br-[5px] w-full bg-white make_center">
                <p className="text-black">HOURS</p>
              </div>
              <p className="p_0 font-bold text-white">
                {time.getMinutes().toString().padStart(2, "0")}
              </p>
            </div>

            <div className="h-[100px] relative border-2 border-white overflow-hidden rounded-xl aspect-square make_center">
              <div className="absolute bottom-0 h-[30px] rounded-bl-[5px] rounded-br-[5px] w-full bg-white make_center">
                <p className="text-black">MINUTES</p>
              </div>
              <p className="p_0 font-bold text-white">
                {time.getSeconds().toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerBanner;
