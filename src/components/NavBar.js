import { Box, TextField, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/Logo.svg"


const Navbar = () => {

    return(
        <NavContainer>
            <UpperNav>
                <FlexBox>
                    <MenuIcon style={{ color: '#191531', cursor: 'pointer' }} />
                    <Logo alt="logo" src={logo} />
                </FlexBox>
                <SearchBox>
                    <SearchIcon style={{ color: '#191531', marginRight: '8px', cursor: 'pointer' }} />
                    <Input type="text" placeholder="search Anything" />
                </SearchBox>
                <FlexBox></FlexBox>
            </UpperNav>

        </NavContainer>
    )
}

const NavContainer = styled(Box)`
padding: 23px 116px 0px 116px;
`
const UpperNav = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
`
const FlexBox = styled(Box)`
display: flex;
align-items: center;
`
const SearchBox = styled(Box)`
display: flex;
border-radius: 100px;
width: 720px;
border: 1.5px solid #DAD8E4;
padding: 8px 16px;
`
const Input = styled('input')`
flex: 1;
border: none;
&:focus {
        outline: none;
    }
`
const Logo = styled('img')`
margin-left: 24px;
`

export default Navbar;