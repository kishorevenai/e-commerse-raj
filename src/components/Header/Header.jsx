import { headerOptions, headerRight } from "../../utils/Header/HeaderOptions";
import LogoIcon from "../../assets/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up
        setIsScrolledDown(false);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const headerLeft = headerOptions.map((options) => {
    return (
      <p className="cursor-pointer p_primary" key={options}>
        {options}
      </p>
    );
  });

  const headerRightOptions = headerRight.map(({ img }) => {
    return (
      <button key={img} className="img_icon_size">
        <img className="w-full" src={img}></img>
      </button>
    );
  });

  return (
    <div
      className={`border make_center w-full duration-500 border-grey h-[70px] ${
        isScrolledDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="make_between w-9/12 mx-auto">
        <div className="make_between w-4/12">{headerLeft}</div>
        <div className="img_logo_size">
          <img className="w-full" alt="Logo" src={LogoIcon}></img>
        </div>
        <div className="flex justify-end items-center w-4/12">
          <div className="make_between w-4/12">{headerRightOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
