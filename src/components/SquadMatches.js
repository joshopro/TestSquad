import { Box, styled } from "@mui/material";
import Squad1Img from "../assets/squad1.png";
import Squad2Img from "../assets/squad2.png";
import LeftIcon from "../assets/angle-left-small.svg";
import RightIcon from "../assets/angle-right-small.svg";
import LikeIcon from "../assets/like.svg";
import SuperLikeIcon from "../assets/super-like.svg";
import CardTitle from "./common/CardTitle";
import CardDescription from "./common/CardDescription";
import CardAddToCart from "./common/CardAddToCart";
import AliceCarousel from "react-alice-carousel";
import { useMemo, useState } from "react";

const settings = {
  disableButtonsControls: true,
  momentum: true,
  disableDotsControls: true,
  animationEasingFunction: "linear",
  animationDuration: 300,
  infinite: true,
  loop: true,
  responsive: {
    items: 1,
  },
};

const squadData = [
  {
    text: "Olaplex No. 7 Bonding Oil Free Sample",
    image: Squad1Img,
  },
  {
    text: "Pley Beauty Festival Flush Free sample",
    image: Squad2Img,
  },
];

const SquadMatches = () => {
  const [currentSquad, setCurrentSquad] = useState(0);

  const carouselData = useMemo(
    () =>
      squadData.map((data) => (
        <Box width={"100%"}>
          <Image src={data.image} />
        </Box>
      )),
    []
  );

  const handleCurrentSquad = (val) => {
    if (val === "add") {
      setCurrentSquad((prev) => (prev + 1) % 2);
    } else {
      setCurrentSquad((prev) => (prev - 1) % 2);
    }
  };

  return (
    <Main>
      <Wrapper elevation={3}>
        <Title>
          Squad matches:
          <br />
          items you both loved
        </Title>
        <Box maxWidth="100%">
          <AliceCarousel
            items={carouselData}
            activeIndex={currentSquad}
            {...settings}
          />
        </Box>
        <ActionContainer>
          <LeftActionContainer>
            <ReactionContainer>
              <ReactionButton>
                <SliderButtonIcon src={LikeIcon}></SliderButtonIcon>
              </ReactionButton>
              <ReactionButton superLike>
                <SliderButtonIcon src={SuperLikeIcon}></SliderButtonIcon>
              </ReactionButton>
            </ReactionContainer>
            <CardDescription textAlign="left">
              {squadData[currentSquad].text}
            </CardDescription>
            <CardAddToCart>Add to cart</CardAddToCart>
          </LeftActionContainer>
          <RightActionContainer>
            <SliderButton onClick={() => handleCurrentSquad()}>
              <SliderButtonIcon src={LeftIcon} />
            </SliderButton>
            <SliderButton onClick={() => handleCurrentSquad("add")}>
              <SliderButtonIcon src={RightIcon} />
            </SliderButton>
          </RightActionContainer>
        </ActionContainer>
      </Wrapper>
    </Main>
  );
};

export default SquadMatches;

const ReactionButton = styled("button")`
  width: 40px;
  height: 40px;
  transform: rotate(-5deg);
  flex-shrink: 0;
  background-color: ${({ superLike }) => (superLike ? "#4439DF" : "#e15ec4")};
  margin-left: ${({ superLike }) => (superLike ? "-5px" : "0")};
  cursor: pointer;
  border-radius: 50%;
  border: none;
`;

const ReactionContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const SliderButtonIcon = styled("img")``;

const SliderButton = styled("button")`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: var(--content-white-enabled, #fff);
  /* Elevation/400 */
  box-shadow: 0px 40px 80px -16px rgba(25, 21, 49, 0.16),
    0px 12px 32px -8px rgba(25, 21, 49, 0.16),
    0px 0px 1px 0px rgba(25, 21, 49, 0.16);
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--stroke-neutral-hover, #838092);
  }
`;

const LeftActionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  align-items: flex-start;
`;
const RightActionContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  padding-right: 40px;
  gap: 8px;
`;
const ActionContainer = styled(Box)`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled(CardTitle)`
  padding: 0 40px;
`;

const Image = styled("img")`
  width: 100%;
  max-height: 396px;
  margin-top: 32px;
`;

const Main = styled(Box)`
  background: var(--crme-lightest, #fff9f0);
  border-radius: 24px;
  ${(props) => props.theme.breakpoints.up("md")} {
    grid-column: span 2;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    grid-row: 2 span / 2;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  padding: 40px 0;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-start; */
  /* align-items: center; */
`;
