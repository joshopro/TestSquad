import { AppBar, Box, styled } from "@mui/material";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const topHeight = window.scrollY;
      setOffset(topHeight > 30 ? 1 : 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavWrapper>
      <NavContainer offset={offset}>
        <TopNav />
      </NavContainer>
        <BottomNav />
    </NavWrapper>
  );
};

const NavContainer = styled(AppBar)`
  padding: 23px 116px 23px 116px;
  background: #ffffff;
  box-shadow: none;
  border-bottom: ${({offset}) => offset === 1 ? '1px solid #f0eef4' : 'none'};
  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 12px;
    border-bottom: 1px solid #f0eef4;
  }
`;
const NavWrapper = styled(Box)``
export default Navbar;
