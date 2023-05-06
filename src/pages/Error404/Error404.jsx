import React from 'react'
import classes from './error404.module.css';
import Footer from '../../components/Footer/Footer';

const Error404 = () => {
  return (
    <div id={classes.error404}>
        <div id={classes.error_div}>
            <p>Error</p>
            <p id={classes.errorcode}>404 :(</p>
        </div>
        <div id={classes.error_div}>
            <p id={classes.pagenotfound}>
                Page Not Found !
            </p>
        </div>
        <Footer />
    </div>
  )
}

export default Error404;