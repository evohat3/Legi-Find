import React from 'react';
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import makeStyles from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const Header = () => {
  // const classes = useStyles();

  return (
    // this is a prop for the AppBar className={classes.appBar}
    <AppBar position="static"> 
      <Toolbar>

      </Toolbar>
    </AppBar>
  );
};

export default Header;





