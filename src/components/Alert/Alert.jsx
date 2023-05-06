import React from 'react'
import classes from './Alert.module.css';

const Alert = () => {
  return (
    <div id={classes.alert_container}>
      <div id={classes.alert}>
          <p>To vote, first log in to your account !</p>
      </div>
    </div>
  )
}

export default Alert;