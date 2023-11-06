import React, {useEffect,useState} from "react";
import { Box, Button, Rating,Typography,CardContent,CardMedia,Card,Stack} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { ProductPrice } from "../ProductPrice/ProductPrice";
import ProductDefault from "../../assets/images/ProductDefault.jpg";
const StyledCardMedia = styled(CardMedia)(({ 
  height: 300,
  borderRadius: "8px",
  position: "relative",
  "&:hover": {
    "& .overlay": {
      display: "flex",
    },
  },
}));

const Overlay = styled("div")(({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
}));

const ButtonStyled = styled(Button)(({ 
  color: "#fff",
  backgroundColor: "black",
  padding: "10px 20px",
  borderRadius: "4px",
}));

export const ProductCard = ({name_product,id_product,short_description,price,image_url,newArrival,rate,discount,rateCount}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const loadImage = async (imageName) => {
    try {
      let cardImage = await import(`../../assets/images/${imageName}`);
      setImage(cardImage.default);
    } catch {
      setImage(ProductDefault);
    }
  };
  useEffect(() => {
    loadImage(image_url);
  }, [image_url]);
  const handleProduct = () => {
    navigate(`/product/${id_product}`);
  }
  return (
    <Card sx={{ maxWidth: '100%', boxShadow: "none" }}>
      <StyledCardMedia image={image} title={name_product}>
        <Overlay className="overlay">
          <ButtonStyled variant="contained" onClick={handleProduct}>
            See Product
          </ButtonStyled>
        </Overlay>
      </StyledCardMedia>
      <CardContent sx={{ px: 0 }}>
        <Box sx={{ display: "flex",justifyContent: "space-between",alignItems: "center",}}>
          <Typography gutterBottom variant="none" component="div" sx={{fontSize: "16px",fontWeight: "500",}}>
            {name_product}
          </Typography>
          <FavoriteBorderIcon sx={{ fontSize: 25, color: "primary" }} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: "14px",mb: "5px"}}>
          {short_description}
        </Typography>
        {newArrival ? null : <Stack direction="row" spacing={2}>
          <Rating name="text-feedback" value={rate} readOnly precision={0.5} />
          <Typography variant="caption" color="primary">{rateCount} Ratings</Typography>
        </Stack>}
        {newArrival ? <ProductPrice price={price} size={"16px"} /> : <ProductPrice price={price}  size={"16px"} discount={discount}/>}
      </CardContent>
    </Card>
  );
};