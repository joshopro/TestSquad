import FriendsFrame from "./FriendsFrame";
import MostRecent from "./MostRecent";
import Navbar from "./NavBar";
import SquadMatches from "./SquadMatches";
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
      <div>
        <SquadMatches />
      </div>
    </>
  );
};

export default Overview;
