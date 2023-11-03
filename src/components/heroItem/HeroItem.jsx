import { Container, Button, Paper, Typography, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/system'; 

const StyledBox = styled(Box)(({
  position: 'relative',
}));

const StyledPaper = styled(Paper)(({
  position: 'absolute',
  top: '7%',
  right: 0,
  width: '55%',
  height: '75%',
  padding: '16px',
  backgroundColor: 'rgba(222, 222, 222, 0.7)',
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  width: '80%',
  paddingBottom: '30px',
  paddingLeft: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingBottom: '10px',
    paddingLeft: '1px',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  padding: '20px',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    padding: '1px',
  },
}));

function HeroItem({ image, subtitle, title, category }) {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:700px)');
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