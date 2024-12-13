import arrowIcon from "../../../assets/arrow.svg";
import { useRef, useEffect } from "react";
import CardOne from "../../component/ProductCards/CardOne";

const ProductCategory = () => {
  // Ref for the scrollable container
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrolling = false;
    let timeoutId; // Store the timeout ID for cleanup

    const handleWheelScroll = (event) => {
      event.preventDefault(); // Prevent vertical scrolling

      if (isScrolling) return; // Prevent overlapping scroll events
      
      isScrolling = true;

      container.scrollBy({
        left: event.deltaY * 3,
        behavior: "smooth",
      });

      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Reset scrolling flag after the animation
      timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 200);
    };

    container.addEventListener("wheel", handleWheelScroll);

    return () => {
      // Cleanup event listener and timeout on unmount
      container.removeEventListener("wheel", handleWheelScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Function to handle scrolling
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate the scroll amount (equal to one card width including margin)
    // const cardsDimension = window.getComputedStyle(
    //   container.querySelector(".card")
    // );
    // const cardsMarginLeft = parseFloat(cardsDimension.marginLeft);
    // const cardsMarginRight = parseFloat(cardsDimension.marginRight);
    const cardWidth = container.querySelector(".card").offsetWidth;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    // Scroll the container smoothly
    container.scrollBy({ left: scrollAmount * 2, behavior: "smooth" });
  };

  const paginationTablet = (
    <div className="border rounded-full make_around w-[100px] h-[40px]">
      <button
        className="img_icon_size rotate-180"
        onClick={() => scroll("left")}
      >
        <img src={arrowIcon} alt="Scroll Left" />
      </button>
      {/* <p>1/5</p> */}
      <button className="img_icon_size" onClick={() => scroll("right")}>
        <img src={arrowIcon} alt="Scroll Right" />
      </button>
    </div>
  );

  return (
    <div className="h-full max-h-[850px] make_row_evenly border-2 border-black">
      <div className="make_between w-9/12 mx-auto">
        <p className="h1_tertiary">Shop By Category</p>
        {paginationTablet}
      </div>
      <div
        className="flex w-full h-[600px] overflow-hidden"
        ref={scrollContainerRef} // Attach the ref to the scroll container
      >
        {/* Dummy element for styling */}
        <div className="w-[200px] aspect-3/4"></div>

        {/* Cards */}
        {[...Array(9)].map((_, index) => (
          <CardOne key={index} className="card" /> // Add a "card" class for styling
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
