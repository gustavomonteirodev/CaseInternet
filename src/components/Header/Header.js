import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar } from "./HeaderStyled"
import Button from '@mui/material/Button';


const Header =() => {
  return (

    <AppBar position="static">
    <StyledToolBar>
        {/* <h1>LaNet</h1> */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Offers</Button>
    </StyledToolBar>
  </AppBar>

  );
}

export default Header;
