import { Box, styled } from "@mui/material";
import FriendsFrame from "./FriendsFrame";
import MostRecent from "./MostRecent";
import Navbar from "./NavBar";
import SquadMatches from "./SquadMatches";
import SuperLikedCard from "./SuperLikedCard";
import Layout from "./common/Layout";
import FriendsCarousel from "./FriendsCarousel";

const Overview = () => {
  return (
    <>
      <Navbar />
      <FriendsFrame />
      <FriendsCarousel />
      <Layout>
        <CardGrid>
          <SuperLikedCard />
          <MostRecent />
          <SquadMatches />
        </CardGrid>
      </Layout>
    </>
  );
};

const CardGrid = styled(Box)`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 278px;
  grid-gap: 40px;
`;

export default Overview;
