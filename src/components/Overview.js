import MostRecent from "./MostRecent";
import Navbar from "./NavBar";
import SuperLikedCard from "./SuperLikedCard";

const Overview = () => {
  return (
    <>
      <Navbar />
      <div>
        <SuperLikedCard />
      </div>
      <div>
        <MostRecent />
      </div>
    </>
  );
};

export default Overview;
