import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header.jsx'
import Search from './pages/Search/Search.jsx'
import About from './pages/About/About.jsx'
import Loader from './components/Loader/Loader.jsx'



function App () {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, []);

  return (
    <>
      {loader 
        ? (
          <>
            <Router>
              <Header />
              <Route path="/" exact component={Search} />
              <Route path="/about/:item" exact component={About}/>
            </Router>
          </>
          )
        :  <Loader/>
      }
    </>
  )
}

export default App;
