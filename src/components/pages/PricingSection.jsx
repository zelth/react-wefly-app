import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudImage from 'assets/img/bg_white.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  pricingSection: {
    position: 'relative',
    width: '100%',
    marginTop: '1.1%',
  },
  imgContainer: {
    width: '100%',
    '& img': {
      width: '100%',
    }
  },
  formContainer: {
    position: 'absolute',
    bottom: '25%',
    left: '5%',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: '13%',
      left: '5%',
    },
    '& h6': {
      color: '#35AFE4',
    }
  },
  roundedBtn: {
    color: '#fff',
    borderColor: '#fff',
    borderRadius: '25px',
    backgroundColor: '#35AFE4',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    '& input': {
      backgroundColor: '#f2f3f5',
      padding: '10px 20px',
      borderRadius: 10,
    },
    '& button': {
      marginLeft: '-15%',
      padding: '10px 40px',
    }
  }
}));

const PricingSection = () => {
  const [country, setCountry] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = () => {
    history.push(`/pricing/${country.trim()}`);
  };

  return (
    <div className={classes.pricingSection}>
      <div className={classes.imgContainer}>
        <img src={CloudImage} alt="cloud" />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.testingC}>
          <Typography variant="h6">
            Get prices where you<br />
            are travelling
          </Typography>
          <div className={classes.inputContainer}>
            <TextField
              required
              id="country"
              value={country}
              onChange={e => setCountry(e.target.value)}
              placeholder="Search Country..."
              fullWidth
            />
            <Button onClick={onSubmit} color="primary" variant="contained" className={classes.roundedBtn}>
              Go!
            </Button>
          </div>
        </div>
      </div>  
    </div>
  ); 
};

export default PricingSection;