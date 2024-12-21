import Banner from "./Banner";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";
const Home = () => {
  return (
    <div className="w-full max-w-[1500px] m-auto">
      <Banner />
      <ContentOne />
      <ContentThree />
      <ContentOne />
      <ContentTwo />
    </div>
  );
};

export default Home;
