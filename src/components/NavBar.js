import { Box, styled } from "@mui/material";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";



const Navbar = () => {

    return(
        <NavContainer>
            <TopNav />
            <BottomNav />
        </NavContainer>
    )
}

const NavContainer = styled(Box)`
padding: 23px 116px 0px 116px;
margin-bottom: 50px;
`
export default Navbar;