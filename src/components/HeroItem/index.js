import { Container,Button, Paper, Typography, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material'; 
function HeroItem({ image, subtitle, title, category }) {
    // const navigate = useNavigate();
    const containerStyle = {
      position: 'relative',
  };
  const boxStyle = {
    position: 'absolute',
    top: '15px',
    right: 0,
    width: '55%',
    height: '70%',
    padding: '16px',
    opacity:0.7,
  };
  const theme = useTheme(); 
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const titleFontSize = isSmallScreen ? 'h6' : 'h2';
    const subtitleFontSize = isSmallScreen ? 'subtitle1' : 'h4';
    const subtitleDynamicStyles = {
        width:isSmallScreen ? '100%' : '80%',
        paddingBottom: isSmallScreen ? '1px' : '40px', 
    };
    const titleDynamicStyles = {
        paddingBottom: isSmallScreen ? '1px' : '40px', 
    };
  const handleClick = () => {
    // navigate(`/${category}`); 
  };
  return (
    <Container maxWidth="xl">
      <Box style={containerStyle}>
        <img src={image} alt='hero img' style={{ width: '100%' }} />
        <Paper style={boxStyle}>
          <Typography variant={titleFontSize} sx={titleDynamicStyles}>{title}</Typography>
          <Typography variant={subtitleFontSize} sx={subtitleDynamicStyles}>{subtitle}</Typography>
          <Button variant="contained" size={isSmallScreen ? 'small' : 'medium'} onClick={handleClick}><ArrowRightAltIcon />See More</Button>
        </Paper>
      </Box>
    </Container>
  );
};
export default HeroItem;