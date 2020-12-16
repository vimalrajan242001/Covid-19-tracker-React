import React from 'react'
import PropTypes from 'prop-types';
import {AppBar,Toolbar,Typography,useScrollTrigger,Slide} from '@material-ui/core'
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function Navbar(props) {
    return (
        <div>
         <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Covid-19 Data Tracker</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

        </div>
    )
}

export default Navbar
