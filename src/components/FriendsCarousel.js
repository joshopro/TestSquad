import React from "react";
import { Box, Typography, styled } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";

const items = ["Victoria E.", "Alissa M.", "Anne Marie D."];

const FriendsCarousel = () => {
  return (
    <CarouselWrapper>
      {items.map((name) => (
        <FriendName key={name} selected={name === "Alissa M." ? 1 : 0}>
          {name}
        </FriendName>
      ))}
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled(Box)`
  display: flex;
  overflow-x: auto;
  gap: 200px;
`;

const FriendName = styled(Typography)`
  color: #191531;
  font-family: ABC Ginto Normal Variable;
  font-size: 104px;
  font-weight: 700;
  line-height: 124.8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};
`;

export default FriendsCarousel;
