import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  coveragePricing: {
    padding: '50px 100px',
  },
  cpricingHeader: {
    color: '#35AFE4',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: '50px 50px',
    '& h5': {
      fontWeight: 'bold',
    }
  },
  search: {
    backgroundColor: '#EAEEF1',
    padding: 10,
    margin: 0,
    borderRadius: 40,
    '& input': {
      color: '#000',
      backgroundColor: '#EAEEF1',
      paddingLeft: 10,
    }
  },
  cpricingList: {
    border: '2px solid #ECEDEF',
    margin: '20px 0',
    padding: '20px 50px',
    '& ul': {
      display: 'flex',
      justifyContent: 'space-between',
    }
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    padding: '20px 50px', 
  },
  cpricingItem: {
    display: 'flex',
    justifyContent: 'space-between',  
    alignItems: 'center',
    marginBottom: 10,
    '& p': {
      width: '50%',
    }
  },
  cpricingItemsLeft: {
    width: '47%',
  },
  cpricingItemsRight: {
    width: '47%',
  },
  roundedBtn: {
    borderRadius: 25,
    backgroundColor: '#379BFD',
    color: '#fff',
    padding: '5px 35px',
  },

  // css helper
  mr5p: {
    marginRight: '5%',
  }
}));

const PricingCoverage = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.coveragePricing}>
        <div className={classes.cpricingHeader}>
          <Typography variant="h5">
            COVERAGE AND PRICING
          </Typography>
          <div>
            <TextField
              id="outlined-search"
              placeholder="Search Country"
              // label="Search field"  
              type="search"
              className={classes.search}
              margin="normal"
              // variant="outlined" 
            />  
          </div>
        </div>
        <div className={classes.cpricingList}>
          <ul>
            <li>Asia</li>
            <li>Europe</li>
            <li>South Africa</li>
            <li>North America</li>
            <li>Multi Country Package</li>
          </ul>
        </div>
        <div className={classes.itemContainer}>
          <div className={`${classes.cpricingItemsLeft} ${classes.mr5p}`}>
            <div className={classes.cpricingItem}>
              <Typography>
                Japan - Unlimited
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
          </div>
          <div className={`${classes.cpricingItemsRight}`}>
            <div className={classes.cpricingItem}>
              <Typography>
                Japan - Unlimited
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
            <div className={classes.cpricingItem}>
              <Typography>
                HONGKONG - 500MB
              </Typography>
              <Typography>
                P250/day
              </Typography>
              <Button href="#" color="primary" variant="contained" className={classes.roundedBtn}>
                BOOK
              </Button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default PricingCoverage;