import personOne from "../../../assets/personOne.webp";
import personTwo from "../../../assets/personTwo.webp";
import personThree from "../../../assets/personThree.webp";
import personFour from "../../../assets/personFour.webp";

import CircleCard from "../../component/CircleCard.jsx/CircleCard";
const ContentThree = () => {
  return (
    <div className="h-[] mt-5 make_row_evenly">
      <p className="h1_secondary text-center mb-20">SHOP BY COLLECTIONS</p>
      <div className="w-full grid grid-cols-CircleCardGrid gap-1 place-content-center place-items-center">
        <CircleCard src={personOne} name={"T-Shirt"} />
        <CircleCard src={personTwo} name={"Round Neck-Oversized"} />
        <CircleCard src={personThree} name={"Hoodies"} />
        <CircleCard src={personFour} name={"Polo T Shirt"} />
        <CircleCard src={personOne} name={"Metal Batches"} />
        <CircleCard src={personThree} name={"Printed Cups"} />
      </div>
    </div>
  );
};

export default ContentThree;
