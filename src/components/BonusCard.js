import { Box, Button, Typography, styled } from "@mui/material";
import image from "../assets/Shapes.png"

const BonusCard = () => {
  return (
    <CardContainer>
      <Card>
        <CardHeading>
          Get 50 bonus points when you <br /> invite a new friend
        </CardHeading>
        <CardDetails>They get 50% off their first sample box.</CardDetails>
        <ShareButton variant="contained" fullWidth>
          Share with a friend
        </ShareButton>
      </Card>
    </CardContainer>
  );
};
const CardContainer = styled(Box)`
  padding: 24px 20px;
  display: none;
  ${(props) => props.theme.breakpoints.down("sm")} {
    display: block;
  }
`;
const Card = styled(Box)`
  display: flex;
  /* width: 327px; */
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-image: url(${image});
  background-size: cover;
`;
const CardHeading = styled(Typography)`
  color: ${({ theme }) => theme.palette.neutral.primary};
  text-align: center;
  font-family: ABC Ginto Normal Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 8px;
`;
const CardDetails = styled(Typography)`
  color: ${({ theme }) => theme.palette.neutral.primary};
  text-align: center;
  font-family: ABC Ginto Normal Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;
const ShareButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 6px;
  background: ${({ theme }) => theme.palette.neutral.primary};
`;

export default BonusCard;
