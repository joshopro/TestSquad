import { Box, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import userIcon from "../assets/user-circle.svg";
import diamond from "../assets/diamond.svg";
import shoppingBag from "../assets/shopping-bag.svg";
import MoneyBills from "../assets/money-bills.svg";
import FlexBox from "./common/FlexBox";

const TopNav = () => {
  return (
    <UpperNav>
      <FlexBox>
        <MenuIcon style={{ color: "#191531", cursor: "pointer" }} />
        <Logo alt="logo" src={logo} />
      </FlexBox>
      <SearchBox>
        <SearchIcon alt="search" src={search} />
        <Input type="text" placeholder="Search anything" />
      </SearchBox>
      <FlexBox>
        <StyledSearchIcon alt="search" src={search} />
        <AccountIconWrapper>
          <img src={userIcon} alt="user" />
          <Dot />
        </AccountIconWrapper>
        <DiamondWrapper>
          <Diamond alt="points" src={diamond} />
          <Typography mx="4px" width="53px" sx={{color: '#191531'}}>
            681 pts
          </Typography>
        </DiamondWrapper>
        <MoneyWrapper>
          <MoneyIcon src={MoneyBills} alt="money-bills" />
        </MoneyWrapper>
        <ShoppingBag alt="cart" src={shoppingBag} />
        <Typography ml="8px" mr="12px" sx={{color: '#191531'}}>
          0
        </Typography>
      </FlexBox>
    </UpperNav>
  );
};

const UpperNav = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled(Box)`
  display: flex;
  border-radius: 100px;
  width: 720px;
  margin-left: 87px;
  margin-right: 42px;
  border: 1.5px solid #dad8e4;
  padding: 8px 16px;
  ${(props) => props.theme.breakpoints.down("md")} {
    display: none;
  }
`;
const Input = styled("input")`
  flex: 1;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Logo = styled("img")`
  margin-left: 24px;
  ${(props) => props.theme.breakpoints.down("md")} {
    margin-left: 12px;
    width: 90px;
  }
`;
const AccountIconWrapper = styled(Box)`
  position: relative;
  height: 24px;
`;
const Dot = styled(Box)`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: green;
  position: absolute;
  right: 0px;
  bottom: 0px;
  border: 1px solid #fff;
`;
const Diamond = styled("img")`
  margin-left: 12px;
`;
const ShoppingBag = styled("img")`
  margin-left: 12px;
`;
const SearchIcon = styled("img")`
  margin-right: 8px;
  cursor: pointer;
`;
const StyledSearchIcon = styled(SearchIcon)`
  display: none;
  ${(props) => props.theme.breakpoints.down("md")} {
    display: block;
    margin-right: 12px;
    cursor: pointer;
  }
`;
const DiamondWrapper = styled(Box)`
  display: block;
  ${(props) => props.theme.breakpoints.down("md")} {
    display: none;
  }
`;
const MoneyWrapper = styled(Box)`
  display: none;
  ${(props) => props.theme.breakpoints.down("md")} {
    display: block;
  }
`;
const MoneyIcon = styled("img")`
  margin-left: 12px;
`;

export default TopNav;
