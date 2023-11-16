import { useMutation, useQuery, QueryClient } from "react-query";
import apiClient from "../api/axios";
export function useDataActions() {
  const queryClient = new QueryClient();
  function useProducts(filters) {
    return useQuery({
      queryKey: ["product", "list", filters],
      queryFn: async () =>
        await apiClient
          .get(
            `/v1/products?${
              filters.categoryValue ? `&category=${filters.categoryValue}` : ""
            }${filters.brandValue ? `&brand=${filters.brandValue}` : ""}${
              filters.searchValue ? `&search_term=${filters.searchValue}` : ""
            }${filters.arrivalValue === true ? `&new_arrival=true` : ""}${
              filters.handpickedValue === true ? `&handpicked=true` : ""
            }&&page=${filters.currentPage}`
          )
          .then((res) => res.data),
      staleTime: Infinity,
    });
  }
  function useProductDetails(id, filter) {
    return useQuery({
      queryKey: ["product", "get", id, filter],
      queryFn: async () =>
        await apiClient
          .get(`/v1/products/${id}/${filter}`)
          .then((res) => res.data),
      staleTime: 600000,
    });
  }
  function useNewArrivalsProducts() {
    return useQuery({
      queryKey: ["arrivalproduct", "list"],
      queryFn: async () =>
        await apiClient
          .get("/v1/products?new_arrival=true&page=1&per_page=4")
          .then((res) => res.data),
      staleTime: Infinity,
    });
  }
  function useCartProducts() {
    return useQuery({
      queryKey: ["cart", "list"],
      queryFn: async () =>
        await apiClient.get("v1/orders/in_progress").then((res) => res.data),
      staleTime: 100,
    });
  }

  function useCreateAddress() {
    return useMutation({
      mutationFn: async (data) => await apiClient.post(`v1/addresses`, data),
      staleTime: Infinity,
    });
  }

  function useCartItems() {
    return useQuery({
      queryKey: ["cartData", "list"],
      queryFn: async () =>
        await apiClient
          .get("v1/orders/in_progress")
          .then((res) => res?.data?.data),
      staleTime: Infinity,
    });
  }

  function useCartOrderDetails(orderID) {
    return useQuery({
      queryKey: ["orderDetails", orderID],
      queryFn: async () =>
        await apiClient
          .get(`v1/orders/${orderID}/orderitems`)
          .then((res) => res.data),
      staleTime: Infinity,
    });
  }

  function useUpdateCartItems(orderID) {
    console.log("ORDERIDDD", orderID);
    return useMutation({
      mutationFn: async (data) =>
        await apiClient.put(`v1/orders/${data.orderID}`, data.data),
      staleTime: Infinity,
    });
  }

  function useRemoveCartItem(props) {
    return useMutation({
      mutationFn: async (orderItemId) =>
        await apiClient.delete(`orders/order_items/${orderItemId}`),
      onSuccess: (data, itemId) => {
        props.setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item.id !== itemId)
        );
        queryClient.invalidateQueries(["cartData", "list"]);
      },
      staleTime: Infinity,
    });
  }

  const useAddToCart = (id, quantity) => {
    return useMutation({
      mutationFn: async () =>
        await apiClient
          .post(`v1/products/${id}/add_to_cart`, {
            orderItemQuantity: quantity,
          })
          .then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries(["cart", "list"]);
      },
    });
  };
  return {
    useProducts,
    useNewArrivalsProducts,
    useProductDetails,
    useAddToCart,
    useCartProducts,
    useCreateAddress,
    useCartItems,
    useRemoveCartItem,
    useCartOrderDetails,
    useUpdateCartItems,
  };
}
