import uparrowIcon from "../../assets/uparrowIcon.svg";
import Icons from "../component/Icons/Icons";
import { useState, useEffect } from "react";
const MoveUp = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`duration-500 top-[90%] ${
        isScrolled ? "opacity-100" : "opacity-0"
      } border-2 fixed rounded-full right-10 make_center z-10 h-[50px] w-[50px] bg-sclr`}
    >
      <Icons src={uparrowIcon} className={"w-[50%]"} />
    </button>
  );
};

export default MoveUp;
