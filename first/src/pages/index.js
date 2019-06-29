import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

//linking
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackgroundImage from '../images/kasaflowerbackground.jpg';
import KasalogoImage from '../images/kasalogo.png'
import AboutPageLayout from './AboutPage';
import FollowUsLayout from './FollowUsPage';
import EventsPageLayout from './EventsPage';
import StaffPageLayout from './StaffPage';
import MembershipLayout from './MembershipPage';
import kasatigernavimage from '../images/kasatigernav.png';

//singlescroll
// import { HashLink as Link } from 'react-router-hash-link';

const Backgroundimage = {
  paperContainer: {
    // TODO: CHANGE CSS BACKGROUND, the background repeats 
    height: '730px',
    width:'100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${BackgroundImage})`
  }
};

const Kasalogo = {
  logo: {
    // TODO: CHANGE CSS BACKGROUND, the background repeats 
    height: '400px',
    width:'400px',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    backgroundImage: `url(${KasalogoImage})`
  },
  //TODO: PUT LOGO NEXT TO USC KASA TOP LEFT CORNER
  navlogo: {
    height: '50px',
    width:'50px',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    backgroundImage: `url(${kasatigernavimage})`
  },
  USCTitle: {
  }
};


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1* 3),
    marginRight: theme.spacing(1* 3),
    [theme.breakpoints.up(900 + theme.spacing(3 * 2))]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(1* 8)}px 0 ${theme.spacing(1* 8)}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(1* 2),
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(1* 2),
    },
  },
  footer: {
    marginTop: theme.spacing(8),
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(6)}px 0`,
  },
});
// eslint-disable-next-line
const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Pricing(props) {
  const { classes } = props;
  
  function AboutPage () {
  
  }
  return (
    <Router>
    
    <React.Fragment>
      <CssBaseline />
      {/* top bar */}
        <AppBar position="static" style={{ background: '#FFFFFF' }} className={classes.appBar}>
          <Toolbar>
            
            { /* below is USC KASA font TODO: change font and font size*/ } 
            <Typography variant="h6" style={{ color: '#a82034' }} noWrap className={classes.toolbarTitle}>
              <Link to="/" style={{ textDecoration: 'none' , color: '#a82034'}}>USC KASA</Link>
            </Typography > { /* Buttons below are the buttons on top bar */}

              <nav>
                {/* TODO: put these style tags into proper functions */}
                  <Button style={{ color: '#a82034' }}>
                    <Link to="/About" style={{ textDecoration: 'none', color: '#a82034'}}>About</Link>
                  </Button>
                  <Button style={{ color: '#a82034' }}>
                    <Link to="/Events" style={{ textDecoration: 'none', color: '#a82034' }}>Events</Link>
                  </Button>
                  <Button style={{ color: '#a82034' }}>
                    <Link to="/Staff" style={{ textDecoration: 'none' , color: '#a82034'}}>Staff</Link>
                  </Button>
                  <Button style={{ color: '#a82034' }}>
                    <Link to="/Membership" style={{ textDecoration: 'none' , color: '#a82034'}}>Membership</Link>
                  </Button>
                  <Button style={{ color: '#a82034' }}>
                    <Link to="/FollowUs" style={{ textDecoration: 'none' , color: '#a82034'}}>Follow Us</Link>
                  </Button>
                  <Button style={{ color: '#a82034' }} variant="outlined">
                    Login
                  </Button>
              </nav>
          </Toolbar>
        </AppBar>
      <Route exact path="/" component={Home} />
      <Route path="/About/" component={AboutPageLayout} />
      <Route path="/Events/" component={EventsPageLayout} />
      <Route path="/Staff/" component={StaffPageLayout} />
      <Route path="/Membership/" component={MembershipLayout} />
      <Route path="/FollowUs/" component={FollowUsLayout} />
    </React.Fragment>
    
    </Router>

  );
}
function Home () {
  return (
    <div style={Backgroundimage.paperContainer}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={Kasalogo.logo}></div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', color: '#FFFFFF'}}>
        <h1>USC KASA</h1>
      </div>

    </div>
  );
  
};

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);