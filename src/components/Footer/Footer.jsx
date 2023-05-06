import React from 'react'
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div id={classes.footerdata}>
            <div id={classes.telelink}>
                <a id={classes.telelogo} href='/'>
                    <div id={classes.telelogo}></div>
                </a>
            </div>
            <div id={classes.footerlinks}>
                <Link className={classes.footerlink} to={'/disclaimer'}>Disclaimer</Link>
                <Link className={classes.footerlink} to={'/privacy'}>Privacy Policy</Link>
                <Link className={classes.footerlink} to={'/terms'}>Terms and Conditions</Link>
            </div>
            <div id={classes.telelink}>
                <p id={classes.support}>HODL © 2023 - support@hodl.fun</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;