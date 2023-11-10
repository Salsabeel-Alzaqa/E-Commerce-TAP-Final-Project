import { useLocation , useNavigate } from 'react-router-dom';

export function useSearchParam(paramValue) {
    let location = useLocation().search;
    const navigate = useNavigate();
    const handleMoveToListingPage = () => {
        const searchParams = new URLSearchParams(location);
        let searchValue = paramValue;
        let categoryValue = searchParams.get('category') || '';
        let brandValue = searchParams.get('brand') || '';
        let arrivalValue = searchParams.get('newArrival') || false;
        let handpickedValue = searchParams.get('handpicked') || false;
        const result = `${searchValue ? `search=${searchValue}` : ''}${brandValue ? `&brand=${brandValue}` : ''}${categoryValue ? `&category=${categoryValue}` : ''}${arrivalValue === true ? `&newArrival=true` : ''}${handpickedValue === true ? `&handpicked=true` : ''}`;
        navigate(`/listing?${result}`);
    }
    return { handleMoveToListingPage };
}