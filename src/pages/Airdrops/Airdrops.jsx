import {React, useEffect, useState} from 'react';
import classes from '../Home/Home.module.css';
import HelenaWide from '../Home/img/HelenaWide.gif';
import crypto from '../Home/img/Cryptoira2.gif';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'js-cookie';
import Alert from '../../components/Alert/Alert';

const Airdrops = () => {
    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(false);
    const [ar, setAr] = useState([]);

    const api_url = 'http://127.0.0.1:8000/api/most_airdrops';

    const api = 'http://127.0.0.1:8000/api/like/airdrop';
    const apiunlike = 'http://127.0.0.1:8000/api/unlike/airdrop';

    const sid = Cookies.get('sub');
    Cookies.remove('cookieId');

    useEffect(() => {
        axios.post(api_url,{
            userid: sid
        })
        .then((res) => {
            const ids = Object.values(res.data.likes).map(obj => Number(obj.post_id));
            setCoin(res.data.coins);
            setAr(ids);
            setLoading(loading => false);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    const [found, setFound] = useState('Not found');
    const [rating, setRating] = useState(0);

    const likeadd = (id) => {
        axios.post(api, {
            userid: sid,
            id
        })
        .then((res) => {
            window.location.reload();
        })
        .catch((err) => {})
    }

    const likeless = (id) => {
        axios.post(apiunlike, {
            userid: sid,
            id
        })
        .then((res) => {
            window.location.reload();
        })
        .catch((err) => {})
    }

    function table() {
        return (
        <table width={'98%'}>
            <thead id={classes.thead}>
                <th>Asset</th>
                <th>Symbol</th>
                <th>End date</th>
                <th>Reward</th>
                <th>Audit</th>
                <th>Upvotes</th>
            </thead>
            <tbody id={classes.tbody}>
                {coin.map((data) => {
                    return (
                    <tr className={classes.tabletrs}>
                        <td>
                            <div id={classes.asset_div}>
                                <img src={'http://127.0.0.1:8000/storage/' + data.logo} width={'50px'} height={'50px'}/>
                                <b id={classes.cn_name}>{data.name}</b>
                                {data.kyc ? <span class="material-symbols-outlined" id={classes.verifed}>verified_user</span> : ''}
                            </div>
                        </td>
                        <td>{data.symbol}</td>
                        <td>{data.end_date}</td>
                        <td>{data.reward}</td>
                        <td>{data.audit}</td>
                        <td className={classes.btntd}>                                  
                            <button id={classes.tablebtn} onClick={() => {
                                if(Cookies.get('sub') != undefined){
                                    if(ar.includes(data.id)){
                                        likeless(data.id)
                                    }else {
                                        likeadd(data.id)
                                    }
                                }else {
                                    setAlert(alert => true);
                                }
                            }} style={ar.includes(data.id) && Cookies.get('sub') != undefined ? {background: '#31A8DC',color: '#fff'} : {}}>
                                <span id={classes.rating}>🚀</span>
                                <span id={classes.rating}>{data.likes}</span>
                            </button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        )
    }


  return (
    <div className={classes.homepage}>
    {alert ? <Alert /> : ''}
    <div id={classes.posters}>
        <div id={classes.imgdiv}>
        <img src={HelenaWide} id={classes.im}/>
        </div>
        <div id={classes.cryptodiv}>
            <div id={classes.cryptoposters}>
                <img src={crypto} className={classes.crypto_poster}/>
                <img src={crypto} className={classes.crypto_poster}/>
                <img src={crypto} className={classes.crypto_poster}/>
            </div>
        </div>
        <div id={classes.procn}>
            <div id={classes.procndata}>
                <div id={classes.promoted}>
                    <p>💎Promoted coins</p>
                    <p>Symbol</p>
                    <p>24h</p>
                    <p>Market Cap</p>
                    <p>Audit</p>
                    <p>Launch</p>
                    <p>Upvotes</p>
                </div>
                <div id={classes.cndata}>   
                    <p>{found}</p>
                </div>
            </div>
        </div>
        <div id={classes.filtbuttonsdiv}>
            <div id={classes.filtbuttons}>
            <Link to={'/'}>                    
                        <button className={classes.filterbtn}>🔥 Today's Hot</button>
                    </Link>
                    <button className={classes.filterbtn}>All time best</button>
                    <button className={classes.filterbtn}>Presale</button>
                    <button className={classes.filterbtn} onClick={() => {
                        axios.get('http://127.0.0.1:8000/api/kyc/coin')
                        .then((res) => {
                            console.log(res.data.airdrops);
                            // const ids = Object.values(res.data.likes).map(obj => Number(obj.post_id));
                            setCoin(res.data.airdrops);
                            // setAr(ids);
                            // setLoading(loading => false);
                        })
                        .catch((err) => console.log(err))
                    }}>KYC</button>
                    <Link to={'/airdrops'}>                    
                        <button className={classes.filterbtn} style={{background: '#2E2C40'}}>Airdrops</button>
                    </Link>
                    <Link to={'/nfts'}>                    
                        <button className={classes.filterbtn}>NFT</button>
                    </Link>
                    <Dropdown id={classes.drp}>
                        <Dropdown.Toggle id="dropdown-basic" className={classes.filterbtn} style={{background: '#2E2C40'}}>
                        <span class="material-symbols-outlined">filter_alt</span>
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={classes.dropItemsmenu}>
                            <Dropdown.Item href="#/action-1" className={classes.dropItem}>
                                <span class="material-symbols-outlined">backspace</span>
                                Reset filter
                            </Dropdown.Item>
                            <Dropdown.Item href="/audit" className={classes.dropItem}>
                                <span>Audit</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <input placeholder='Search..' className={classes.filterinp}/>
                    <p className={classes.coinsupt} id={classes.coinsupt_notresp}>Coins can be upvoted every 24h</p>
                    <select id={classes.selcoins}>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
            </div>
        </div>
        <div id={classes.tablediv}>
            {loading ? <Loading /> :table()}
        </div>
    </div>
    <Footer />
</div>
  )
}

export default Airdrops;