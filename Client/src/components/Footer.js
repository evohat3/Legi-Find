import * as React from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     padding: theme.spacing(2),
//     marginTop: 'auto',
//   },
// }));

const Footer = () => {
  // const classes = useStyles();

  return (
    <footer /**className={classes.footer}*/>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          This is the footer content.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;