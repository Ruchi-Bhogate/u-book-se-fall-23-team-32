import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import {AppBar, Button, Toolbar, Typography, StepLabel, createTheme, ThemeProvider,} from '@mui/material';

const Header = () =>{
  
  return ( 
    <div>
        <AppBar sx ={{background:'#1c1a1a',opacity:'0.8'}}>
          <Toolbar>
            <StepLabel icon={ <img src={require("../images/ubook.png")} alt="" width="110" height="50" /> } />
            <Button sx={{marginRight: "auto"}} variant="contained" href="/ownerdashboard">Dashboard</Button>
            <Button sx={{marginRight: "auto"}} variant="contained" href="/postbook">Post Book</Button>
            <Button sx={{marginRight: "auto"}} variant="contained" href="/rentedoutbooks">Rented Out Books</Button>
            <Button sx={{marginRight: "auto"}} variant="contained" href="/ownerprofile">OwnerProfile</Button>
            <Button sx={{marginRight: "auto"}} variant="contained" href="/logout">Logout</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;