import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import { Twitter, Facebook, Instagram, LinkedIn, YouTube, } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import FooterWave from 'assets/img/footer_wave.png';
import LogoColored from 'assets/img/logo_footer.png';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  fcC: {
    display: 'flex',
    flexDirection: 'column',
  },
  smC: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '70%',
  },
  scC: {
    display: 'flex',
    flexDirection: 'column',
    width: '18%',
    '& h4': {
      marginBottom: 30,
    },
    '& p': {
      fontSize: 14,
      marginBottom: 20,
      '& last-of-type': {
        marginBottom: 0,
      } 
    } 
  },
  lcC: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      marginTop: -25,
    }
  },
  iconContainer: {
    display: 'flex',
    height: 195,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    '& a': {
      marginRight: '5%',
      color: '#505050',
    }
  },
  footerLinks: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  waveImg: {
    backgroundImage: `url(${FooterWave})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    height: 56,
    width: '100%',
    marginTop: -56,
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
  
  return (
    <div className={classes.root}>
      <div className={classes.waveImg} />
      <div className={classes.footerLinks}>
        <div className={classes.fcC}>
          <div className={classes.lcC}>
            <img src={LogoColored} alt="logo-colored" />
            <Typography component="p">
              A place holder for language
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <Link href="#" className={classes.link}>
              <Facebook />
            </Link>
            <Link href="#" className={classes.link}>
              <Twitter />
            </Link>
            <Link href="#" className={classes.link}>
              <Instagram />
            </Link>
            <Link href="#" className={classes.link}>
              <LinkedIn />
            </Link>
            <Link href="#" className={classes.link}>
              <YouTube />
            </Link>
          </div>
        </div>
        <div className={classes.smC}>
          <div className={classes.scC}>
            <Typography component="h4">
              Wifly
            </Typography>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                App
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Features
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Deals
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Privacy Policy
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Terms of Service
              </Typography>
            </Link>
          </div>
          <div className={classes.scC}>
            <Typography component="h4">
              Company
            </Typography>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                About
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Data
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Investors
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Locations
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Departments
              </Typography>
            </Link>
          </div>
          <div className={classes.scC}>
            <Typography component="h4">
              People
            </Typography>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Mission
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Lifestyle
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Values
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Humans
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Careers
              </Typography>
            </Link>
          </div>
          <div className={classes.scC}>
            <Typography component="h4">
              Support
            </Typography>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Getting Started
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Flights
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Hotels
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Troubleshooting
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Billing and Payment
              </Typography>
            </Link>
          </div>
          <div className={classes.scC}>
            <Typography component="h4">
              Media
            </Typography>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                News
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Press Kit
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Research
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Search
              </Typography>
            </Link>
            <Link href="#" className={classes.link}>
              <Typography component="p">
                Media Enquiries
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;