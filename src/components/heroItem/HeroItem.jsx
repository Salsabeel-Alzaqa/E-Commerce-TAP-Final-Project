import { Container, Button, Paper, Typography, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system'; 

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '7%',
  right: 0,
  width: '55%',
  height: '65%',
  padding: '16px',
  backgroundColor: 'rgba(222, 222, 222, 0.7)',
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  width: '80%',
  paddingBottom: '30px',
  paddingLeft: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingBottom: '1px',
    paddingLeft: '1px',
    fontSize: '1.25rem',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  padding: '20px',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    padding: '1px',
    fontSize: '1.5rem',
  },
}));

function HeroItem({ image, subtitle, title, category }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    navigate(`/category/${category}`);
  };

  return (
    <Container maxWidth="xl">
      <StyledBox>
        <img src={image} alt="hero img" style={{ width: '100%' }} />
        {subtitle && (
          <StyledPaper>
            <StyledTitle variant="h2" color="primary">
              {title}
            </StyledTitle>
            <StyledSubtitle variant="h4" color="primary">
              {subtitle}
            </StyledSubtitle>
            {isSmallScreen ? (
              <></>
            ) : (
              <Box pl={2}>
                <Button variant="contained" color="primary" onClick={handleClick}>
                  <ArrowRightAltIcon />
                  See More
                </Button>
              </Box>
            )}
          </StyledPaper>
        )}
      </StyledBox>
    </Container>
  );
}

export default HeroItem;