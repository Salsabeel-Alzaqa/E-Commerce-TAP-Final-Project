import React from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate , useLocation } from 'react-router-dom';
import { useQueryParam } from '../../hooks/useQueryParam';

export const SearchBox = () => {
    const [query, setQuery] = useQueryParam('search', '');
    let location = useLocation().search;
    const navigate = useNavigate();
    const handleSearch = () => {
        const brandParams = new URLSearchParams(location);
        const brandValue = brandParams.get('brand') || '';
        navigate(`/search?search=${query}&brand=${brandValue}`);
    };
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <>
            <InputBase
                fullWidth
                size="medium"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
            />
        </>
    );
};