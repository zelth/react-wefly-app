import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: 0,
    backgroundColor: 'green',
    '& span': {
      fontSize: 14,
      fontWeight: 500,
    }
  },
  stepperRoot: {
    backgroundColor: '#f2f2f2',  
    borderRadius: 20,
  },
  container: {
    margin: '40px 0 20px 0',
  },
  stepperContainer: {
    width: '70%',
    padding: 20,
  },
  backButton: {
    marginRight: theme.spacing(1),
    padding: '10px 70px',
    borderRadius: 20,
    backgroundColor: '#cccbcc',
    color: '#fff',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  datePicker: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    '& input': {
      textAlign: 'center',
    }
  },
  itemContainer: {
    display: 'flex',
    marginTop: 40,
  },
  itemAlign: {
    display: 'flex',
    alignItems: 'center',
  },
  itemInfo: {
    display: 'flex',
    marginBottom: 40,
    justifyContent: 'space-between',
    '& input': {
      textAlign: 'center',
    }
  },
  itemQuantity: {
    display: 'flex',
    flexDirection: 'column',
    width: '53%',
    marginRight: 35,
  },
  insuranceContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '57%',
    '& p': {
      marginBottom: 20,
    },
    '& span': {
      marginBottom: 20,
      padding: 0,
    }
  },
  insuranceHeader: {
    display: 'flex',
    justifyContent: 'center', 
  },
  stepperButton: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  nextButton: {
    padding: '10px 70px',
    borderRadius: 20,
    backgroundColor: '#cccbcc',
  },
  
  activeStep: {
    backgroundColor: '#35AFE4',
    textAlign: 'center',
    padding: '10px 0',
  },
  inActiveStep: {
    padding: '10px 0',
  },
  activeStepLeft: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  activeStepRight: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  activeLabel: {
    color: '#fff',
  },
  inActiveLabel: {
    color: '#F7A337',
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: '25px 40px',
    borderRadius: 20,
    padding: 40,
    '& h3': {
      color: '#35AFE4',
      marginBottom: 10,
      fontSize: 30,
      fontWeight: 'bold',   
      textAlign: 'center',  
    }
  },
  summaryItem: {
    '& p': {
      textAlign: 'center',
      marginBottom: 20,
    }
  },
  sumItemContent: {
  },
  summaryTitle: {
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  summaryTotal: {
    color: '#35AFE4',
    marginTop: 30,
    fontSize: 30,
    textAlign: 'center',
  },
  textField: {
    margin: 0,
    backgroundColor: '#fff',
    '&::before': {
      display: 'none',
    }
  },
  checkboxContainer: {
    marginRight: 20,
  },
  InfoContainer: {
    padding: 24,
  },
  policyContainer: {
    display: 'flex',
  },
  policyContent: {
    '& span': {
      marginBottom: 100,
    }
  },
  creditPayment: {
    display: 'flex',
  },
  cashPayment: {
    marginTop: 40,
  },
  cpaymentHeader: {
    display: 'flex',
  },

  // css-helper

  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  flexJcSb: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexJcC: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexJcFe: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  flexAiC: {
    display: 'flex',
    alignItems: 'center',
  },
  mr20: {
    marginRight: 20,
  },
  mt40: {
    marginTop: 40,
  },
  mb10: {
    marginBottom: 10,
  },
  halfWidth: {
    width: '50%'
  },
  fontWB: {
    fontWeight: 'bold',
  },
  w60p: {
    width: '60%',
  },
  w35p: {
    width: '35%',
  },
  mr5p: {
    marginRight: '5%',
  },
}));

function getSteps() {
  return ['ORDER', 'CUSTOMER INFO', 'PAYMENT'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <OrderStep />;
    case 1:
      return <CustomerInfoStep />;
    case 2:
      return <PaymentStep />;
    default:
      return '';
  }
}


