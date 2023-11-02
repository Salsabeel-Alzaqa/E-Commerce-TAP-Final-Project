import React  from 'react'
import { useLocation } from 'react-router-dom';

export const Listing = () => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const searchValue = searchParams.get('search') || '';
    const brandValue = searchParams.get('brand') || '';

    return (
        <>
            <div>
                Listing Page :
            </div>
            {searchValue ? <p>search value : {searchValue}</p> : <></>}
            {brandValue ? <p>brand value : {brandValue}</p> : <></>}
        </>
    );
}