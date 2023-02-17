import React, { useState, useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { api, setAuthToken, refreshToken, setRefreshTokenCookie } from '../utility/api';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (token) {
          setAuthToken(token);
        }
      }, [token]);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email: email, password: password });
            const {token, refreshToken} = response.data;
            setToken(token);
            setRefreshTokenCookie(refreshToken); // set the refresh token in a cookie
          } catch (error) {
            console.log(error);
          }
        
      };

      const handleRefreshToken = async () => {
        const newToken = await refreshToken();
        if (newToken) {
          setToken(newToken);
        }
        console.log(token);
      };

  return (
    <>
    <Box 
        onSubmit={handleLogin}
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}>
        <div>
            <TextField 
              defaultValue={email}
              onChange={e => setEmail(e.target.value)}
              type="email" 
              variant="outlined" 
              label="Email"/>
        </div>
        <div>
            <TextField 
              defaultValue={password}
              onChange={e => setPassword(e.target.value)}
              type="password" 
              variant="outlined" 
              label="Password"/>
        </div>
        <div>
            <Button 
                type="submit"
                variant="outlined"
                sx={{m: 1}}>Login</Button>
        </div>
    </Box>
    <button onClick={handleRefreshToken}>Refresh Token</button>
    </>
  )
}

export default Login