import React , {useState} from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useQueryParam } from '../../hooks/useQueryParam';

export const SearchBox = () => {
    const [input, setInput] = useState('');
    const {handleMoveToListingPage} = useQueryParam('search');
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (input === '') return;
            handleMoveToListingPage(input);
        }
    };
    return (
        <>
            <InputBase
                fullWidth
                size="medium"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton onClick={() => { if (input === '') return; handleMoveToListingPage(input); } }>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
            />
        </>
    );
};