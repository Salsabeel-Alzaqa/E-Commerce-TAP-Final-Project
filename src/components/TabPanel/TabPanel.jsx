import React , {useState} from 'react'
import { Box, Tabs, Tab } from "@mui/material";
export const TabPanel = ({TabsItems}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
    return (
        <>
            <Tabs value={selectedTab} onChange={handleTabChange} TabIndicatorProps={{ style: { display: "none" } }}>
                {TabsItems.map((tab, index) => (
                    <Tab label={tab.label} key={index} />))}
            </Tabs>
            {TabsItems.map((tab, index) => (
                selectedTab === index && (
                    <Box key={index} mt={3}>
                        {tab.content}
                    </Box>)))}
        </>
    )
}