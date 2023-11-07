import React , {useState} from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { useNavigate , useLocation } from 'react-router-dom';
import { useQueryParam } from '../../hooks/useQueryParam';

export const SearchBox = () => {
    const [input, setInput] = useState('');
    const {handleMoveToListingPage} = useQueryParam('search');
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
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
                        <IconButton onClick={() => handleMoveToListingPage(input)}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
            />
        </>
    );
};