import { Box, styled } from "@mui/material";

const Layout = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 0 80px;
  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 0 48px;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 0 24px;
  }
`;

export default Layout;
