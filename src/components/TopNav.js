import { Box, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "../assets/Logo.svg";
import diamond from "../assets/diamond.svg";
import shoppingBag from "../assets/shopping-bag.svg";

const TopNav = () => {
  return (
    <UpperNav>
      <FlexBox>
        <MenuIcon style={{ color: "#191531", cursor: "pointer" }} />
        <Logo alt="logo" src={logo} />
      </FlexBox>
      <SearchBox>
        <SearchIcon
          style={{ color: "#191531", marginRight: "8px", cursor: "pointer" }}
        />
        <Input type="text" placeholder="search Anything" />
      </SearchBox>
      <FlexBox>
        <AccountIconWrapper>
          <AccountCircleOutlinedIcon fontSize="medium" />
          <Dot />
        </AccountIconWrapper>
        <Diamond alt="points" src={diamond} />
        <Typography mx="4px">681 pts</Typography>
        <ShoppingBag alt="cart" src={shoppingBag} />
        <Typography ml="8px" mr="12px">
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
const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`;
const SearchBox = styled(Box)`
  display: flex;
  border-radius: 100px;
  width: 720px;
  border: 1.5px solid #dad8e4;
  padding: 8px 16px;
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

export default TopNav;
