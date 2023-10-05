import { Box, styled } from "@mui/material";
import SuperLikedImg from "../assets/superliked.png";
import CardTitle from "./common/CardTitle";
import CardDescription from "./common/CardDescription";
import CardAddToCart from "./common/CardAddToCart";
const SuperLikedCard = () => {
  return (
    <Main>
      <Wrapper elevation={3}>
        <CardTitle>Alissa’s most popular superliked sample</CardTitle>
        <CardDescription>Olaplex No. 7 Bonding Oil Free Sample</CardDescription>
        <CardAddToCart>Add to cart</CardAddToCart>
        <Image src={SuperLikedImg} />
      </Wrapper>
    </Main>
  );
};

export default SuperLikedCard;

const Image = styled("img")`
  width: 100%;
  max-width: 504px;
  max-height: 260px;
  margin-top: 33px;
`;

const Main = styled(Box)`
  max-width: 584px;
  background: var(--secondary-50, #f8f8ff);
  border-radius: 24px;

`;

const Wrapper = styled(Box)`
  display: flex;
  padding: 40px 40px 0px 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-items: center;
`;
