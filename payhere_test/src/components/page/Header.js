import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

class Header extends Component
{
    render()
    {
        return (
          <Box sx={{ flexGrow: 1}} paddingBottom="50px">
          <AppBar position="static">
            <Toolbar>
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <h3>Github Open API</h3>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        )
    }
}

export default Header;