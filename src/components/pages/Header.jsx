import React from 'react';
import LogoWhite from 'assets/img/logo_top_w.png';
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
    flexWrap: 'wrap',
    zIndex: 1,
    marginTop: 20,
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
    color: '#fff',
    borderColor: '#fff',
    borderRadius: '25px',
    margin: theme.spacing(1, 1.5),
  },
  textBtn: {
    color: '#fff',
    fontSize: 14,
    margin: '8px 12px', 
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Link to="/">
        <img src={LogoWhite} alt="Logo" className={classes.logo} />
      </Link>
      <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        YOUR GLOBAL TRAVEL WIFI. tae
      </Typography>
      <nav>
        <Link color="textPrimary" to="/pricing" className={classes.textBtn}>
          COVERAGE & PRICING
        </Link>
        <Link color="textPrimary" to="/rental-guide" className={classes.textBtn}>
          RENTAL GUIDE
        </Link>
        <Link color="textPrimary" to="/faq" className={classes.textBtn}>
          FAQ
        </Link>
        <Link color="textPrimary" to="/contact" className={classes.textBtn}>
          CONTACT
        </Link>
      </nav>
      <Button to="/signin" color="primary" variant="outlined" className={classes.roundedBtn}>
        Login
      </Button>
    </Toolbar>
  );
};

export default Header;