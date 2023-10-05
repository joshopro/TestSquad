import { Box, IconButton, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../svgs/logo";


const Navbar = () => {

    return(
        <NavContainer>
            <UpperNav>
                <FlexBox>
                    <MenuIcon />
                    <Logo />
                </FlexBox>
                <FlexBox>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </FlexBox>
                <FlexBox></FlexBox>
            </UpperNav>

        </NavContainer>
    )
}

const NavContainer = styled(Box)`
padding: 23px 116px 0px 23px;
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

export default Navbar;