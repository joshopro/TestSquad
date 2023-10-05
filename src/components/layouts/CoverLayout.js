import { Box, Typography, styled } from "@mui/material"



const CoverLayout = ({subHeading, Heading = 'My Squad'}) => {

    return (
        <LayoutContainer>
            <ChipsArea>
                <GreyText>
                    MARKETING / WEBSITE
                </GreyText>
            </ChipsArea>
            <Box width="980px">
                {subHeading && <GreyText>{subHeading}</GreyText>}
                <MainText>{Heading}</MainText>
            </Box>
        </LayoutContainer>
    )
}

const LayoutContainer = styled(Box)`
margin: 0;
background: ${({theme}) => theme.palette.neutral.primary};
height: 100vh;
width: 100vw;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
const ChipsArea = styled(Box)`
position: absolute;
top: 38px;
left: 40px;

`
const GreyText = styled(Typography)`
color: ${({theme}) => theme.palette.neutral.white};
font-family: sans-serif;
width: fit-content;
font-size: 12px;
font-style: normal;
font-weight: 536;
line-height: 18px; 
letter-spacing: 1px;
text-transform: uppercase;
`
const MainText = styled(Typography)`
color: #FFF;
font-family: sans-serif;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: 115.2px;
text-align: start;
margin-top: 8px;
`

export default CoverLayout;