import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Homepng from './img/home.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GoogleLogin } from 'google-login-react';
import Cookies from 'js-cookie';
import Profile from '../Profile/Profile';

const Header = () => {

  const singned = Cookies.get('sub');
  console.log(singned);

  const clientId = '149877806179-n3v8al5pm11h3a7rh0p4f8o4si9h35ce.apps.googleusercontent.com';

  const [moodIndex, setMoodIndex] = useState(null);
  const [bitcoin, setBitcoin] = useState('');
  const [ethereum, setEthereum] = useState('');
  const [bnb, setBnb] = useState('');
  const [show, setShow] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [logout, setLogout] = useState();
  const [marketCapData, setMarketCapData] = useState(null);

  const API_URL = 'https://api.coingecko.com/api/v3';

  const CRYPTOCURRENCIES = ['bitcoin', 'binancecoin', 'ethereum'];

  useEffect(() => {
    if(singned != undefined){
      axios.post(`http://127.0.0.1:8000/api/gusers/find/${singned}`)
      .then((res) => {
        console.log(res);
        setProfileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    axios.get(`${API_URL}/simple/price?ids=${CRYPTOCURRENCIES.join(',')}&vs_currencies=usd`)
    .then((res) => {
      const bitcoinPrice = res.data.bitcoin.usd;
      const bnbPrice = res.data.binancecoin.usd;
      const ethereumPrice = res.data.ethereum.usd;

      setBitcoin(bitcoinPrice);
      setEthereum(ethereumPrice);
      setBnb(bnbPrice);
    })

    axios.get('https://api.alternative.me/fng/')
    .then((res) => {
      const data = res.data.data[0];
      setMoodIndex(data.value);
    })
    .catch((err) => {
      console.log(err);
    })

    axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin,ethereum,binancecoin',
        vs_currencies: 'usd',
        include_market_cap: true
      }
    })
      .then(response => {
        setMarketCapData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
  }, []);

  const onSuccess = (res) => {
    Cookies.set('sub', res.sub);
    axios.post('http://127.0.0.1:8000/api/gusers/create', res)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const onFailure = (res) => {
    console.log('nope');
  }
  const signout = () => {
    Cookies.remove('sub');
    window.location.reload();
  }
  return (
    <header>
      <div id={classes.logodiv}>
      <Dropdown id={classes.dropmenu}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <span class="material-symbols-outlined" id={classes.menuicon}>currency_bitcoin</span>

      </Dropdown.Toggle>

      <Dropdown.Menu id={classes.dropdown_menu}>
        <Dropdown.Item>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>Market Cap</p>
            <p className={classes.crypto_value}>$1,207,788,147,707</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>BTC <span className={classes.percent}>1.02%</span></p>
            <p className={classes.crypto_value}>${bitcoin}</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>ETH <span className={classes.percent}>1.02%</span></p>
            <p className={classes.crypto_value}>${ethereum}</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
        <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>BNB <span className={classes.percent}>1.02%</span></p>
            <p className={classes.crypto_value}>${bnb}</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>Mood Index</p>
            <p className={classes.crypto_value}>Greed <span id={classes.greed_span}>{moodIndex}</span></p>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <div id={classes.headerdiv}>
          <Link to={'/'}>
            <div id={classes.header_logo}></div>
          </Link>
        </div>
        <Dropdown id={classes.dropmenu}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <span class="material-symbols-outlined" id={classes.menuicon}>menu</span>
      </Dropdown.Toggle>

      <Dropdown.Menu id={classes.dropdown_menu}>
        <Dropdown.Item href="/add-coin">
        <button className={classes.header_btn}>Add Coin</button>
        </Dropdown.Item>
        <Dropdown.Item href="/news">
        <button className={classes.header_btn}>News</button>
        </Dropdown.Item>
        <Dropdown.Item href="/promote">
        <button className={classes.header_btn}>Promote</button>
        </Dropdown.Item>
        {singned != undefined ? <div onClick={() => setShow(show => !show)}><Profile profileImg={profileData.picture} userName={profileData.given_name}/></div> : <button className={classes.header_btn} onClick={() => setShow(show => !show)}>Login</button>}
      </Dropdown.Menu>
          {/* <div id={classes.signinpanel} style={show ? {display: 'block'} : {display: 'none'}}>
            <div id={classes.contgoogle}>
              <div className={classes.gaccountlogin}>
                {singned != undefined ? <button onClick={signout} id={classes.signout}>sign out</button> : <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'}/>}
              </div>
            </div>
          </div> */}
    </Dropdown>
        <div id={classes.crypto_bar}>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>Market Cap</p>
            <p className={classes.crypto_value}>$1,207,788,147,707</p>
          </div>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>BTC <span className={classes.percent}>1.02%</span></p>
            <p className={classes.crypto_value}>${bitcoin}</p>
          </div>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>ETH <span className={classes.percent}>1.02%</span></p>
            <p className={classes.crypto_value}>${ethereum}</p>
          </div>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>BNB <span className={classes.percent}>1.02%</span></p>
            <p className={classes.crypto_value}>${bnb}</p>
          </div>
          <div className={classes.cryptocurrencies}>
            <p className={classes.crypto_header}>Mood Index</p>
            <p className={classes.crypto_value}>Greed <span id={classes.greed_span}>{moodIndex}</span></p>
          </div>
        </div>
      </div>
        <div id={classes.iconsnav}>
            <div id={classes.icons}>
              <Link to={'/'} className={classes.icon_link}>
                <div className={classes.header_icon} id={classes.icon_home}></div>
              </Link>
              <a className={classes.icon_link} href='https://t.me/hodlfun'>
                <div className={classes.header_icon} id={classes.icon_tele}></div>
              </a>
            </div>
            <nav>
                <Link to={'/add-coin'}>
                  <button className={classes.header_btn}>Add Coin</button>
                </Link>
                <Link to={'/news'}>
                  <button className={classes.header_btn}>News</button>
                </Link>
                <Link to={'/promote'}>
                  <button className={classes.header_btn}>Promote</button>
                </Link>
                {singned != undefined ? <div onClick={() => setShow(show => !show)}><Profile profileImg={profileData.picture} userName={profileData.given_name}/></div> : <button className={classes.header_btn} onClick={() => setShow(show => !show)}>Login</button>}
                <div id={classes.signinpanel} style={show ? {display: 'block'} : {display: 'none'}}>
                  {/* <div id={classes.lgtext}>{singned ? '' : 'Login'}</div> */}
                  <div id={classes.contgoogle}>
                    <div className={classes.gaccountlogin}>
                      
                      {singned != undefined ? <button onClick={signout} id={classes.signout}>sign out</button> : <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'}/>}
                    </div>
                  </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header;