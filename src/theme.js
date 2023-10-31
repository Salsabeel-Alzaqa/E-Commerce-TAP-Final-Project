import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1B4B66',
        },
        secondary: {
            main: '#F1F1F1',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h2: {
                    '@media (max-width: 600px)': {
                        fontSize: '1.5rem',
                    },
                },
                h4: {
                    '@media (max-width: 600px)': {
                        fontSize: '1.25rem',
                    },
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: '#FF8C4B', 
                },
                iconHover: {
                    color: '#FF8C4B',                                       
                },
            },
        },
        // Add more components with custom style here
    },
});
export default theme;