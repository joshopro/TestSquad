import { Box, Button, styled } from "@mui/material";

const InviteFriend = () => {
  return (
    <ButtonContainer>
      <InviteButton variant="contained" fullWidth>
        Share with a friend
      </InviteButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled(Box)`
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: none;
  ${(props) => props.theme.breakpoints.down("sm")} {
    display: block
  }
`;
const InviteButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 6px;
  background: ${({ theme }) => theme.palette.neutral.primary};
`;

export default InviteFriend;
