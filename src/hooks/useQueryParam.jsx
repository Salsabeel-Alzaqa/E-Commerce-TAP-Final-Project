import { useLocation , useNavigate } from 'react-router-dom';

export function useQueryParam(paramName) {
    let location = useLocation().search;
    const navigate = useNavigate();
    const handleMoveToListingPage = (paramValue) => {
        const searchParams = new URLSearchParams(location);
        let searchValue;
        let categoryValue;
        let brandValue;
        let arrivalValue;

        if (paramName === 'search') {
            searchValue = paramValue;
            categoryValue = searchParams.get('category') || '';
            brandValue = searchParams.get('brand') || '';
            arrivalValue = searchParams.get('newArrival') || false;
        }
        else if (paramName === 'category')
        {
            searchValue = searchParams.get('search') || '';;
            categoryValue = paramValue;
            brandValue = searchParams.get('brand') || '';
            arrivalValue = searchParams.get('newArrival') || false;
        }
        else if (paramName === 'brand')
        {
            searchValue = searchParams.get('search') || '';;
            categoryValue = searchParams.get('category') || '';
            brandValue = paramValue;
            arrivalValue = searchParams.get('newArrival') || false;
        }
        else if (paramName === 'newArrival')
        {
            searchValue = searchParams.get('search') || '';;
            categoryValue = searchParams.get('category') || '';
            brandValue = searchParams.get('brand') || '';
            arrivalValue = paramValue;
        }
    const result = `${searchValue ? `search=${searchValue}` : ''}${brandValue ? `&brand=${brandValue}` : ''}${categoryValue ? `&category=${categoryValue}` : ''}${arrivalValue === true ? `&newArrival=true` : ''}`;
    navigate(`/listing?${result}`);
  };
    return { handleMoveToListingPage };
}