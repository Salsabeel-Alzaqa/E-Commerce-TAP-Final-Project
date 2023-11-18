import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from "react-router-dom";
export const UserItems = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  const handleLogoutClick = () => {
    const sortedtoken = localStorage.getItem('token');
    if (sortedtoken) {
      localStorage.removeItem('token');
    }
    else {
      sessionStorage.removeItem('token');
    }
    navigate("/login");
  };
  return (
    <List>
      {token ? (<>  <ListItem button>
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