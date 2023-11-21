import React , {useState} from 'react'
import { Grid, useMediaQuery, Tab, Tabs } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link  } from "react-router-dom";
import { styled } from "@mui/system";
const StyledTab = styled(Tab)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiTab-wrapper': {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    '&.Mui-selected': {
        backgroundColor: '#F1F1F1',
        color: '#1B4B66',
    },
});

const ArrowIcon = styled(ArrowForwardIosIcon)({
    fontSize: 16, 
     display: 'flex',
    justifyContent: 'flex-end',
});

export const SideNav = ({children , selectedItem}) => {
    const [selectedTab, setSelectedTab] = useState(selectedItem || 0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const tabs = [
        { label: 'Personal Information', page: '/profile' },
        { label: 'My Orders', page: '/profile/my-orders' },
        { label: 'My Wishlist', page: '/profile/my-wishlist' },
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={12} md={12} lg={3}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                    TabIndicatorProps={{ style: { left: 0 } }}
                    sx={{ padding: 0 }}
                >
                    {tabs.map((tab, index) => (
                        <StyledTab key={index} label={tab.label} component={Link} to={tab.page} icon={<ArrowIcon />} iconPosition="end" />
                               
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
                {children}
            </Grid>
        </Grid>
    );
}