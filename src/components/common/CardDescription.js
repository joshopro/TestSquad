import { Typography, styled } from "@mui/material";

const CardDescription = styled(Typography)`
  color: var(--neutral-600-primary, #191531);
  text-align: ${({ textAlign }) => textAlign || "center"};
  font-feature-settings: "calt" off;
  font-family: ABC Ginto Normal Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  align-self: stretch;
  margin-bottom: 8px;
`;

export default CardDescription;
