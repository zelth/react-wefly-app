import React from 'react';
import Typography from '@material-ui/core/Typography';

import BatteryImage from 'assets/img/battery.png';
import SpeedImage from 'assets/img/speed.png';
import ConnectionImage from 'assets/img/connection.png';
import WifiImage from 'assets/img/wifi.png';
import { makeStyles } from '@material-ui/core';

import PersonImage from 'assets/img/elem_1.png';

const useStyles = makeStyles(theme => ({
  mainService: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    backgroundImage: `url(${PersonImage})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    height: '125vh',
    [theme.breakpoints.up('md')]: {
      height: '135vh',
    },
  },
  lcC: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'space-around',
    padding: 20,
    '& h3': {
      textAlign: 'center',
      color: '#35AFE4',
    }
  },
  rcC: {
    display: 'flex',
    width: '40%',
    justifyContent: 'flex-end',
    zIndex: -1,
  },
  servicesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bottomimgContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  services: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: 5,
    '& p': {
      marginTop: 40,
      width: '95%',
      textAlign: 'center',
    }
  },
  serviceImage: {
    width: 100,
    marginBottom: 20
  },
}));  
const AdSection = () => {

  const classes = useStyles();
  
  return (
    <div className={classes.mainService}>
      <div className={classes.lcC}>
        <div className={classes.servicesContainer}>
          <div className={classes.services}>
            <img src={SpeedImage} alt="fast-internet" className={classes.serviceImage} />
            <Typography variant="h5" component="h3">
              FAST 4G<br />
              INTERNET
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
          <div className={classes.services}>
            <img src={WifiImage} alt="unlimited-data" className={classes.serviceImage} />
            <Typography variant="h5" component="h3">
              UNLIMITED<br />
              DATA
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
          <div className={classes.services}>
            <img src={BatteryImage} alt="battery-life" className={classes.serviceImage} />
            <Typography variant="h5" component="h3">
              LONGER<br />
              BATTERY LIFE
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
          <div className={classes.services}>
            <img src={ConnectionImage} alt="hotspot-sharing" className={classes.serviceImage} />
            <Typography variant="h5" component="h3">
              HOTSPOT<br />
              SHARING
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
        </div>  
      </div>
      {/* <div className={classes.rcC}>
        <img src={PersonImage} alt="model-person" />
      </div> */}
    </div>
    
  );
};

export default AdSection;