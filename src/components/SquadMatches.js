import { Box, styled } from "@mui/material";
import Squad1Img from "../assets/squad1.png";
import LeftIcon from "../assets/angle-left-small.svg";
import RightIcon from "../assets/angle-right-small.svg";
import LikeIcon from "../assets/like.svg";
import SuperLikeIcon from "../assets/super-like.svg";
import CardTitle from "./common/CardTitle";
import CardDescription from "./common/CardDescription";
import CardAddToCart from "./common/CardAddToCart";
const SquadMatches = () => {
  console.log("LeftIcon", RightIcon);
  return (
    <Main>
      <Wrapper elevation={3}>
        <Title>
          Squad matches:
          <br />
          items you both loved
        </Title>
        <Image src={Squad1Img} />
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
              Olaplex No. 7 Bonding Oil Free Sample
            </CardDescription>
            <CardAddToCart>Add to cart</CardAddToCart>
          </LeftActionContainer>
          <RightActionContainer>
            <SliderButton>
              <SliderButtonIcon src={LeftIcon} />
            </SliderButton>
            <SliderButton>
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
  max-width: 584px;
  background: var(--crme-lightest, #fff9f0);
  border-radius: 24px;
`;

const Wrapper = styled(Box)`
  display: flex;
  padding: 40px 0;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-start; */
  /* align-items: center; */
`;