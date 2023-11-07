import { useQuery } from 'react-query';
import apiClient from '../api/axios';
export function useDataActions() {
  function useProducts(filters) {
    return useQuery({
      queryKey: ['product','list',filters],
      queryFn: async () => await apiClient.get(`/v1/products?${filters.categoryValue ? `&category=${filters.categoryValue}` : ''}${filters.brandValue ? `&brand=${filters.brandValue}` : ''}${filters.searchValue ? `&search_term=${filters.searchValue}` : ''}${filters.newArrival === true ? `new_arrival=true` : ''}&&page=${filters.currentPage}`).then((res) => res.data),
      staleTime: 6000,
    });
  }
  return { useProducts };
}