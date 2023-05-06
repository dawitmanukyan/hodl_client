import {React, useEffect, useState} from 'react'
import classes from './Panel.module.css';
import hodl from './img/hodl.jpg';
import hunt from './img/hunt.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';

const Panel = () => {

    const {register, formState:{errors}, handleSubmit} = useForm();

    const api = 'http://127.0.0.1:8000/api/send-mail';

    const posts_api = 'http://127.0.0.1:8000/api/general_posts';

    const [post, setPost] = useState([]);

    const onSubmit = (data) => {
        axios.post(api, data)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(data);
    }
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios.get(posts_api)
        .then((res) => {
            setPost(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
  return (
    <div id={classes.pn}>
        <div className={classes.panel} style={{position: 'fixed'}}>
            {post.map((data) => {
                return (
                    <Link className={classes.postlink} to={'/new/'} onClick={() => {
                        Cookies.remove('cookieId');
                        Cookies.set('cookieId', data.id);
                    }}>
                        <div className={classes.postdiv}>
                            <div>
                                <img src={`http://localhost:8000/storage/${data.image}`} style={{borderRadius: '15px'}} className={classes.panelimg}/>
                                <p className={classes.postcode}>{data.id}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
            <div id={classes.formdiv}>
                <form id={classes.subform} onSubmit={handleSubmit(onSubmit)}>
                    <div id={classes.subdiv}>
                        <p id={classes.sub_p}>Subscribe to our newsletter</p>
                    </div>
                    <input type="text" placeholder='Enter your email' id={classes.email_inp}
                    {...register("mail", {
                        required: true
                    })} style={errors?.mail && {
                        border: '1px solid #e64646',
                        background: 'rgba(230, 70, 70, 0.16)'
                    }}/>
                    <button type='submit' id={classes.sub_btn}>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Panel;