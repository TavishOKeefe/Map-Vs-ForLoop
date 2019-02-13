import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import navBar from './Styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


function Header(props){
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<MenuIcon />}>
              </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <Link to="/">Home</Link><br/>
                    <Link to="/map">Maping</Link><br/>
                    <Link to="/versus">Vs</Link><br/>
                    <Link to="/loop">forLoops</Link>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
          </IconButton>

          <Typography variant="h6" color="inherit">
          Maps vs For Loop
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(navBar)(Header);
