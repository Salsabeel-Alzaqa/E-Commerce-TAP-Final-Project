import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MoreIcon from "@mui/icons-material/MoreVert";
import { pages } from "../../assets/data/pages";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { SearchBox } from "../SearchBox/SearchBox";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [input, setInput] = useState("");
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();
  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleCartClick = () => {
    navigate(`/cartpage`);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleClearSearchAndNavigate = (page) => {
    setInput("");
    navigate(`/listing?&category=${page}`);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Favourites</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <PersonOutlineIcon />
          </Badge>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LocalMallIcon />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary",
              }}
            >
              <StyledLink
                to={{
                  pathname: `/`,
                }}
                onClick={() => setInput("")}
              >
                <Logo />
              </StyledLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon color="primary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((category, index) => (
                  <Box
                    key={index}
                    onClick={() => handleClearSearchAndNavigate(category)}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography color="black" textAlign="center">
                        {category}
                      </Typography>
                    </MenuItem>
                  </Box>
                ))}
              </Menu>
            </Box>
            <Typography
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary",
                textDecoration: "none",
              }}
            >
              <StyledLink
                to={{
                  pathname: `/`,
                }}
                onClick={() => setInput("")}
              >
                <Logo />
              </StyledLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((category, index) => (
                <Box
                  key={index}
                  onClick={() => handleClearSearchAndNavigate(category)}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      textTransform: "none",
                      display: "block",
                    }}
                  >
                    {category}
                  </Button>
                </Box>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <SearchBox input={input} onInputChange={handleInputChange} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="black"
              >
                <Badge badgeContent={4} color="error">
                  <FavoriteBorderIcon color="primary" />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={17} color="error">
                  <PersonOutlineIcon color="primary" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleCartClick}
              >
                <LocalMallIcon color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="black"
              >
                <MoreIcon color="primary" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};
