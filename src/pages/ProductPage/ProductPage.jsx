import React , {useState} from "react";
import Breadcrumb ,{StyledLink} from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from 'react-router-dom';
import { useDataActions } from '../../hooks/useDataActions';
import { Container , Typography , Grid , Box , Skeleton , Tabs ,Tab} from "@mui/material";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { ProductDescription } from "./partials/ProductDescription";
import { ProductReviews } from "./partials/ProductReviews";
import { RelatedProducts } from "./partials/RelatedProducts";

export const ProductPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { id } = useParams();
  const { useProductDetails } = useDataActions();
  const { data: product, isLoading, isError } = useProductDetails(id,'');
  let TabsItems;
  let breadcrumbItems;
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  if (isError) return <p>Error ...</p>;
  if (product) {
    TabsItems = [
      {
        'label': 'Product Description',
        'content': <ProductDescription description={product.product.description} />
      },
      {
        'label': 'Related Products',
        'content': <RelatedProducts />
      },
      {
        'label': 'Ratings and Reviews',
        'content': <ProductReviews productDescription={product.product.short_description} productName={product.product.name} productRating={product.product.rate} />
      }
    ];
    breadcrumbItems = [
      <StyledLink key="2">
        Handbags
      </StyledLink>,
      <Typography underline="hover" key="3">
        {product.product.name}
      </Typography>
    ];
  }
  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Breadcrumb items={breadcrumbItems} />
      </Box>
      <Grid container spacing={1} mt={0.5}>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          {isLoading ? (<Skeleton variant="rectangular" width={'100%'} height={412} />) :
            (<>{/* farah you can add your carousel here */}</>)}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          {
            isLoading ? (Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} mb={4}>
                <Skeleton animation="wave" width={'100%'} height={'40px'} /></Box>)))
              : (<ProductInfo {...product.product} />)
          }
        </Grid>
      </Grid>
      {isLoading ? (<></>)
        : (<Box my={3}>
          <Tabs value={selectedTab} onChange={handleTabChange} TabIndicatorProps={{ style: { display: "none" } }}>
            {TabsItems.map((tab, index) => (
              <Tab label={tab.label} key={index} />))}
          </Tabs>
          {TabsItems.map((tab, index) => (
            selectedTab === index && (
              <Box key={index} mt={3}>
                {tab.content}
              </Box>)))}
        </Box>)
      }
    </Container>
  );
}