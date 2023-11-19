import React from 'react';
import {Stack, Modal,Button as ModalButton, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export const ConfirmationModal = ({ isOpen, onClose, onConfirm , message }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <Typography variant="h6">{message}</Typography>
                <Stack direction='row' spacing={2} mt={5}>
                    <ModalButton variant="contained" fullWidth color="error" onClick={onConfirm}>
                        Yes
                    </ModalButton>
                    <ModalButton variant="outlined" fullWidth color="primary" onClick={onClose}>
                        Cancel
                    </ModalButton>
                </Stack>
            </Box>
        </Modal>
    );
};