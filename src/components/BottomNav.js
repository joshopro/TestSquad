import { Box, Tab, Tabs, styled } from "@mui/material";
import { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const tabs = [
  "Free samples",
  "Deluxe samples",
  "My squad",
  "Brands",
  "Makeup",
  "Skin care",
  "Hair care",
  "Bath & body",
  "Fragrances",
];

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabsContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Basic Tabs"
        variant="scrollable"
        TabIndicatorProps={{ style: { background: "#191531" } }}
        textColor="#191531"
        sx={{ width: "1170px" }}
      >
        {tabs.map((tab, index) => (
          <StyledTab key={tab} label={tab} {...a11yProps(index)} />
        ))}
      </Tabs>
    </TabsContainer>
  );
};

const TabsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  border-bottom: 1px solid #f0eef4;
  ${(props) => props.theme.breakpoints.down("lg")} {
    display: none;
  }
`;
const StyledTab = styled(Tab)`
  font-family: ABC Ginto Normal Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 536;
  line-height: 24px;
  text-transform: none;
`;

export default BottomNav;
