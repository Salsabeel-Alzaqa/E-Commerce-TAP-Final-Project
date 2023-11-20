import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import { Stack, useTheme } from "@mui/material";

export const ProductCartCard = (props) => {
  const theme = useTheme();
  const handleQuantityChange = (newQuantity) => {
    props.setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === props.item.id
          ? {
              ...item,
              quantity: newQuantity,
              subtotal: item.sub_total * newQuantity,
            }
          : item
      )
    );
  };

  return (
    <Card
      variant="none"
      sx={{
        display: "flex",
        maxWidth: 500,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      <CardMedia
        sx={{
          maxWidth: 150,
          borderRadius: "5px",
          [theme.breakpoints.down("sm")]: {
            maxWidth: "80px",
            height: "60px",
          },
        }}
        component="img"
        alt={props.item.name}
        height="120"
        image={props.item.image}
      />
      <CardContent
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          [theme.breakpoints.down("sm")]: {
            paddingX: "0",
          },
        }}
      >
        <Typography
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }}
          component="div"
        >
          {props.item.name}
        </Typography>
        <Typography
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }}
          color="text.secondary"
        >
          {props.item.sub_title}
        </Typography>
        <Stack
          direction="row"
          sx={{
            marginTop: 1,
            width: "73px",
            height: "30px",
          }}
        >
          {props.inMyCart ? (
            props.orderpage ? null
              :<QuantityButton
                value={props.item.quantity}
                onChange={handleQuantityChange}
              />
          ) : (
            <Typography>Qy- {props.item.quantity}</Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
