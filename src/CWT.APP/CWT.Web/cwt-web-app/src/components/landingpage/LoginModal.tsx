import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        // TODO: Implement sign in logic
        console.log(`Signing in with username: ${username} and password: ${password}`);
        handleClose();
    };

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                Sign In
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
                    <TextField label="Username" variant="outlined" value={username} onChange={handleUsernameChange} sx={{ mb: 2 }} />
                    <TextField label="Password" variant="outlined" type="password" value={password} onChange={handlePasswordChange} sx={{ mb: 2 }} />
                    <Button variant="contained" onClick={handleSignIn}>
                        Sign In
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default LoginModal;
