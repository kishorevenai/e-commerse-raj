import Logo from "../../assets/logo.png";
import searchIcon from "../../assets/searchIcon.svg";
import profileIcon from "../../assets/profileIcon.svg";

import favouriteIcon from "../../assets/heartIcon.svg";
import cartIcon from "../../assets/shopIcon.svg";
import { clothTypes } from "../../utils/Header/HeaderOptions";

const PrimaryHeader = () => {
  const headerOptions = clothTypes.map((options) => {
    return (
      <button className="font-normal group" key={options}>
        <p className="p_2">{options.name}</p>
        <div className="w-[0px] duration-500 group-hover:w-full h-[1px] bg-black"></div>
      </button>
    );
  });
  return (
    <div className="w-full border-b border-2">
      <div className="w-7/12 make_row_around  h-[150px] mx-auto">
        <div className="w-full mb-2 make_between">
          {/* ---------------Search----------------------- */}

          <button className="img_icon_size">
            <img className="w-full" alt="search button" src={searchIcon}></img>
          </button>

          {/* ------------------logo--------------- */}
          <div className="img_logo_size">
            <img alt="Logo" src={Logo}></img>
          </div>

          {/* ------------------Shop favourite icon---------------------- */}

          <div className="flex w-[100px] make_between">
            <div className="img_icon_size">
              <img className="w-full" alt="profile" src={profileIcon}></img>
            </div>
            <div className="img_icon_size">
              <img className="w-full" alt="favourite" src={favouriteIcon}></img>
            </div>
            <div className="img_icon_size">
              <img className="w-full" alt="Cart" src={cartIcon}></img>
            </div>
          </div>
        </div>

        {/* ------------------Header options---------------------- */}
        <div className="make_between w-10/12">{headerOptions}</div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
