import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";

const items = ["Victoria E.", "Alissa M.", "Anne Marie D."];

const FriendsCarousel = () => {
  const [prevName, setPrevName] = useState(items[0]);
  const [selected, setSelected] = useState(items[1]);
  const [nextName, setNextName] = useState(items[2]);

  const handleSelect = (name) => {
    const indexSelected = items.indexOf(name);
    console.log(name, indexSelected);
    setPrevName(items[indexSelected - 1]);
    setSelected(items[indexSelected]);
    setNextName(items[indexSelected + 1]);
    console.log("items[indexSelected + 1", items[indexSelected + 1]);
  };
  useEffect(() => {
    console.log(prevName, selected, nextName);
  }, [prevName, selected, nextName]);
  return (
    <Container>
      <CarouselWrapper>
        <FriendName
          onClick={() => prevName && handleSelect(prevName)}
          justifyContent={"flex-end"}
        >
          {prevName}
        </FriendName>
        <FriendName
          selected
          onClick={() => handleSelect(selected)}
          justifyContent={"center"}
        >
          {selected}
        </FriendName>
        <FriendName
          onClick={() => nextName && handleSelect(nextName)}
          justifyContent={"flex-start"}
        >
          {nextName}
        </FriendName>
      </CarouselWrapper>
    </Container>
  );
};

const Container = styled(Box)`
  overflow: hidden;
`;

const CarouselWrapper = styled(Box)`
  display: flex;
  position: relative;
  left: -50%;
  transform: translateX(-12.5%);
`;

const FriendName = styled(Typography)`
  cursor: pointer;
  color: #191531;
  font-family: ABC Ginto Normal Variable;
  font-size: 104px;
  font-weight: 700;
  line-height: 124.8px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};
  flex: 0 0 75%;
`;

export default FriendsCarousel;
