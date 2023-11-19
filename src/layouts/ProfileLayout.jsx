import React , {useState} from 'react'
import Breadcrumb from '../components/Breadcrumbs/Breadcrumbs';
import { Title } from '../components/Title/Title';
import { Container, Box, Grid, Typography , useMediaQuery, Tab, Tabs , Button , Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate , Link , Outlet } from "react-router-dom";
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

export const ProfileLayout = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();
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
    const getSelectedTabLabel = () => {
        return tabs[selectedTab].label;
    };
    const breadcrumbItems = [
            <Typography key="2">
                User Profile
            </Typography>,
            getSelectedTabLabel() === 'Personal Information' ? '' : <Typography underline="hover" key="3">{getSelectedTabLabel()}</Typography>
    ];
    const handleLogoutClick = () => {
        const sortedtoken = localStorage.getItem('token');
        if (sortedtoken) {
            localStorage.removeItem('token');
        }
        else {
            sessionStorage.removeItem('token');
        }
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
                    <Typography variant="h5" gutterBottom>{getSelectedTabLabel()}</Typography>
                    <Divider />
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
}