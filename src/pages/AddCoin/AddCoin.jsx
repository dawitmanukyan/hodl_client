import React, { useState } from 'react'
import classes from '../AddCoinsStyles/Addcoin.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Success from '../../components/Success/Success';
import ReCAPTCHA from "react-google-recaptcha";

const AddCoin = () => {

    const {register, formState:{errors}, handleSubmit} = useForm();

    const [verifed, setVerifed] = useState();
    const [success, setSuccess] = useState(false);

    const api = 'http://127.0.0.1:8000/api/coin/create';

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('logo', data.logo[0]);
        
        if(verifed){
            axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                params: {
                    ...data
                }
            })
            .then((res) => {
                console.log(res);
                setSuccess(success => true);
            })
            .catch((err) => {
                console.log(err);
            })
        }else {
            setVerifed(verifed => false);
        }
    }
    function onChange(value) {
        value ? setVerifed(verifed => true) : setVerifed(verifed => false);
    }
  return (
    <div id={classes.addcoin}>
        <div id={classes.addbtnsdiv}>
            <div id={classes.addbtns}>
                <Link to={'/add-coin'}>
                    <button className={classes.add_btn} style={{background: '#31A8DC'}}>Add Coin</button>
                </Link>
                <Link to={'/add-airdrop'}>
                    <button className={classes.add_btn}>Add Airdrop</button>
                </Link>
                <Link to={'/add-nft'}>
                    <button className={classes.add_btn}>Add NFT</button>
                </Link>
            </div>
        </div>
        <div id={classes.addcoin_form_div}>
            <div id={classes.coinlinks}>
                <p>Coin info</p>
                <p>Links</p>
            </div>
            {success ? <Success data={'Coin successfully added !'}/> : ''}
            <form id={classes.addcoin_form} onSubmit={handleSubmit(onSubmit)}  enctype="multipart/form-data">
                <div className={classes.form_div}>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Logo</p>
                            <p className={classes.required}>Required</p>
                        </div>
                        <input type='file' id={classes.logofile}
                        {...register("logo", {
                            required: true
                        })} style={errors?.logo && {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}/>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Name</p>
                            <p className={classes.required}>Required</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. Bitcoin'
                        {...register("name", {
                            required: true
                        })} style={errors?.name && {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}/>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Symbol</p>
                            <p className={classes.required}>Required</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. BTC'
                        {...register("symbol", {
                            required: true
                        })} style={errors?.symbol && {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}/>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Description</p>
                            <p className={classes.required}>Required</p>
                        </div>
                        <textarea placeholder='e.g. Bitcoin is a decentralized digital currency' className={classes.addcoin_ar}
                        {...register("description", {
                            required: true
                        })} style={errors?.description && {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}></textarea>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Market Cap in USD</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. 150000'
                        {...register("mcap_usd", {
                            required: false
                        })}/>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Price in USD</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. 0.006'
                        {...register("price_usd", {
                            required: false
                        })}/>
                    </div>
                    <div id={classes.presale_div}>
                        <input type='checkbox' id={classes.presale_inpt}
                        {...register("price_usd", {
                            required: false
                        })}/>
                        <span id={classes.presaletext}>PRESALE</span>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Launch date</p>
                            <p className={classes.required}>Required</p>
                        </div>
                        <input className={classes.addcoin_inpt} type={'date'}
                        {...register("launch_date", {
                            required: true
                        })} style={errors?.launch_date&& {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}/>
                    </div>
                    <p className={classes.inptinfo}>Contract addresses</p>
                    <hr />
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Chain</p>
                            <p className={classes.required}>Required</p>
                        </div>                                 
                        <input className={classes.addcoin_inpt} placeholder='Select...'
                        {...register("chain", {
                            required: true
                        })} style={errors?.chain&& {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}
                        />
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Address</p>
                            <p className={classes.required}>Required</p>
                        </div>   
                        <input className={classes.addcoin_inpt}
                        {...register("address", {
                            required: true
                        })} style={errors?.address&& {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}
                        />
                    </div>
                </div>
                <div className={classes.form_div}>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Website</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. www.example.com'
                        {...register("website", {
                            required: false
                        })}/>
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Telegram</p>
                            <p className={classes.required}>Required</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. https://t.me/bitcoin'
                        {...register("telegram", {
                            required: true
                        })} style={errors?.telegram&& {
                            border: '1px solid #e64646',
                            background: 'rgba(230, 70, 70, 0.16)'
                        }}
                        />
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Twitter</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. https://twitter.com/bitcoin'
                        {...register("twitter", {
                            required: false
                        })}
                        />
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Discord</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. https://discord.gg/46URkm'
                        {...register("discord", {
                            required: false
                        })}
                        />
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Reddit</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. https://www.reddit.com/r/bitcoin/'
                        {...register("reddit", {
                            required: false
                        })}
                        />
                    </div>
                    <div>
                        <div className={classes.inptinform}>
                            <p className={classes.inptinfo}>Audit</p>
                        </div>
                        <input className={classes.addcoin_inpt} placeholder='e.g. https://www.audit/'
                        {...register("audit", {
                            required: false
                        })}
                        />
                    </div>
                    <div id={classes.captcha_div}>
                        <ReCAPTCHA
                            sitekey="6Lei5IglAAAAAG71Oi8B8JVM19qIzw9LTQT5337o"
                            onChange={onChange}
                        />
                        {verifed === false ? <p id={classes.invalid}>Invalid ReCaptcha !</p> : ''}
                        <p id={classes.addcoin_warning}>Токен будет удален при отсутствии активности в течение Н дней</p>
                    </div>
                </div>
                <div className={classes.add_div}>
                    <button id={classes.addcoinbutton}>Add Coin</button>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default AddCoin;