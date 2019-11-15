import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import DateFnsUtils from '@date-io/date-fns';
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
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const TravelForm = () => {
  const history = useHistory();
  const [destination, setDestination] = React.useState('Japan');
  const [fromDate, setFromDate] = React.useState(new Date());
  const [toDate, setToDate] = React.useState(new Date());
  const classes = useStyles();
  const handleChange = event => {
    setDestination(event.target.value);
  };
  const onSubmit = () => {
    // console.log('props', props);
    // get the data
    // check if the date to is greater than the from date
    // redirect to booking page and prefilled the input box
    
    history.push('/booking');
  };

  return (
    <div className="travel-form">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Where are you travelling? 
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Select
            value={destination}
            onChange={handleChange}
            input={<BootstrapInput />}
            fullWidth
          >
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="Philippines">Philippines</MenuItem>
          </Select>
        </Grid>
        <Grid container spacing={1} style={{ paddingRight: 10, paddingLeft: 10 }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={6} md={6}>
              <KeyboardDatePicker
                className={classes.textCenter}
                margin="normal"
                id="date-picker-dialog-from"
                format="MM/dd/yyyy"
                value={fromDate}
                onChange={selectedDate => setFromDate(selectedDate)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog-to"
                format="MM/dd/yyyy"
                value={toDate}
                onChange={selectedDate => setToDate(selectedDate)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1" component="p">
            This is a sample text and will just hold anything that<br />
            whatever we are going to say. Thanks! 
          </Typography>
        </Grid>
        <Grid item xs={12} className="align-center">
          <Button onClick={onSubmit} color="primary" variant="contained" className={classes.roundedBtn}>
            Book Now!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TravelForm;