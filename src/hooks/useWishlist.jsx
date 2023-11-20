import React,{useState,useEffect} from 'react'
import { useDataActions } from './useDataActions';
export const useWishlist = (id) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { useWishlistProducts, useAddWishlistProduct } = useDataActions();
    const { mutateAsync: AddWishlistProductMutation, isLoading: isAddWishlistProductLoading } = useAddWishlistProduct(id);
    const { data: wishlist, isLoading: isWishlistLoading , isError , refetch } = useWishlistProducts();
    useEffect(() => {
        if (wishlist && wishlist.products !== null) {
            setIsInWishlist(wishlist.products?.some(item => item.id === id));
        }
    }, [wishlist, id]);

    const AddToWishlist = async () => {
        try {
            await AddWishlistProductMutation();
            refetch();
            setIsInWishlist(true);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }
    if (isError) return <p>Error ...</p>;
    return {isInWishlist , AddToWishlist , isAddWishlistProductLoading , isWishlistLoading }
}