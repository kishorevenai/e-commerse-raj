const TimerBanner = () => {
  return (
    <div className="w-full make_center h-[150px] my-20 bg-[#f8e8d7] rounded-xl">
      <div className="w-7/12 mx-auto make_between lg:w-7/12 md:w-full sm:w-full">
        <div className="h-fit make_row_around ml-5">
          <p className="h1_primary">FLAT 100% OFF</p>
          <p className="p_0">ON ORDER ABOVE RS.999</p>
        </div>
        <div className="h-full make_row_around mr-5">
          <p className="p_0 font-normal">USE CODE :</p>
          <p className="p_0 font-bold">BEYOUND100</p>
        </div>
      </div>
    </div>
  );
};

export default TimerBanner;
