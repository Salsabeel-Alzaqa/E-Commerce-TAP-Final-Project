import React from "react";
import Breadcrumb ,{StyledLink} from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from 'react-router-dom';
import { useDataActions } from '../../hooks/useDataActions';
import { Container , Typography , Grid , Box , Skeleton , Tabs ,Tab} from "@mui/material";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { ProductDescription } from "./partials/ProductDescription";
import { ProductReviews } from "./partials/ProductReviews";
import { RelatedProducts } from "./partials/RelatedProducts";
import { ProductImagesGalary } from "../../components/ProductImagesGalary/ProductImagesGalary";
import { TabPanel } from "../../components/TabPanel/TabPanel";
const getCategoryName = (categoryID) => {
  const categoryNames = {
    1: 'Personal Care',
    2: 'Handbags',
    3: 'Watches',
    4: 'Eye Wear',
    5: 'Apparels',
    6: 'Jewellery',
    7: 'SkinCare'
  };
  return categoryNames[categoryID];
};
export const ProductPage = () => {
  const { id } = useParams();
  const { useProductDetails } = useDataActions();
  const { data: product, isLoading, isError } = useProductDetails(id,'');
  let TabsItems;
  let breadcrumbItems;
  if (isError) return <p>Error ...</p>;
  if (product) {
    TabsItems = [
      {
        'label': 'Product Description',
        'content': <ProductDescription description={product.description} />
      },
      {
        'label': 'Related Products',
        'content': <RelatedProducts />
      },
      {
        'label': 'Ratings and Reviews',
        'content': <ProductReviews productDescription={product.short_description} productName={product.name} productRating={product.rate} />
      }
    ];
    breadcrumbItems = [
      <StyledLink key="2" href={`/listing?&category=${getCategoryName(product.categoryID)}`}>
        {getCategoryName(product.categoryID)}
      </StyledLink>,
      <Typography underline="hover" key="3">
        {product.name}
      </Typography>
    ];
  }
  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Breadcrumb items={breadcrumbItems} />
      </Box>
      <Grid container spacing={2} mt={0.5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {isLoading ? (<Skeleton variant="rectangular" width={'100%'} height={412} />) :
            (<ProductImagesGalary images={product.image_url} />)}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {
            isLoading ? (Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} mb={4}>
                <Skeleton animation="wave" width={'100%'} height={'40px'} /></Box>)))
              : (<ProductInfo {...product} />)
          }
        </Grid>
      </Grid>
      {isLoading ? (<></>)
        : (<Box my={4}>
          <TabPanel TabsItems={TabsItems} />
        </Box>)
      }
    </Container>
  );
}