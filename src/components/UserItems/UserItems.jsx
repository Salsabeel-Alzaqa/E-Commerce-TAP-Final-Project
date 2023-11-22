import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { logOut , getToken } from '../../utils/userutils';
export const UserItems = () => {
  const navigate = useNavigate();
  const token = getToken();
  const handleLogoutClick = () => {
    logOut();
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