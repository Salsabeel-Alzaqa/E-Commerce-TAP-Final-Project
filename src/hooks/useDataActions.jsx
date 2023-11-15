import { useMutation, useQuery, useQueryClient } from "react-query";
import apiClient from "../api/axios";
export function useDataActions() {
  const queryClient = useQueryClient();
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
        await apiClient.get("v1/orders/in_progress").then((res) => res.data),
      staleTime: Infinity,
    });
  }

  function useCartOrderDetails() {
    return useQuery({
      queryKey: ["orderDetails", "orderId"],
      queryFn: async (orderId) =>
        await apiClient
          .get(`v1/orders/${orderId}/orderitems`)
          .then((res) => res.data),
      staleTime: Infinity,
    });
  }

  function useUpdateCartItems(orderId) {
    return useMutation({
      mutationFn: async (data) =>
        await apiClient.put(`v1/orders/${orderId}`, data),
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

  return {
    useProducts,
    useNewArrivalsProducts,
    useProductDetails,
    useCreateAddress,
    useCartItems,
    useUpdateCartItems,
    useRemoveCartItem,
    useCartOrderDetails,
  };
}
