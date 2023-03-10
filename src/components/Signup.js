import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async (e) => {
    e.preventDefault();
    // console.log(`${username}  ${email}  ${password}`);
    const user = {
      username: username,
      email: email,
      password: password
    }
    try {
      const response = await axios.post('http://localhost:5000/users', user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }finally{
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <Box 
        onSubmit={signup}
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}>
        <div>
            <TextField 
              defaultValue={username}
              onChange={e => setUsername(e.target.value)}
              type="text" 
              variant="outlined" 
              label="Username"/>
        </div>
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
                sx={{m: 1}}>Signup</Button>
        </div>
    </Box>
  )
}

export default Signup