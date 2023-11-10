import React from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParam } from '../../hooks/useSearchParam';

export const SearchBox = ({ input, onInputChange }) => {
    const { handleMoveToListingPage } = useSearchParam(input);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (input === '') return;
            handleMoveToListingPage();
        }
    };
    return (
        <>
            <InputBase
                fullWidth
                size="medium"
                value={input}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton onClick={() => { if (input === '') return; handleMoveToListingPage(); }}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
            />
        </>
    );
};