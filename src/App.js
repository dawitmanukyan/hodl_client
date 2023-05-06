import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import AddAirdrop from './pages/AddAirdrop/AddAirdrop';
import AddCoin from './pages/AddCoin/AddCoin';
import AddNft from './pages/AddNft/AddNft';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Privacy from './pages/Privacy/Privacy';
import classes from './styles/App.module.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Promote from './pages/Promote/Promote';
import Nfts from './pages/Nfts/Nfts';
import Airdrops from './pages/Airdrops/Airdrops';
import New from './pages/New/New';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Terms from './pages/Terms/Terms';
import Coin from './pages/Coin/Coin';
import Advertisement from './components/Advertisement/Advertisement';

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Header />
        <div style={{
          position: 'relative',
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center'
        }}>
            <div id={classes.viewall} style={{
              position: 'fixed'
            }}>
              <div id={classes.viewalldiv}>
                <Link to={'/news'} id={classes.viewlink}>View all news</Link>
              </div>
            </div>
        </div>

        <div className={classes.data}>
          
          <Panel />
            <div id={classes.pagedata}>
              <Advertisement />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/add-coin' element={<AddCoin />}/>
                <Route path='/add-airdrop' element={<AddAirdrop />}/>
                <Route path='/add-nft' element={<AddNft />}/>
                <Route path='/privacy' element={<Privacy />}/>
                <Route path='/news' element={<News />}/>
                <Route path='/promote' element={<Promote />}/>
                <Route path='/nfts' element={<Nfts />} />
                <Route path='/airdrops' element={<Airdrops />} />
                <Route path='/new' element={<New />} />
                <Route path='/disclaimer' element={<Disclaimer />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/*' element={<Error404 />} />
                <Route path='/coin' element={<Coin />} />
              </Routes>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
