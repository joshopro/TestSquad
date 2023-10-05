import { Box, styled } from "@mui/material";
import MostRecentImg from "../assets/mostrecent.png";
import CardTitle from "./common/CardTitle";
import CardDescription from "./common/CardDescription";
import CardAddToCart from "./common/CardAddToCart";
const MostRecent = () => {
  return (
    <Wrapper elevation={3}>
      <TextContainer>
        <CardTitle textAlign="left"> Most recent like</CardTitle>
        <CardDescription textAlign="left">
          Dior Forever Skin Glow Foundation SPF 15 Free Sample
        </CardDescription>
        <CardAddToCart>Add to cart</CardAddToCart>
      </TextContainer>
      <Image src={MostRecentImg} />
    </Wrapper>
  );
};

export default MostRecent;

const Image = styled("img")`
  width: 100%;
  max-width: 210px;
  max-height: 278px;
`;

const TextContainer = styled(Box)`
  padding: 0 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Wrapper = styled(Box)`
  max-width: 584px;
  background: var(--primary-50, #fff7fd);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 24px;
  align-items: center;
`;
