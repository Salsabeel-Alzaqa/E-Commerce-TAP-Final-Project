import React , {useState} from 'react'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import { Title } from '../../components/Title/Title';
import { Container, Box, Grid, Typography , useMediaQuery, Tab, Tabs , Button , Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PersonalInfoPage } from '../PersonalInfoPage/PersonalInfoPage';
import { OrdersPage } from '../OrdersPage/OrdersPage';
import { WishlistPage } from '../WishlistPage/WishlistPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
const StyledTab = styled(Tab)({
  '&.Mui-selected': {
    backgroundColor:'#F1F1F1',
    color: '#1B4B66',
  },
});
const TabsContainer = styled(Tabs)({
    display: 'flex',
    justifyContent: 'flex-start',
});
const TabLabelContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const ArrowIcon = styled(ArrowForwardIosIcon)({
  fontSize: 16, // Adjust the size of the arrow icon as needed
});
const breadcrumbItems = [
    <Typography underline="hover" key="2">
        User Profile
    </Typography>
];

export const ProfilePage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const tabs = [
        { label: 'Personal Information', page: <PersonalInfoPage /> },
        { label: 'My Orders', page: <OrdersPage /> },
        { label: 'My Wishlist', page: <WishlistPage /> },
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const getSelectedTabLabel = () => {
        return tabs[selectedTab].label;
    };
    
    const handleLogoutClick = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <Container maxWidth="xl">
            <Box mt={3}>
                <Breadcrumb items={breadcrumbItems} />
                <Box flexDirection="row" display='flex' alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Title text={getSelectedTabLabel()} color={'primary'} />
                    <Button variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogoutClick} sx={{ marginTop: 3 }}> LogOut</Button>
                </Box>
            </Box>
            <Grid container spacing={3} mb={4}>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <TabsContainer
                        value={selectedTab}
                        onChange={handleTabChange}
                        orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                        TabIndicatorProps={{ style: { left: 0 } }}
                    >
                        {tabs.map((tab, index) => (
                            <StyledTab
                                key={index}
                                label={
                                    <TabLabelContainer>
                                        {tab.label}
                                        <ArrowIcon />
                                    </TabLabelContainer>
                                }
                            />
                        ))}
                    </TabsContainer>
                </Grid>
                {tabs.map((tab, index) => (
                    selectedTab === index && (
                        <Grid key={index} item xs={12} sm={12} md={12} lg={8}>
                            <Typography variant="h5" gutterBottom>{getSelectedTabLabel()}</Typography>
                            <Divider />
                            {tab.page}
                        </Grid>)))}
            </Grid>
        </Container>
    );
}