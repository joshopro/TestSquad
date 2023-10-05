import FriendsFrame from "./FriendsFrame";
import MostRecent from "./MostRecent";
import Navbar from "./NavBar";
import SuperLikedCard from "./SuperLikedCard";

const Overview = () => {
  return (
    <>
      <Navbar />
      <FriendsFrame />
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
