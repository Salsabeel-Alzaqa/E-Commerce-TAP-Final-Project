import React, { useState } from 'react';
import { Button, TextField, Typography, Container, FormControlLabel, Checkbox, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from "react-router-dom";
import { useDataActions } from '../../hooks/useDataActions';

export const LogInPage = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, setValue } = useForm();
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    const { useLogin } = useDataActions();
    const { isLoading, mutateAsync: loginMutation } = useLogin();
    const onSubmit = async (data) => {
        try {
            setLoginError(null);
            const token = await loginMutation(data);
            if (!isLoading && token) {
                if (watch('rememberMe')) {
                    localStorage.setItem('token', token);
                } else {
                    sessionStorage.setItem('token', token);
                }
                navigate("/");
            }
        } catch (error) {
            setLoginError('Email or password is wrong');
            console.error('Login failed:', error.message);
        } finally {
            setValue('email', '');
            setValue('password', '');
        }
    }
    const handleTextFieldClick = () => {
        setLoginError(null);
    };
    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography component="h1" variant="h1" color='primary' mb={5}>
                Log in
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    error={!!loginError}
                    helperText={errors.email?.message || loginError || ''}
                    onClick={handleTextFieldClick}
                    disabled={isSubmitting}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...register('password', { required: 'Password is required' })}
                    error={!!loginError}
                    helperText={errors.password?.message || loginError || ''}
                    onClick={handleTextFieldClick}
                    disabled={isSubmitting}
                />
                <FormControlLabel
                    control={<Checkbox {...register('rememberMe')}/>}
                    label="Remember Me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? <CircularProgress size={24} /> : 'Log In'}
                </Button>
            </form>
            <Link to="/">
                Guest Mood
            </Link>
        </Container>
    );
};