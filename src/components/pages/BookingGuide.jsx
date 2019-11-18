import React from 'react';

import BatteryImage from 'assets/img/battery.png';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '50px 50px',
    display: 'flex',
    flexDirection: 'column'
  },
  guideItems: {
    display: 'flex',
  },
  guideHeader: {
    color: '#35AFE4',
    marginBottom: 20,
    '& h5': {
      fontWeight: 'bold',
    }
  },
  item: {
    textAlign: 'center',
    width: '25%',
    '& h3': {
      marginBottom: 30,
    }
  },
  itemImage: {
    marginBottom: 20,
    width: 100,
  },
  itemDescription: {
    width: '70%',
    margin: '0 auto',
    wordWrap: 'break-word',
  },
  faq: {
    height: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '& h5': {
      color: '#35AFE4',
      marginBottom: 20,
      fontWeight: 'bold',
    }
  },
  faqContainer: {
    padding: 20,
    width: '70%',
  },
  answer: {
    marginBottom: 40,
    marginLeft: 20,
  },
  question: {
    marginBottom: 40,
    color: '#35AFE4',
    '& p': {
      fontWeight: 'bold',
    }
  }
  
}));

function BookingGuide() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.guideHeader}>
        <Typography variant="h5">
          BOOKING GUIDE
        </Typography>
      </div>
      <div className={classes.guideItems}>
        <div className={classes.item}>
          <img src={BatteryImage} alt="fast-internet" className={classes.itemImage} />
          <Typography variant="h5" component="h3">
            BOOK AND BUY<br />
            ONLINE
          </Typography>
          <div className={classes.itemDescription}>
            <Typography component="p">
              This is a sample text and will just hold anything that whatever we are going to say. Thanks!
            </Typography>
          </div>
        </div>
        <div className={classes.item}>
          <img src={BatteryImage} alt="fast-internet" className={classes.itemImage} />
          <Typography variant="h5" component="h3">
            RECEIVE/PICKUP<br />
            WI-FLY PACKAGE
          </Typography>
          <div className={classes.itemDescription}>
            <Typography component="p">
              This is a sample text and will just hold anything that whatever we are going to say. Thanks!
            </Typography>
          </div>
        </div>
        <div className={classes.item}>
          <img src={BatteryImage} alt="fast-internet" className={classes.itemImage} />
          <Typography variant="h5" component="h3">
            FLY TO YOUR<br />
            DESTINATION
          </Typography>
          <div className={classes.itemDescription}>
            <Typography component="p">
              This is a sample text and will just hold anything that whatever we are going to say. Thanks!
            </Typography>
          </div>
        </div>
        <div className={classes.item}>
          <img src={BatteryImage} alt="fast-internet" className={classes.itemImage} />
          <Typography variant="h5" component="h3">
            RETURN/DROP OFF<br />
            WI-FLY PACKAGE
          </Typography>
          <div className={classes.itemDescription}>
            <Typography component="p">
              This is a sample text and will just hold anything that whatever we are going to say. Thanks!
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.faq}>
        <Typography variant="h5">
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <div className={classes.faqContainer}>
          <div className={classes.question}>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Typography>
          </div>
          <div className={classes.answer}>
            <Typography component="p">
              In hac habitasse platea dictumst. 
              Curabitur at lacus ac velit ornare lobortis. 
              Curabitur a felis in nunc fringilla tristique. 
              Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. 
              Nullam vel sem. Pellentesque libero tortor, tincidunt et, 
              tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. 
              Nunc egestas, augue at pellentesque laoreet, felis eros 
              vehicula leo, at malesuada velit leo quis pede. Donec interdum, 
              metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas 
              libero turpis vel mi. Nunc nulla. Fusce risus nisl, 
              viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem.
            </Typography>  
          </div>
          <div className={classes.question}>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Typography>
          </div>
          <div className={classes.answer}>
            <Typography component="p">
              In hac habitasse platea dictumst. 
              Curabitur at lacus ac velit ornare lobortis. 
              Curabitur a felis in nunc fringilla tristique. 
              Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. 
              Nullam vel sem. Pellentesque libero tortor, tincidunt et, 
              tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. 
              Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, 
              at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet,
              dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. 
              Fusce risus nisl, viverra et, tempor et, pretium in, sapien. 
              Donec venenatis vulputate lorem.
            </Typography>  
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingGuide;