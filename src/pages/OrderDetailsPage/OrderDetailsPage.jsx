import React from 'react'
import { TabPanel } from '../../components/TabPanel/TabPanel';
import { Typography, Container, Box } from '@mui/material';
import { ItemsOrdered } from './partials/ItemsOrdered';
import { useParams } from 'react-router-dom';
import { SideNav } from '../../components/SideNav/SideNav';
import { Title } from '../../components/Title/Title';
import  Breadcrumb  from '../../components/Breadcrumbs/Breadcrumbs';
export const OrderDetailsPage = () => { 
  let { orderID } = useParams();
  const breadcrumbItems = [
    <Typography key="2">
      User Profile
    </Typography>,
    <Typography key="3">My Orders</Typography>,
    <Typography underline="hover" key="4">Order#{orderID}</Typography>
  ];
  const TabsItems = [
      {
        'label': 'Items Ordered',
      'content': <ItemsOrdered orderID={orderID} />
      },
      {
        'label': 'Invoices',
        'content': <>nothing to show </>
      },
      {
        'label': 'Order Shipment',
        'content': <>nothing to show</>
      }
    ];
  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Breadcrumb items={breadcrumbItems} />
        <Title text={`Order#${orderID}`} color={'primary'} />
      </Box>
      <SideNav selectedItem={1}>
        <TabPanel TabsItems={TabsItems} />
      </SideNav>
    </Container>
  )
}