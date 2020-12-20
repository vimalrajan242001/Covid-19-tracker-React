import React, { Component } from 'react'
import classes from './Footer.module.css'
 class Footer extends Component {
    render() {
        return (
          <div>
            <footer className={classes.footer}>
              <span className={classes.credits}>
                Developed by <span className={classes.name}> <a href="mailto:vimalrajan242001@gmail.com">  Vimal </a></span>
              </span>
            </footer>
          </div>
        );
    }
}

export default Footer
