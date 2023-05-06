import React from 'react'
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div id={classes.profile_data}>
        <img src={props.profileImg} width={'45px'} height={'45px'} id={classes.profile_img}/>
        <p id={classes.username}>{props.userName}</p>
    </div>
  )
}

export default Profile;