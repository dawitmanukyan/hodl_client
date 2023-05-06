import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import classes from './New.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const New = () => {
    const id = Cookies.get('cookieId');

    const api = `http://127.0.0.1:8000/api/post/${id}`;

    const [news, setNews] = useState([]);

    useEffect(() => {
      axios.get(api)
      .then((res) => {
        setNews(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    },[])
  return (
    <div className={classes.news}> 
      <div>
      </div>
        <div id={classes.newsimg}>
          <img src={`http://localhost:8000/storage/${news.image}`} id={classes.newimg}/>
          <h2>{news.title}</h2>
          <p>{news.body}</p>
        </div>
      <div>
    </div>
        <Footer />
    </div>
  )
}

export default New;