import React, { useState } from 'react';
import { Skeleton, Box, Stack, Button, Avatar } from '@mui/material';
import { useDataActions } from '../../hooks/useDataActions';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { UserInfoForm } from './Partials/UserInfoForm';
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: '#1B4B66',
      width: 80,
      height: 80,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
export const PersonalInfoPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { usePersonalInfo } = useDataActions();
  const { data: info, isLoading, isError, refetch } = usePersonalInfo();
  if (isError) return <p>Error ...</p>;
  const handleUpdate = () => {
    setShowForm(!showForm);
  };
  const setShowFormCallback = (value) => {
    setShowForm(value);
  };

  return (
    <Box my={5}>
      {isLoading ? <Skeleton variant="rectangular" width={'85%'} height={500} />
        : (<>
          <Box flexDirection='row' display='flex' justifyContent={'flex-start'} alignItems={'flex-end'} gap={3}>
            <Avatar {...stringAvatar(`${info.first_name} ${info.last_name}`)} />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleUpdate}>{showForm ? 'cancel' : 'update'}</Button>
              <Button variant="outlined" color='error' startIcon={<DeleteOutlineIcon />} >Delete</Button>
            </Stack>
          </Box>
          <Box my={5}>
            <UserInfoForm showForm={showForm} setShowFormCallback={setShowFormCallback} refetch={refetch} {...info} />
          </Box>
        </>)}
    </Box>
  )
}