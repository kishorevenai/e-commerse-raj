import Logo from "../../assets/logoIcon.png";
import searchIcon from "../../assets/searchIcon.svg";
import profileIcon from "../../assets/profileIcon.svg";
import favouriteIcon from "../../assets/heartIcon.svg";
import cartIcon from "../../assets/shopIcon.svg";
import { clothTypes } from "../../utils/Header/HeaderOptions";
import { useRef, useState, useEffect } from "react";
import Icons from "../component/Icons/Icons";
import { Link } from "react-router-dom";

const PrimaryHeader = () => {
  const searchRef = useRef(null);
  const [toggleSearch, setToggleSearch] = useState(false);

  const headerOptions = clothTypes.map((options) => {
    return (
      <Link key={options} to={"/"}>
        <button className="font-normal group" key={options}>
          <p className="p_2">{options.name}</p>
          <div className="w-[0px] duration-150 group-hover:w-full h-[1px] bg-black"></div>
        </button>
      </Link>
    );
  });

  const handle_toggle_search = () => {
    setToggleSearch((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full border-b border-2">
      <div
        ref={searchRef}
        className={`w-10/12 mx-auto make_between absolute z-10 top-0 left-[50%] -translate-x-1/2 bg-white duration-150 overflow-hidden ${
          toggleSearch ? "h-[150px] opacity-100" : "h-[0px] opacity-0"
        }`}
      >
        <div className="img_logo_size -rotate-90">
          <img alt="Logo" src={Logo}></img>
        </div>

        <div className="w-8/12 h-[50px] relative">
          <Icons
            src={searchIcon}
            className={
              "img_icon_size absolute top-1/2 -translate-y-1/2 right-10"
            }
          />
          <input
            className="border-2 w-full h-full border-black rounded-[10px] pl-5"
            placeholder="Search products"
          ></input>
        </div>

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
      <div className="w-7/12 make_row_around  h-[150px] mx-auto">
        <div className="w-full mb-2 make_between">
          {/* ---------------Search----------------------- */}

          <button onClick={handle_toggle_search} className="img_icon_size">
            <img className="w-full" alt="search button" src={searchIcon}></img>
          </button>

          {/* ------------------logo--------------- */}
          <div className="w-[50px] -rotate-90">
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
        <div className="make_between w-10/12 md:w-full lg:w-10/12">
          {headerOptions}
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
