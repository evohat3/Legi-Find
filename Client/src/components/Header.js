import React from 'react';
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import { makeStyles } from '@mui/styles';;


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
    <AppBar position="static" /**className={classes.appBar} */ > 
      <Toolbar>

      </Toolbar>
    </AppBar>
  );
};

export default Header;





