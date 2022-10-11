import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar } from "./HeaderStyled"
import Button from '@mui/material/Button';


const Header =() => {
  return (
    
    <AppBar position="static">
    <StyledToolBar>
        <h1>NetPlanos</h1>
        <Button color="inherit">Login</Button>
    </StyledToolBar>
  </AppBar>

  );
}

export default Header;
