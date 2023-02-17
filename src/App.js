import { AppBar, Box, Button, Link, styled, Toolbar, Typography } from "@mui/material";
import MoneyIcon from '@mui/icons-material/Money';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { BrowserRouter, Routes, Route, Link as RouterLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {

  const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-around"
  }))

  return (
    <BrowserRouter>
    <Box>
        {/* Navigation */}
        <AppBar position="sticky">
          <StyledToolbar>
            <MoneyIcon/>
            <Link component={RouterLink} to='/' underline="none" sx={{color: "white"}}>
              <Typography>Home</Typography>
            </Link>
            <Link component={RouterLink} to='/about' underline="none" sx={{color: "white"}}>
              <Typography>About</Typography>
            </Link>
            <Link component={RouterLink} to='/services' underline="none" sx={{color: "white"}}>
              <Typography>Services</Typography>
            </Link>
            <Link component={RouterLink} to='/contacts' underline="none" sx={{color: "white"}}>
              <Typography>Contacts</Typography >
            </Link>
            <Button 
              sx={{color: 'white'}} 
              startIcon={<LoginIcon/>}
              component={RouterLink} 
              to='/login'>Login</Button>
            <Button 
              sx={{color: 'white'}} 
              startIcon={<HowToRegIcon />}
              component={RouterLink} 
              to='/signup'>Signup</Button>
          </StyledToolbar>
        </AppBar>
    </Box>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
