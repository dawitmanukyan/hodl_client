import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import classes from '../../components/Panel/Panel.module.css';
import classesnews from './News.module.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loading from '../../components/Loading/Loading';


const News = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = 'http://127.0.0.1:8000/api/posts';

  useEffect(() => {
    axios.get(api)
    .then((res) => {
      setNews(res.data);
      setLoading(false);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const posts = () => {
    return (
      <div className={classesnews.divsnews}>
        {
          news.map((data) => {
            return (
                <Link className={classes.postlink} to={`/new/`} onClick={() => {
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
            })
        }
      </div>
    )
  }

  return (
    <div className={classes.news}> 
        {loading ? <Loading /> : posts()}
      <div>
    </div>
        <Footer />
    </div>
  )
}

export default News;