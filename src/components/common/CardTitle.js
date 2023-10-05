import { Typography, styled } from "@mui/material";

const CardTitle = styled(Typography)`
  color: var(--neutral-600-primary, #191531);
  text-align: ${({ textAlign }) => textAlign || "center"};
  /* Desktop/Display/DH3 */
  font-family: sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 40px */
  align-self: stretch;
  margin-bottom: 16px;
`;

export default CardTitle;
