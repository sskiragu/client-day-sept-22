import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // replace with your server URL
});

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const refreshToken = async () => {
  try {
    const response = await api.post('/refresh',null, { withCredentials: true });
    const token = response.data.token;
    setAuthToken(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

// set the cookie with the refresh token
const setRefreshTokenCookie = (refreshToken) => {
    const expiryDate = new Date(Date.now() + 100 * 1000); // set the expiry time
    document.cookie = `refreshToken=${refreshToken}; expires=${expiryDate.toUTCString()}; path=/;`;
  }

export { api, setAuthToken, refreshToken, setRefreshTokenCookie };
