import { useState } from "react";
import Logo from "../../assets/logo.png";
import searchIcon from "../../assets/searchIcon.svg";
import profileIcon from "../../assets/profileIcon.svg";
import favouriteIcon from "../../assets/heartIcon.svg";
import cartIcon from "../../assets/shopIcon.svg";
import { clothTypes } from "../../utils/Header/HeaderOptions";

const PrimaryHeader = () => {
  const [search, setSearch] = useState("");

  const handle_search = (e) => {
    setSearch(e.target.value);
  };

  const headerOptions = clothTypes.map((options) => {
    return (
      <button className="p_2 font-normal" key={options}>
        {options.name}
      </button>
    );
  });
  return (
    <div className="w-full border-b-sclr border-2">
      <div className="w-7/12 make_row_around  h-[150px] mx-auto">
        <div className="w-full mb-2 make_between">
          {/* ------------------logo--------------- */}
          <div className="img_logo_size">
            <img alt="Logo" src={Logo}></img>
          </div>

          {/* ---------------Search----------------------- */}
          <div className="relative w-4/12 overflow-hidden">
            <input
              placeholder="Search"
              className="border pl-3 w-full h-[45px] rounded-full hover:shadow-md duration-150"
              onChange={handle_search}
              value={search}
            ></input>
            <div className="absolute make_center h-full rounded-tr-full  rounded-br-full aspect-square right-0 top-1/2 -translate-y-1/2 bg-sclr">
              <button className="img_icon_size">
                <img
                  className="w-full"
                  alt="search button"
                  src={searchIcon}
                ></img>
              </button>
            </div>
          </div>

          {/* ------------------Signin----------------------- */}
          <div className="make_between w-[150px]">
            <div className="w-[40px]">
              <img className="w-full" alt="Profile" src={profileIcon}></img>
            </div>
            <div>
              <p className="p_3">Sign In</p>
              <p>My Account</p>
            </div>
          </div>

          {/* ------------------Shop favourite icon---------------------- */}

          <div className="flex w-[80px] make_between">
            <div className="img_icon_size">
              <img className="w-full" alt="favourite" src={favouriteIcon}></img>
            </div>
            <div className="img_icon_size">
              <img className="w-full" alt="Cart" src={cartIcon}></img>
            </div>
          </div>
        </div>

        {/* ------------------Header options---------------------- */}
        <div className="make_between w-5/12">{headerOptions}</div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
