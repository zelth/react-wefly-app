import React from 'react';
import BuddhaImage from 'assets/img/elem_2.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imgContainer: {
    marginTop: -140,
    backgroundImage: `url(${BuddhaImage})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0',
    height: 240,
  }
}));

const BuddhaSpacer = () => {

  const classes = useStyles();

  return (
    <div className={classes.imgContainer} />
  );
};

export default BuddhaSpacer;