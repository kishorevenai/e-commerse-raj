import personOne from "../../../assets/personOne.png";
import personTwo from "../../../assets/personTwo.png";
import personThree from "../../../assets/personThree.png";

import CircleCard from "../../component/CircleCard.jsx/CircleCard";
const ContentThree = () => {
  return (
    <div className="h-[300px] mt-5 make_row_evenly">
      <p className="h1_secondary text-center">SHOP BY COLLECTIONS</p>
      <div className="w-full flex make_even">
        <CircleCard src={personOne} />
        <CircleCard src={personTwo} />
        <CircleCard src={personThree} />
        <CircleCard src={personOne} />
      </div>
    </div>
  );
};

export default ContentThree;
