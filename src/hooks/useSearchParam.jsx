import { useLocation , useNavigate } from 'react-router-dom';

export function useSearchParam(searchValue) {
    let location = useLocation().search;
    const navigate = useNavigate();
    const handleMoveToListingPage = () => {
        const searchParams = new URLSearchParams(location);
        let categoryValue = searchParams.get('category') || '';
        let brandValue = searchParams.get('brand') || '';
        let arrivalValue = searchParams.get('new_arrival') || false;
        let handpickedValue = searchParams.get('handpicked') || false;
        const result = `${searchValue ? `search_term=${searchValue}` : ''}${brandValue ? `&brand=${brandValue}` : ''}${categoryValue ? `&category=${categoryValue}` : ''}${arrivalValue === true ? `&new_arrival=true` : ''}${handpickedValue === true ? `&handpicked=true` : ''}`;
        navigate(`/listing?${result}`);
    }
    return { handleMoveToListingPage };
}