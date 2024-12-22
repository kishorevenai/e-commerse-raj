import Banner from "./Banner";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";
import ContentFour from "./ContentFour";
import TimerBanner from "./TimerBanner";

const Home = () => {
  return (
    <div className="w-full max-w-[1500px] m-auto">
      <Banner />
      <ContentOne />
      <ContentThree />
      <TimerBanner />
      <ContentTwo />
      <ContentFour />
    </div>
  );
};

export default Home;
