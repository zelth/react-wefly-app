import React from 'react';
import LogoColored from 'assets/img/logo_footer.png';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  logo: {
    alignSelf: 'center',
    width: 149,
    height: 49, 
  },
  toolbar: {
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    zIndex: 1,
    padding: '20px 5px',
    '& h6, a': {
      color: '#35AFE4',
    }
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#fff',
    fontSize: 19,
    marginLeft: 20,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  roundedBtn: {
    borderColor: '#35AFE4',
    borderRadius: '25px',
    margin: theme.spacing(1, 1.5),
  },
  textBtn: {
    color: '#fff',
    fontSize: 14,
    margin: '8px 12px',
  },
  
  // css helper

  fontWb: {
    fontWeight: '800',
    color: '#000',
    '& a': {
      color: '#000',
      fontWeight: '800',
    }
  }
}));

const BookingHeader = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Link to="/">
        <img src={LogoColored} alt="Logo" className={classes.logo} />
      </Link>
      <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        YOUR GLOBAL TRAVEL WIFI.
      </Typography>
      <nav>
        <Link color="textPrimary" to="/pricing" className={classes.textBtn}>
          COVERAGE & PRICING
        </Link>
        <Link color="textPrimary" to="rental-guide" className={classes.textBtn}>
          RENTAL GUIDE
        </Link>
        <Link color="textPrimary" to="/faq" className={classes.textBtn}>
          FAQ
        </Link>
        <Link color="textPrimary" to="/contact-us" className={classes.textBtn}>
          CONTACT
        </Link>
      </nav>
      <Button color="primary" variant="outlined" className={classes.roundedBtn}>
        Login
      </Button>
    </Toolbar>
  );
};

export default BookingHeader;