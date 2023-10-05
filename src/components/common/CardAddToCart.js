import { Link, styled } from "@mui/material";

const CardAddToCart = styled(Link)`
  cursor: pointer;
  color: var(--color-patterns-fill-primary-enabled, #e15ec4);
  text-align: center;
  font-feature-settings: "calt" off;
  /* Desktop/Body/Medium */
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 536;
  line-height: 24px; /* 150% */
  text-decoration: none;
`;

export default CardAddToCart;
