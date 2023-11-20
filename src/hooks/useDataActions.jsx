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
            `/v1/products${filters.searchFilter}&&page=${filters.currentPage}`
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
      staleTime: Infinity,
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
      queryKey: ["cart", "list"],
      queryFn: async () =>
        await apiClient.get("v1/orders/in_progress").then((res) => res?.data),
      staleTime: 100,
    });
  }

  function useCartOrderDetails(orderID) {
    return useQuery({
      queryKey: ["orderDetails","get", orderID],
      queryFn: async () =>
        await apiClient
          .get(`v1/orders/${orderID}/orderitems`)
          .then((res) => res.data),
      staleTime: 100,
    });
  }

  function useUpdateCartItems(orderID) {
    return useMutation({
      mutationFn: async (data) =>
        await apiClient.put(`v1/orders/${data.orderID}`, data.data),
    });
  }

  function useRemoveCartItem() {
    return useMutation({
      mutationFn: async (id) =>
        await apiClient
          .delete(`v1/orders/order_items/${id}`)
          .then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries(["cart", "list"]);
      },
    });
  }

  const useAddToCart = (id) => {
    return useMutation({
      mutationFn: async (quantity) =>
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

  function usePersonalInfo() {
    return useQuery({
      queryKey: ["personalInfo", "list"],
      queryFn: async () =>
        await apiClient.get("/v1/users/me").then((res) => res.data),
      staleTime: Infinity,
    });
  }

  const useUpdateUserInfo = () => {
    return useMutation({
      mutationFn: async (newInfo) =>
        await apiClient.put("v1/users", newInfo).then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries(["personalInfo", "list"]);
      },
    });
  };

  const useUpdateUserPassword = () => {
    return useMutation({
      mutationFn: async (passwords) =>
        await apiClient
          .post("v1/users/me/change_password", passwords)
          .then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries(["personalInfo", "list"]);
      },
    });
  };

  const useWishlistProducts = () => {
    return useQuery({
      queryKey: ["wishlistproduct", "list"],
      queryFn: async () =>
        await apiClient.get("v1/wishlist").then((res) => res.data),
      staleTime: Infinity,
    });
  };

  const useAddWishlistProduct = (productId) => {
    return useMutation({
      mutationFn: async () =>
        await apiClient
          .post(`v1/wishlist/${productId}/add_to_wishlist`)
          .then((res) => res?.data),
      onSuccess: () => {
        queryClient.invalidateQueries(["wishlistproduct", "list"]);
      },
    });
  };

  function useMyOrders() {
    return useQuery({
      queryKey: ["orders", "list"],
      queryFn: async () =>
        await apiClient.get("v1/orders").then((res) => res?.data),
    });
  }
  
  return {
    useProducts,
    useNewArrivalsProducts,
    useProductDetails,
    useAddToCart,
    useCreateAddress,
    useCartItems,
    useRemoveCartItem,
    useCartOrderDetails,
    useUpdateCartItems,
    usePersonalInfo,
    useUpdateUserInfo,
    useUpdateUserPassword,
    useWishlistProducts,
    useAddWishlistProduct,
    useMyOrders,
  };
}
