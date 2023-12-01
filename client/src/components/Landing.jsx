import React from 'react';
import {Typography, CssBaseline, Container, Stack, Box, ButtonGroup, Grid,ThemeProvider} from '@mui/material';
import {Button} from '@mui/material';

const Landing = () => {
  return (
    <>
    <CssBaseline/>
      
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h2' align="center" color="black" gutterBottom>UBook</Typography>
            <Typography variant='h5' align="center" color="darksalmon" gutterBottom>Easy Book, Easy Read</Typography>
           <div>
                <Box textAlign="center" mt={2}>
                  <Button style = {{marginRight:"32px"}} variant="contained"href="/Login">Login</Button>
                  <Button variant="contained"href="/signup">Signup</Button>           
                </Box>          
           </div>
          </Container>
        </div>
      </main>
    </> 
  );
 }
 
export default Landing;