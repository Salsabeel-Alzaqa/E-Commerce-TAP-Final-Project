import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Typography, InputBase, FormControl, Divider, Box, Stack, InputAdornment, IconButton , Alert } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDataActions } from '../../../hooks/useDataActions';
const StyledInput = styled(InputBase)({
  height: '48px',
  padding: '10px',
});
export const UserInfoForm = ({ showForm, setShowFormCallback, first_name, last_name, email, phone_number }) => {
    const { register, handleSubmit, setValue, watch, setError, formState: { errors, isSubmitting } , clearErrors } = useForm();
    const { useUpdateUserInfo, usePersonalInfo , useUpdateUserPassword} = useDataActions();
    const { refetch } = usePersonalInfo();
    const updateInfo = useUpdateUserInfo();
    const updatePassword = useUpdateUserPassword();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState('');
    const onSubmit = async (data) => {
        try {
            if (!isInfoUnchanged()) {
                let newInfo = {
                    'first_name': data.first_name,
                    'last_name': data.last_name,
                    'email': data.email,
                    'mobile_number': data.mobileNumber
                }
                await updateInfo.mutateAsync(newInfo);
                refetch();
            }
            if (data.newPassword !== '') {
                let passwords = { "currentPassword": data.currentPassword, "newPassword": data.newPassword }
                await updatePassword.mutateAsync(passwords);
            }
            setShowFormCallback(false);
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setError('currentPassword', {
                    message: 'The Current Password Not Correct',
                });
            } else {
                console.error('Error updating Info', error);
            }
        }
    };
  const defaultValues = {
    first_name,
    last_name,
    email,
    mobileCode: 11, 
    mobileNumber: phone_number,
    currentPassword:'',
  };
    useEffect(() => {
        Object.keys(defaultValues).forEach((key) => {
            setValue(key, defaultValues[key]);
        });
    }, [setValue]);

    useEffect(() => {
        const newPassword = watch('newPassword');
        const confirmPassword = watch('confirmPassword');

        if (newPassword !== '' && confirmPassword !== '') {
            if (newPassword === confirmPassword) {
                setPasswordsMatch(true);
            } else {
                setPasswordsMatch(false);
            }
        } else {
            setPasswordsMatch(true);
        }
    }, [watch, watch('newPassword'), watch('confirmPassword')]);
    
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const isInfoUnchanged = () => {
        return (watch('first_name') === defaultValues.first_name && watch('last_name') === defaultValues.last_name &&
            watch('email') === defaultValues.email && watch('mobileCode') === defaultValues.mobileCode && watch('mobileNumber') === defaultValues.mobileNumber
        );
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} width={'70%'} mb={5}>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                        First Name
                    </Typography>
                    {showForm ? (
                        <FormControl fullWidth>
                            <StyledInput
                                {...register('first_name', { required: true })}
                                id="first_name"
                                name="first_name"
                                type="text"
                                defaultValue={first_name}
                                disabled={isSubmitting}
                            />
                        </FormControl>
                    ) : (
                        <Typography variant="subtitle1" gutterBottom>
                            {first_name}
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                        Last Name
                    </Typography>
                    {showForm ? (
                        <FormControl fullWidth>
                            <StyledInput
                                {...register('last_name', { required: true })}
                                id="last_name"
                                name="last_name"
                                type="text"
                                defaultValue={last_name}
                                disabled={isSubmitting}
                            />
                        </FormControl>
                    ) : (
                        <Typography variant="subtitle1" gutterBottom>
                            {last_name}
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                        Email
                    </Typography>
                    {showForm ? (
                        <FormControl fullWidth>
                            <StyledInput
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                defaultValue={email}
                                id="email"
                                name="email"
                                type="text"
                                disabled={isSubmitting}
                            />
                        </FormControl>
                    ) : (
                        <Typography variant="subtitle1" gutterBottom>
                            {email}
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="subtitle1" gutterBottom>
                        Mobile Number
                    </Typography>
                    {showForm ? (
                        <Stack direction="row" spacing={2}>
                            <FormControl>
                                <StyledInput
                                    {...register('mobileCode', { required: true })}
                                    id="mobileCode"
                                    name="mobileCode"
                                    type="number"
                                    startAdornment={<InputAdornment position="start">+</InputAdornment>}
                                    sx={{ width: 70, padding: 0 }}
                                    defaultValue={11}
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <StyledInput
                                    {...register('mobileNumber', {
                                        required: true,
                                    })}
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    type="text"
                                    defaultValue={phone_number}
                                    sx={{ width: '60%' }}
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                        </Stack>
                    ) : (
                        <Typography variant="subtitle1" gutterBottom>
                            {phone_number}
                        </Typography>
                    )}
                </Grid>
            </Grid>
            {showForm && (
                <>
                    <Typography variant="h5" gutterBottom>
                        Change Password
                    </Typography>
                    <Divider />
                    <Grid container spacing={2} width={'40%'} mt={5}>
                        <Grid item xs={12} md={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                Current Password
                            </Typography>
                            <FormControl fullWidth>
                                <StyledInput
                                    {...register('currentPassword', {
                                        required: !!watch('currentPassword'),
                                        onFocus: () => clearErrors('currentPassword')
                                    })}
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                New Password
                            </Typography>
                            <FormControl fullWidth>
                                <StyledInput
                                    {...register('newPassword', {
                                        required: !!watch('currentPassword'),
                                    })}
                                    id="newPassword"
                                    name="newPassword"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    disabled={!watch('currentPassword') || isSubmitting}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                Confirm Password
                            </Typography>
                            <FormControl fullWidth>
                                <StyledInput
                                    {...register('confirmPassword', {
                                        required: !!watch('currentPassword'),
                                    })}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    disabled={!watch('currentPassword') || isSubmitting}
                                />
                            </FormControl>
                            <Box mt={3}>
                                {!passwordsMatch && (
                                    <Alert severity="error">The new Password and Confirm Password not match</Alert>
                                )}
                                {errors.currentPassword?.message && (
                                    <Alert severity="error">{errors.currentPassword.message}</Alert>
                                )}</Box>
                        </Grid>
                    </Grid>
                    <Box mt={5} display="flex" justifyContent={'flex-end'}>
                        <Button type="submit" variant="contained" color="primary" disabled={(isInfoUnchanged() && watch('currentPassword') === defaultValues.currentPassword) || (!passwordsMatch)}>
                            Save Changes
                        </Button>
                    </Box>
                </>
            )}
        </form>
    );
}