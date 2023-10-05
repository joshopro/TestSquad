import { Box, Tab, Tabs, styled } from "@mui/material";
import { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const tabs = [
  "Free Samples",
  "Deluxe Samples",
  "My squad",
  "Brands",
  "Makeup",
  "Skin Care",
  "Hair Care",
  "Bath & Body",
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
  margin-top: 24px;
`;
const StyledTab = styled(Tab)`
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 536;
  line-height: 24px;
`;

export default BottomNav;
