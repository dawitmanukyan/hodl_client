import { React }from 'react'
import classes from './advertisement.module.css';
import { useState } from 'react';


const Advertisement = () => {

    const [showb, setB] = useState(true);

  return (
    <div id={classes.advertisement} style={
        showb ? {display: 'block'} : {display: 'none'}
    }>
        <div id={classes.close_icondiv}>
            <span class="material-symbols-outlined" id={classes.close_icon} onClick={() => setB(showb => false)}>
                close
            </span>
        </div>
        <div id={classes.imgbanner}>
            <img src='https://media1.giphy.com/media/wiErmTsopJMg6GR6Xu/giphy.gif?cid=6c09b952tn6pik3bwf7b8to1qyle6bsqkc9aork7xzjmg7rh&rid=giphy.gif&ct=s' width={'350px'}/>
        </div>
    </div>
  )
}

export default Advertisement;