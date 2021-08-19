import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

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
            <BrowserRouter>
              <Header />
              <Route path="/" exact component={Search} />
              <Route path="/about" exact component={About}/>
            </BrowserRouter>
          </>
          )
        :  <Loader/>
      }
    </>
  )
}

export default App;
