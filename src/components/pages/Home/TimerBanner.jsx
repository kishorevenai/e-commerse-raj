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
    <div className="w-full shadow-inner make_center h-[150px] my-20 bg-[#f8e8d7] rounded-xl">
      <div className="w-7/12 mx-auto make_between lg:w-7/12 md:w-full sm:w-full">
        <div className="h-fit make_row_around ml-5">
          <p className="h1_primary">FLAT 100% OFF</p>
          <p className="p_0">ON ORDER ABOVE RS.999</p>
        </div>
        <div className="h-full make_row_around mr-5">
          <p className="p_0 font-normal">SALE ENDS IN :</p>
          <p className="p_0 font-bold">
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimerBanner;
