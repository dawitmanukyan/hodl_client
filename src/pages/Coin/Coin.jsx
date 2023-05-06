import {React, useEffect, useState} from 'react';
import classes from '../../pages/Home/Home.module.css';
import HelenaWide from '../../pages/Home/img/HelenaWide.gif';
import crypto from '../../pages/Home/img/Cryptoira2.gif';
import classescoin from './Coin.module.css';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Loading from '../../components/Loading/Loading';
import Cookies from 'js-cookie';

const Coin = () => {

    const loc = useLocation();
    const searchParams = new URLSearchParams(loc.search);
    const id = searchParams.get('i');
    console.log(id);

    const api = `http://127.0.0.1:8000/api/coin/${id}`;

    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(api)
        .then((res) => {
            setCoin(res.data);
            console.log(res);
            setLoading(loading => false)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const [found, setFound] = useState('Not found');
    const [rating, setRating] = useState(0);

    const data = () => {
        return (
            <div id={classescoin.cn_info}>
                <img src={'http://localhost:8000/storage/' + coin.logo} 
                height={'100px'}
                width={'100px'}
                />
                <div>
                    <h3 id={classescoin.coin_name}>{coin.name}</h3>
                    <div id={classescoin.infsdiv}>
                        <div className={classescoin.infocoin} id={classescoin.symbol}>{coin.symbol}</div>
                        <div className={classescoin.infocoin}>Votes <span className={classescoin.data_ab_coin}>{coin.likes}</span></div>
                        <div className={classescoin.infocoin}>Today <span className={classescoin.data_ab_coin}>3</span></div>
                        <div className={classescoin.infocoin}>1h <span className={classescoin.data_ab_coin}></span></div>
                        <div className={classescoin.infocoin}>24h <span className={classescoin.data_ab_coin}>+0.04%</span></div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className={classes.coindiv}>
    <div className={classes.homepage}>
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
            <div id={classescoin.coin_data_div}>
                <div id={classescoin.coin_data}>
                    <div id={classescoin.coin}>
                        <div id={classescoin.cndata_div}>
                            <div id={classescoin.all_datacn}>
                                {loading ? <Loading /> : data()}
                                <span id={classescoin.token}>Ethereum: 123456789 <span className="material-symbols-outlined" id={classescoin.copy_icon}>file_copy</span></span>
                                <div id={classescoin.cn_data}>
                                    <div className={classescoin.cn_data_div}>Market cap <span className={classescoin.data_ab_coin}>123456789</span></div>
                                    <div className={classescoin.cn_data_div}>Price <span className={classescoin.data_ab_coin}>{coin.price_usd}</span></div>
                                    <div className={classescoin.cn_data_div}>Launch <span className={classescoin.data_ab_coin}>{coin.launch_date}</span></div>
                                </div>
                            </div>
                            <div id={classescoin.coindata_btns}>
                                <Link className={classescoin.linkbtns} to={coin.telegram}>Telegram</Link>
                                <Link className={classescoin.linkbtns} to={'/'}>Charts</Link>
                                <Link className={classescoin.linkbtns} to={'/'}>Buy on PancakeSwap</Link>
                            </div>
                        </div>
                        <div id={classescoin.votebtn_div}>
                            <div id={classescoin.vt_btn}>
                                <button id={classescoin.btn_vote}>🚀 VOTE</button>
                                <p id={classescoin.youcan}>You can vote once every 24 hours</p>
                            </div>
                        </div>
                    </div>
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
        </div>

        <Footer />
    </div>
    </div>
  )
}

export default Coin