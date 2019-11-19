import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import DateFnsUtils from '@date-io/date-fns';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from 'react-router-dom';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  roundedBtn: {
    color: '#fff',
    borderColor: '#fff',
    borderRadius: '25px',
    backgroundColor: '#35AFE4',
    margin: theme.spacing(1, 1.5),
  },
  bookingContainer: {
    marginBottom: 20,
    '& svg': {
      position: 'absolute',
      left: 5,
      color: '#35AFE4',
    },
  },
  dateContainer: {
    marginBottom: 20,
    '& button': {
      padding: 3,
      position: 'absolute',
      left: 6,
    },
    '& input':{
      padding: '10px 10px 10px 40px',
    },
    '& svg': {
      color: '#35AFE4',
    }
  },
  dateSeparator: {
    padding: '0 15px',
    display: 'flex',
    alignItems: 'center',
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    borderColor: '#fff',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '13px 31px 13px 31px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const TravelForm = () => {
  const history = useHistory();
  const [bookingDestination, setBookingDestination] = React.useState('Japan');
  const [bookingFromDate, setBookingFromDate] = React.useState(new Date());
  const [bookingToDate, setBookingToDate] = React.useState(new Date());
  const classes = useStyles();
  const handleChange = event => {
    setBookingDestination(event.target.value);
  };
  const onSubmit = () => {
    const formData = {
      bookingDestination,
      bookingFromDate,
      bookingToDate,
    };
    history.push('/booking', formData);
  };

  return (
    <div className="travel-form">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Where are you travelling? 
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className={classes.bookingContainer}>
          <Select
            value={bookingDestination}
            onChange={handleChange}
            input={<BootstrapInput />}
            fullWidth
            IconComponent={() => (
              <LocationOnIcon />
            )}
          >
            <MenuItem value="Japan">JAPAN</MenuItem>
            <MenuItem value="Philippines">PHILIPPINES</MenuItem>
          </Select>
        </Grid>
        <Grid container spacing={1} className={classes.dateContainer} style={{ paddingRight: 10, paddingLeft: 10 }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={`${classes.textCenter} ${classes.fromDate}`}
              id="date-picker-dialog-from"
              format="MM/dd/yyyy"
              value={bookingFromDate}
              onChange={selectedDate => setBookingFromDate(selectedDate)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <span className={classes.dateSeparator}>to</span>
            <KeyboardDatePicker
              className={`${classes.textCenter} ${classes.toDate}`}
              id="date-picker-dialog-to"
              format="MM/dd/yyyy"
              value={bookingToDate}
              onChange={selectedDate => setBookingToDate(selectedDate)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1" component="p">
            This is a sample text and will just hold anything that<br />
            whatever we are going to say. Thanks! 
          </Typography>
        </Grid>
        <Grid item xs={12} className="align-center">
          <Button onClick={() => onSubmit()} color="primary" variant="contained" className={classes.roundedBtn}>
            Book Now!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TravelForm;