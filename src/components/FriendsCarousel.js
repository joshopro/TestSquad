import React, { useCallback, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import RightIcon from "../assets/angle-right-small.svg";
import LeftIcon from "../assets/angle-left-small.svg";

const items = ["Victoria E.", "Alissa M.", "Anne Marie D."];

const FriendsCarousel = () => {
  const [prevName, setPrevName] = useState(items[0]);
  const [selected, setSelected] = useState(items[1]);
  const [nextName, setNextName] = useState(items[2]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = useCallback((name) => {
    const indexSelected = items.indexOf(name);
    setPrevName(items[indexSelected - 1]);
    setSelected(items[indexSelected]);
    setNextName(items[indexSelected + 1]);
  }, []);
  const handleNext = useCallback(() => {
    const index = items.indexOf(selected);
    if (items[index + 1]) {
      handleSelect(items[index + 1]);
    } else {
      handleSelect(items[0]);
    }
  }, [selected, handleSelect]);

  const handlePrev = useCallback(() => {
    const index = items.indexOf(selected);
    if (items[index - 1]) {
      handleSelect(items[index - 1]);
    } else {
      handleSelect(items[items.length - 1]);
    }
  }, [selected, handleSelect]);
  return (
    <>
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
      <SliderActions>
        <SliderButton onClick={handlePrev}>
          <SliderButtonIcon src={LeftIcon} />
        </SliderButton>
        <SelectFriend onClick={() => setMenuOpen(!menuOpen)}>
          Select a friend
          {menuOpen && (
            <FriendMenu>
              {items.map((name) => (
                <FriendItem key={name} onClick={() => handleSelect(name)}>
                  {name}
                </FriendItem>
              ))}
            </FriendMenu>
          )}
        </SelectFriend>
        <SliderButton onClick={handleNext}>
          <SliderButtonIcon src={RightIcon} />
        </SliderButton>
      </SliderActions>
    </>
  );
};
const FriendItem = styled(Box)`
  padding: 8px;
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  color: var(--content-neutral-highlight-enabled, #191531);
  font-feature-settings: "calt" off;
  /* Desktop/Body/Regular */
  font-family: ABC Ginto Normal Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:hover {
    color: var(--content-neutral-highlight-hover, #e15ec4);
  }
`;
const FriendMenu = styled(Box)`
  position: absolute;
  width: 176px;

  border-radius: 6px;
  background: var(--neutral-white, #fff);
  /* Elevation/400 */
  box-shadow:
    0px 40px 80px -16px rgba(25, 21, 49, 0.16),
    0px 12px 32px -8px rgba(25, 21, 49, 0.16),
    0px 0px 1px 0px rgba(25, 21, 49, 0.16);
`;

const SelectFriend = styled(Typography)`
  position: relative;
  cursor: pointer;
  margin: 0 24px;
  color: var(--content-primary-enabled, #e15ec4);
  text-align: justify;
  font-feature-settings: "calt" off;
  /* Desktop/Body/Medium */
  font-family: ABC Ginto Normal Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 536;
  line-height: 24px; /* 150% */
  user-select: none;
`;

const SliderActions = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SliderButtonIcon = styled("img")``;

const SliderButton = styled("button")`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: var(--content-white-enabled, #fff);
  /* Elevation/400 */
  box-shadow:
    0px 40px 80px -16px rgba(25, 21, 49, 0.16),
    0px 12px 32px -8px rgba(25, 21, 49, 0.16),
    0px 0px 1px 0px rgba(25, 21, 49, 0.16);
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--stroke-neutral-hover, #838092);
  }
`;

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
  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 70px;
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 40px;
  }
`;

export default FriendsCarousel;
