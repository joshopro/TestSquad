import { Typography, styled } from "@mui/material";

const CardDescription = styled(Typography)`
  color: var(--neutral-600-primary, #191531);
  text-align: ${({ textAlign }) => textAlign || "center"};
  font-feature-settings: "calt" off;
  /* Desktop/Body/Regular */
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  align-self: stretch;
  margin-bottom: 8px;
`;

export default CardDescription;
