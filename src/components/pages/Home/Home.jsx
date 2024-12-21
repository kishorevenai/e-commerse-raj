import Banner from "./Banner";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";
import ContentFour from "./ContentFour";

const Home = () => {
  return (
    <div className="w-full max-w-[1500px] m-auto">
      <Banner />
      <ContentOne />
      <ContentThree />
      <ContentTwo />
      <ContentFour />
    </div>
  );
};

export default Home;
