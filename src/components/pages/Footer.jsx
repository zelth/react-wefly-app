import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
// import { Twitter, Facebook, Instagram, LinkedIn, YouTube, } from '@material-ui/icons';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FooterWave from 'assets/img/footer_wave.png';
import LogoColored from 'assets/img/logo_footer.png';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  waveImg: {
    backgroundImage: `url(${FooterWave})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    height: 56,
    width: '100%',
    marginTop: -56,
  },
  headerContainer: {
    display: 'flex',
    borderBottom: '1px solid #f6f6f6',
    padding: '0 0 10px 0',
  },
  logoContainer: {
    display: 'flex',
    width: '30%',
    '& img': {
      width: 149,
      height: 49,
    }
  },
  headerList: {
    display: 'flex',
    width: '70%',
    alignItems: 'flex-end',
    '& h6': {
      width: '20%',
      color: '#8d8d8d',
    }
  },
  mainContainer: {
    width: '90%',
    margin: '0 auto',
    paddingBottom: 50,
  },
  contentContainer: {
    display: 'flex',
  },
  leftContainer: {
    width: '30%'
  },
  rightContainer: {
    width: '70%',
    display: 'flex',
  },
  navigationItems: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: '#8d8d8d',
      marginTop: 30,
    }
  },
  siteIcons: {
    width: '65%',
    height: '81%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '& a': {
      color: '#858585'
    }
  }
}));

const Footer = () => {

  const classes = useStyles();
  
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const languages = [
    {
      value: 1,
      label: 'English',
    },
  ];
  
  const [language, setLanguage] = React.useState(1);

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.waveImg} />
      <div className={classes.mainContainer}>
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <img src={LogoColored} alt="logo-colored" />
          </div>
          <div className={classes.headerList}>
            <Typography variant="h6">
              Wifly
            </Typography>
            <Typography variant="h6">
              Company
            </Typography>
            <Typography variant="h6">
              People
            </Typography>
            <Typography variant="h6">
              Support
            </Typography>
            <Typography variant="h6">
              Media
            </Typography>
          </div>    
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.leftContainer}>
            <div className={classes.languageDropdown}>
              <TextField
                id="standard-select-language"
                select
                placeholder="English"
                className={classes.textField}
                value={language}
                onChange={handleChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                
                {languages.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.siteIcons}>
              <a color="textPrimary" href="/pricing">
                <TwitterIcon />
              </a>
              <a color="textPrimary" href="/pricing">
                <InstagramIcon />
              </a>
              <a color="textPrimary" href="/pricing">
                <LinkedInIcon />
              </a>
              <a color="textPrimary" href="/pricing">
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.navigationItems}>
              <a color="textPrimary" href="/pricing">
                App
              </a>
              <a color="textPrimary" href="/pricing">
                Features
              </a>
              <a color="textPrimary" href="/pricing">
                Deals
              </a>
              <a color="textPrimary" href="/pricing">
                Privacy Policy
              </a>
              <a color="textPrimary" href="/pricing">
                Terms of Service
              </a>
            </div>
            <div className={classes.navigationItems}>
              <a color="textPrimary" href="/pricing">
                About
              </a>
              <a color="textPrimary" href="/pricing">
                Data
              </a>
              <a color="textPrimary" href="/pricing">
                Investors
              </a>
              <a color="textPrimary" href="/pricing">
                Locations
              </a>
              <a color="textPrimary" href="/pricing">
                Departments
              </a>
            </div>
            <div className={classes.navigationItems}>
              <a color="textPrimary" href="/pricing">
                Mission
              </a>
              <a color="textPrimary" href="/pricing">
                Lifestyle
              </a>
              <a color="textPrimary" href="/pricing">
                Values
              </a>
              <a color="textPrimary" href="/pricing">
                Humans
              </a>
              <a color="textPrimary" href="/pricing">
                Careers
              </a>
            </div>
            <div className={classes.navigationItems}>
              <a color="textPrimary" href="/pricing">
                Getting Started
              </a>
              <a color="textPrimary" href="/pricing">
                Flights
              </a>
              <a color="textPrimary" href="/pricing">
                Hotels
              </a>
              <a color="textPrimary" href="/pricing">
                Troubleshooting 
              </a>
              <a color="textPrimary" href="/pricing">
                Billing and Payment
              </a>
            </div>
            <div className={classes.navigationItems}>
              <a color="textPrimary" href="/pricing">
                News
              </a>
              <a color="textPrimary" href="/pricing">
                Press Kit
              </a>
              <a color="textPrimary" href="/pricing">
                Research
              </a>
              <a color="textPrimary" href="/pricing">
                Search 
              </a>
              <a color="textPrimary" href="/pricing">
                Media Queries
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;