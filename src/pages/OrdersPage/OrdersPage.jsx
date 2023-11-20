import React from "react";
import FullWidthTabs from "./partials/TabPanel";
import { useDataActions } from "../../hooks/useDataActions";

export const OrdersPage = () => {
  const completedOrders = [];
  const processingOrders = [];
  const { useMyOrders } = useDataActions();
  const {
    data: orders,
    isLoading: isLoadingOrders,
    isError: isErrorOrders,
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
    <FullWidthTabs
      completedOrders={completedOrders}
      processingOrders={processingOrders}
    />
  );
};
