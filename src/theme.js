import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1B4B66",
    },
    secondary: {
      main: "#F1F1F1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          width: '42px', 
          height:'28px',
          borderRadius: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          cursor: "pointer",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          "@media (max-width: 1280px)": {
            fontSize: "2.4rem",
          },
          "@media (max-width: 680px)": {
            fontSize: "1.25rem",
          },
          "@media (max-width: 400px)": {
            fontSize: "1rem",
          },
        },
        h4: {
          "@media (max-width: 1280px)": {
            fontSize: "1.7rem",
          },
          "@media (max-width: 680px)": {
            fontSize: "0.9rem",
          },
          "@media (max-width: 400px)": {
            fontSize: "0.7rem",
          },
        },
        h3: {
          fontSize: "34px",
          fontWeight: "600",
          lineHeight: "44px",
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: "#FF8C4B",
        },
        iconHover: {
          color: "#FF8C4B",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#F1F1F1",
          borderRadius: "4px",
        },
      },
    },
    // MuiLink: {
    //   styleOverrides: {
    //     root: {
    //       "& a": {
    //         textDecoration: "none",
    //       },
    //     },
    //   },
    // },

    // Add more components with custom style here
  },
});
export default theme;
