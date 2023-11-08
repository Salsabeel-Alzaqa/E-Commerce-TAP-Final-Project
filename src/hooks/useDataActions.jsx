import { useQuery } from 'react-query';
import apiClient from '../api/axios';
export function useDataActions() {
  function useProducts(filters) {
    return useQuery({
      queryKey: ['product','list',filters],
      queryFn: async () => await apiClient.get(`/v1/products?${filters.categoryValue ? `&category=${filters.categoryValue}` : ''}${filters.brandValue ? `&brand=${filters.brandValue}` : ''}${filters.searchValue ? `&search_term=${filters.searchValue}` : ''}${filters.newArrival === true ? `new_arrival=true` : ''}&&page=${filters.currentPage}`).then((res) => res.data),
      staleTime: Infinity,
    });
  }
  function useProductDetails(id) {
    return useQuery({
      queryKey: ['product','get',id],
      queryFn: async () => await apiClient.get(`/v1/products/${id}`).then((res) => res.data),
      staleTime: 600000,
    });
  }
   function useNewArrivalsProducts() {
    return useQuery({
      queryKey: ['arrivalproduct','list'],
      queryFn: async () => await apiClient.get('/v1/products?new_arrival=true&page=1&per_page=4').then((res) => res.data),
      staleTime: Infinity,
    });
  }
  return { useProducts , useNewArrivalsProducts , useProductDetails  }
}