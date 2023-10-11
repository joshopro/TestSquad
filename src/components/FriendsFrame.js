import { Box, styled } from "@mui/material";
import friend1 from "../assets/friend1.svg";
import friend2 from "../assets/friend2.svg";
import friend3 from "../assets/friend3.svg";
import pen from "../assets/pen.svg";

const FriendsFrame = () => {
  return (
    <FrameContainer>
      <Frame>
        <Box>
          <FriendImage alt={"friend 1"} src={friend1} />
          <FriendImage alt={"friend 2"} src={friend2} overlap />
          <FriendImage alt={"friend 3"} src={friend3} overlap />
        </Box>
        <Box mt="24px" width="338px">
          <Heading colorCode="#191531">You’ve added 3 friends to </Heading>
          <Heading colorCode="#E15EC4">your squad </Heading>
          <img alt="pen" src={pen} />
        </Box>
      </Frame>
    </FrameContainer>
  );
};

const FrameContainer = styled(Box)`
  margin-top: 105px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Frame = styled(Box)`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FriendImage = styled("img")`
  margin-left: ${({ overlap }) => (overlap ? "-22.14px" : "-16.57px")};
`;
const Heading = styled("span")`
  color: ${({ colorCode }) => (colorCode ? colorCode : "#191531")};
  text-align: center;
  font-family: ABC Ginto Normal Variable;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36.4px;
  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 26px;
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 24px;
  }
`;

export default FriendsFrame;
