import React from "react";
import FullWidthTabs from "./partials/TabPanel";
import { useDataActions } from "../../hooks/useDataActions";
import { Container , Box , Typography} from "@mui/material";
import { SideNav } from '../../components/SideNav/SideNav';
import { Title } from '../../components/Title/Title';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
const breadcrumbItems = [
            <Typography key="2">
                User Profile
            </Typography>,
            <Typography underline="hover" key="3">My Orders</Typography>
    ];
export const OrdersPage = () => {
  const completedOrders = [];
  const processingOrders = [];
  const { useMyOrders } = useDataActions();
  const {
    data: orders,
  } = useMyOrders();
  if (orders?.data) {
    orders.data.forEach((order) => {
      if (order.status === "paid") {
        completedOrders.push(order);
      } else if (order.status === "placed") {
        processingOrders.push(order);
      }
    });
  }

  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Breadcrumb items={breadcrumbItems} />
        <Title text={'My Orders'} color={'primary'} />
      </Box>
      <SideNav selectedItem={1}>
        <FullWidthTabs
          completedOrders={completedOrders}
          processingOrders={processingOrders}
        />
      </SideNav>
    </Container>
  )
};
