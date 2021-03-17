import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/project-icon.jpg';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [compete, setCompete] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  //logout compete

  const logoutComp = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/compete');

    setCompete(null);
  };
//user
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  //compete
  useEffect(() => {
    const token = compete?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logoutComp();
    }

    setCompete(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  if (user?.result?.isUser){
  return (
    <div>
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Projects-Forum</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>):
          (<div className={classes.profile}><Button component={Link} to="/auth" variant="contained" color="primary">Sign In as client </Button>
       <Button component={Link} to="/compete" variant="contained" color="primary">Sign In as compete</Button></div>)}
      </Toolbar>
      
      </AppBar>
      </div>)}
      else return(
        <div>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Visit as guest</Typography>
            <img className={classes.image} src={memories} alt="icon" height="60" />
          </div>
    
          <Toolbar className={classes.toolbar}>
            {user?.result ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </div>):
              (<div className={classes.profile}><Button component={Link} to="/auth" variant="contained" color="primary">Sign In as client </Button>
           <Button component={Link} to="/compete" variant="contained" color="primary">Sign In as compete</Button></div>)}
          </Toolbar>
          
          </AppBar>
          </div>




      )
      
     
};

export default Navbar;
