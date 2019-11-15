import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LogoPackage from 'assets/img/logo_package.png';
import SectionBg from 'assets/img/bg_blue.png'; 
import WiflyImage from 'assets/img/elem_3.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: 900,
    color: '#fff',
    backgroundImage: `url(${SectionBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: -165,
  },
  mainlcC: {
    display: 'flex',
    width: '50%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  lcC: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '70%',
    flexDirection: 'column',
    '& h4': {
      marginBottom: 20,
      fontWeight: 'bold',
    },
    '& img': {
      width: 357,
      marginBottom: 40,
    }
  },
  rcC: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    '& img': {
      width: '75%',
    }
  },
}));

const AboutSection = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainlcC}>
        <div className={classes.lcC}>
          <img src={LogoPackage} alt="logo" />
          <Typography variant="h4">
            Just the essentials. That&apos;s it. 
          </Typography>
          <Typography component="p">
            Vivamus quam quam, egestas vitae ligula et, condimentum imperdiet quam. Vestibulum eu libero ante. Mauris at placerat lacus. Ut viverra enim a libero pellentesque facilisis. Integer in lorem ut ante porttitor efficitur. Suspendisse elit risus, tempus quis cursus ut, venenatis eget purus. Sed in lorem cursus, consequat magna ac, fringilla mi. Suspendisse potenti. Vestibulum risus metus, cursus et pretium quis, finibus et mi. Nullam vel porttitor ex. Pellentesque vitae velit id leo eleifend commodo in quis ipsum. Sed sit amet fringilla felis. Suspendisse consectetur libero ligula, eget interdum neque ornare ut.
          </Typography>
        </div>
      </div>
      <div className={classes.rcC}>
        <img src={WiflyImage} alt="wifly" />
      </div>
    </div>
  );
};

export default AboutSection;