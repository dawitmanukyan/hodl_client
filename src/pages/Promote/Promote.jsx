import React from 'react';
import Footer from '../../components/Footer/Footer';
import classes from './Promote.module.css';
import ReactGA from 'react-ga';

const Promote = () => {

  return (
    <div style={{
      width: '100%',
    }}>
        <div id={classes.promote}>
          <div id={classes.pr}>
            <h2 id={classes.promoteheader}>Promote your coin</h2>
            <div id={classes.pr_div}>
              <div id={classes.data_div}>
                <div id={classes.daily_users}>
                  <div id={classes.gr_icn}>
                    <p class="material-symbols-outlined" id={classes.group_icn}>group</p>
                  </div>
                  <p id={classes.users_num}>50,000 Daily Users</p>
                  <p>From Google Analytics</p>
                </div>
                <div id={classes.subs}>
                  <span class="material-symbols-outlined" id={classes.group_icn}>mark_as_unread</span>
                  <div>
                    <p id={classes.users_num}>10,200</p>
                    <p>Newsletter subscribers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p></p>
              <p></p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Promote;