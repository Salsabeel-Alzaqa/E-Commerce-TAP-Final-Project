import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroItem from '../../components/HeroItem/HeroItem';
import { Container , Box , Grid} from '@mui/material';
import heroImage from '../../assets/images/listingHero.png';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import { Title } from '../../components/Title/Title';
import { Loading } from '../../components/Loading/Loading';
import { useDataActions } from '../../hooks/useDataActions';
import { ProductCard } from "../../components/ProductCard/ProductCard";
import Client from '../../api/axios';
export const Listing = () => {
    const { useCustomQuery } = useDataActions();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const searchValue = searchParams.get('search') || '';
    const brandValue = searchParams.get('brand') || '';
    const categoryValue = searchParams.get('category') || '';
    const { data: products, isLoading, isError } = useCustomQuery(
        'products',
    () => Client.get(`/v1/products?search_term=${searchValue}&page=1&per_page=12`).then((res) => res.data),
    { enabled: true }
    );
    if (isError) return <p>Error ...</p>;
    // console.log(products);
    return (
        <>
            <HeroItem image={heroImage} />
            <Container maxWidth='xl'>
                <Box mt={5}>
                    <Breadcrumb />
                    <Title text={categoryValue ? categoryValue : brandValue ? brandValue : searchValue} color={'primary'} />
                </Box>
                {isLoading ? <Loading num={12} /> :
                    (<Grid container spacing={3}>
                        {products.results?.map((product, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <ProductCard {...product} />
                            </Grid>
                        ))}
                    </Grid>
                    )
                }
            </Container>
        </>
    );
}