import React from "react";
import { Grid, Paper, Box, Button, Container, useTheme } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Loading } from '../Loading/Loading';
import { Title } from '../Title/Title';
import { useDataActions } from '../../hooks/useDataActions';
import { useNavigate } from 'react-router-dom';

export const NewArrivals = () => {
  const navigate = useNavigate();
  const { useNewArrivalsProducts } = useDataActions();
  const { data: products, isLoading, isError } = useNewArrivalsProducts()
  const theme = useTheme();
  if (isError) return <p>Error ...</p>;
  return (
    <Container maxWidth="xl">
      <Paper variant="none">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Title text={'New Arrivals'} />
          <Box>
            <Button
              variant="none"
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => navigate(`/listing?&new_arrival=true`)}
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: theme.palette.primary.main,
              }}
            >
              View All
            </Button>
          </Box>
        </Box>
        {isLoading ? (<Box mb={2}><Loading num={4} /></Box>) :
          (<Grid container spacing={3}>
            {products.results?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ProductCard {...item} lessInfo={true} />
              </Grid>
            ))}
          </Grid>)
        }
      </Paper>
    </Container>
  );
};