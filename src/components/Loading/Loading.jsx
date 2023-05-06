import React from 'react'
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={classes.ldsdualring}></div>
    </div>
  )
}

export default Loading;