function OrderStep() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" component="h1">Location placeholder</Typography>
      <div className={classes.datePicker}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.textCenter}
            margin="normal"
            id="date-picker-dialog"
            // label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <span>TO</span>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.itemContainer}>
        <div className={classes.itemQuantity}>
          <div className={classes.itemInfo}>
            <Typography component="p">How many routers<br /> do you need?</Typography>
            <TextField
              id="filled-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={`${classes.itemInfo} ${classes.itemAlign}`}>
            <Typography component="p">Order Pickup</Typography>
            <TextField
              id="standard-read-only-input"
              defaultValue="time?"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className={`${classes.itemInfo} ${classes.itemAlign}`}>
            <Typography component="p">Order Return</Typography>
            <TextField
              id="standard-read-only-input"
              defaultValue="time?"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>  
        </div>
        <div className={classes.insuranceContainer}>
          <div className={classes.insuranceItems}>
            <div className={classes.insuranceHeader}>
              <div className={classes.checkboxContainer}>
                <Checkbox
                  value="checkedC"
                  inputProps={{
                    'aria-label': 'uncontrolled-checkbox',
                  }}
                />
              </div>
              <div className={classes.iHeaderContent}>
                <Typography className={classes.fontWB} component="p">Router Insurance</Typography>
                <Typography className={classes.fontWB} component="p">
                Get Insurance for your router to keep your pocket out of<br /> 
                financial liability in the event of stolen, loss or damage kit.
                </Typography>
              </div>
            </div>
            <Typography className={classes.mb10}>Policy</Typography>
            <ul>
              <li>*Rental begins on the departure date, and ends on the return date.</li>
              <li>*Router will be delivered within 3 days before departure date.</li>
              <li>*Router will be collected within 3 days after return date.</li>
              <li>*Booking will only be confirmed upon payment made</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerInfoStep() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.InfoInputs}>
        <Input
          placeholder="Customer Name"
          className={`${classes.w60p} ${classes.mb10}  ${classes.mr5p}`}
          inputProps={{
            'aria-label': 'description',
          }}
        />
        <Input
          placeholder="Contact Number"
          className={`${classes.w35p} ${classes.mb10}`}
          inputProps={{
            'aria-label': 'description',
          }}
        />
        <Input
          placeholder="Address"
          className={`${classes.w60p} ${classes.mb10}  ${classes.mr5p}`}
          inputProps={{
            'aria-label': 'description',
          }}
        />
        <Input
          placeholder="Email Address"
          className={`${classes.w35p} ${classes.mb10}`}
          inputProps={{
            'aria-label': 'description',
          }}
        />
        <Input
          placeholder="Passport Number"
          className={`${classes.w60p} ${classes.mb10}  ${classes.mr5p}`}
          inputProps={{
            'aria-label': 'description',
          }}
        />
        
      </div>
      <div className={`${classes.policyContainer} ${classes.mt40}`}>
        <div className={`${classes.impContent} ${classes.halfWidth}`}>
          <Typography className={classes.mb10}>Important</Typography>
          <Typography>
            Line for please fill every details for easier transaction<br />whatsoever here.
          </Typography>
        </div>
        <div className={`${classes.policyContent} ${classes.halfWidth}`}>
          <Typography className={classes.mb10}>Policy</Typography>
          <ul>
            <li>*Rental begins on the departure date, and ends on the return date.</li>
            <li>*Router will be delivered within 3 days before departure date.</li>
            <li>*Router will be collected within 3 days after return date.</li>
            <li>*Booking will only be confirmed upon payment made</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PaymentStep() {

  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <div className={classes.paymentContainer}>
        <div className={classes.creditPayment}>
          <div className={`${classes.cpaymentHeader} ${classes.w35p} ${classes.mr5p}`}>
            <div className={classes.checkboxContainer}>
              <Checkbox
                value="checkedC"
                inputProps={{
                  'aria-label': 'uncontrolled-checkbox',
                }}
              />
            </div>
            <Typography>
              Credit Card
            </Typography>
          </div>
          <div className={`${classes.creditInputs} ${classes.w60p}`}>
            <Input
              placeholder="Select Your Bank..."
              className={`${classes.w60p} ${classes.mb10}`}
              inputProps={{
                'aria-label': 'description',
              }}
            />
            <TextField
              id="filled-number"
              placeholder="Account number"
              type="number"
              className={`${classes.w60p}`}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className={classes.cashPayment}>
          <div className={classes.cpaymentHeader}>
            <div className={classes.checkboxContainer}>
              <Checkbox
                value="checkedC"
                inputProps={{
                  'aria-label': 'uncontrolled-checkbox',
                }}
              />
            </div>
            <Typography>
              Credit Card
            </Typography>
          </div>
        </div>
      </div>
      <div className={`${classes.policyContainer} ${classes.mt40}`}>
        <div className={`${classes.impContent} ${classes.halfWidth}`}>
          <Typography className={classes.mb10}>Important</Typography>
          <Typography>
            Line for please fill every details for easier transaction<br />whatsoever here.
          </Typography>
        </div>
        <div className={`${classes.policyContent} ${classes.halfWidth}`}>
          <Typography className={classes.mb10}>Policy</Typography>
          <ul>
            <li>*Rental begins on the departure date, and ends on the return date.</li>
            <li>*Router will be delivered within 3 days before departure date.</li>
            <li>*Router will be collected within 3 days after return date.</li>
            <li>*Booking will only be confirmed upon payment made</li>
          </ul>
        </div>
      </div>  
    </div>
  );
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.stepperContainer}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepperRoot}>
          {steps.map((label, i) => {
            const isStart = i === 0 ? classes.activeStepLeft : null;
            const isEnd = i === activeStep ? classes.activeStepRight : null;
            const isActiveStep = i <= activeStep ? classes.activeStep : classes.inActiveStep;
            return (
              <Step
                key={label}
                className={`${isActiveStep} ${isStart} ${isEnd}`}
              >
                <StepLabel>
                  <span className={i <= activeStep ? classes.activeLabel : classes.inActiveLabel}>
                    {label}
                  </span>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>  
              <div className={classes.instructions}>{getStepContent(activeStep)}</div>
              <div className={classes.buttonContainer}>
                {activeStep !== 0 && (
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                )}
                
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.nextButton}>
                  {activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.summaryContainer}>
        <Typography variant="h5" component="h3">
          SUMMARY 
        </Typography>
        <div className={classes.summaryItem}>
          <Typography component="h4" className={classes.summaryTitle}>
            Wifly Router 
          </Typography>
          <div className={` ${classes.sumItemContent} ${classes.flexJcSb} ${classes.mb10} `}>
            <span>From:</span>
            <span>2019-10-12</span>
            <span>to:</span>
            <span>2019-10-19</span>
          </div>
          <div className={` ${classes.sumItemContent} ${classes.flexJcSb} `}>
            <span>Quantity:</span>
            <span>x 1</span>
            <span>Rent:</span>
            <span>P1750.00</span>
          </div>
        </div>
        <div className={classes.summaryInsurance}>
          <Typography component="h4" className={classes.summaryTitle}>
            Router Insurance 
          </Typography>
          <Typography component="p" className={`${classes.textCenter} ${classes.mb10}`}>
            1 (for all routers in booking)
          </Typography>
          <Typography component="p" className={classes.textCenter}>
            Insurance: P500.00 
          </Typography>
        </div>
        <div className={classes.summaryExtra}>
          <Typography component="h4" className={classes.summaryTitle}>
            Others
          </Typography>
          <div className={`${classes.sumItemContent} ${classes.flexJcFe} ${classes.flexAiC} ${classes.mb10}`}>
            <Typography component="h4" className={classes.mr20}>
              Deposit:
            </Typography>
            <span>
              P1500.00
            </span>
          </div>
          <div className={`${classes.sumItemContent} ${classes.flexJcFe} ${classes.flexAiC} ${classes.mb10}`}>
            <Typography component="h4" className={classes.mr20}>
              Service Fee:
            </Typography>
            <span>
              P75.00
            </span>
          </div>
          <div
            className={`${classes.sumItemContent} ${classes.flexJcFe} ${classes.flexAiC} ${classes.sumItemContent} ${classes.flexJcFe}`}>
            <Typography component="h4" className={classes.mr20}>
              Vat at 12%:
            </Typography>
            <span>
              P459.00
            </span>
          </div>
        </div>
        <span className={classes.mt40}>
          This is a sample text and will just hold anything that<br />
          whatever we are going to say. Thanks!
        </span>
        <Typography className={classes.summaryTotal}>
          Total: P4284.00
        </Typography>
      </div>    
    </div>
    
  );
}