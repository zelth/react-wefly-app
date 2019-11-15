import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  sideContentTitle: {
    fontSize: 62,
    color: '#fff'
  },
  sideContent: {
    fontSize: 18,
    color: '#fff'
  },
}));  

const SideContent = () => {

  const classes = useStyles();
  
  return (
    <div>
      <Typography variant="h1" className={classes.sideContentTitle}>
        IPSUM DOLOR 
      </Typography>
      <Typography variant="h6" className={classes.sideContent}>
        Lorem ipsum dolor sit amet adepescing consectetur<br /> 
        this is a sample text and will just hold anything that<br />
        whatever we are going to say. Thanks!
      </Typography> 
    </div>
  );
};

export default SideContent;