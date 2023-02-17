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
    <form onSubmit={signup}>
        <div>
            <input 
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"/>
        </div>
        <div>
            <input 
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email" />
        </div>
        <div>
            <input 
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password" />
        </div>
        <div>
            <button type="submit">Signup</button>
        </div>
    </form>
  )
}

export default Signup