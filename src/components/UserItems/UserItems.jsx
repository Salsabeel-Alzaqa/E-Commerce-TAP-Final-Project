import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from "react-router-dom";

export const UserItems = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <List>
      {isAuthenticated ? (<>  <ListItem button>
        <ListItemText primary="Profile" onClick={()=>navigate("/profile")}/>
      </ListItem>
        <ListItem button onClick={handleLogoutClick}>
          <ListItemText primary="Log out" />
        </ListItem></>)
        : (<ListItem button onClick={()=>navigate("/login")}>
          <ListItemText primary="LogIn" />
        </ListItem>)}
    </List>
  );
}