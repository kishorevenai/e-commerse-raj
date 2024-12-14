import Banner from "./Banner";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
const Home = () => {
  return (
    <div className="w-9/12 m-auto">
      <Banner />
      <ContentOne />
      <ContentOne />
      <ContentTwo />
    </div>
  );
};

export default Home;
