import {React, useState} from 'react'
import classes from '../../pages/Home/Home.module.css';
import HelenaWide from '../../pages/Home/img/HelenaWide.gif';
import crypto from '../../pages/Home/img/Cryptoira2.gif';

const Gifs = () => {

    const [found, setFound] = useState('Not found');

  return (
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
                <button className={classes.filterbtn}>🔥 Today's Hot</button>
                <button className={classes.filterbtn}>All time best</button>
                <button className={classes.filterbtn}>Presale</button>
                <button className={classes.filterbtn}>KYC</button>
                <button className={classes.filterbtn}>Airdrops</button>
                <button className={classes.filterbtn}>NFT</button>
                <button className={classes.filterbtn}>Filter</button>
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
    </div>
  )
}

export default Gifs;