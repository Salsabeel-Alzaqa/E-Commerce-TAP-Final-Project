import React from 'react'
import { Container, Box, Grid, Typography, useMediaQuery, Tab, Tabs, Button, Avatar } from '@mui/material';
import { useDataActions } from '../../hooks/useDataActions';
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: 'black',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
export const PersonalInfoPage = () => {
    const { usePersonalInfo } = useDataActions();
    const { data: info, isLoading, isError } = usePersonalInfo();
    if (isError) return <p>Error ...</p>;
    if (info) console.log(info);
  return (
      <Box my={5}>
        {isLoading ? <></> :<></>}
       <Avatar {...stringAvatar('Kent Dodds')}/>
    </Box>
  )
}