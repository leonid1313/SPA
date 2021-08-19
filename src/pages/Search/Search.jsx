import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Search.css'

import InputSubmit from '../../components/InputSubmit/InputSubmit.jsx'
import CardList from '../../components/CardList/CardList.jsx'
import * as ReactBootStrap from 'react-bootstrap'
import Pagination from '../../components/Pagination/Pagination.jsx'

function Search () {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);


  const searchRepos = async (keyword) => {
    await axios
      .get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(result => setRepos( result.data.items ));

      setLoading(true);
  }

  useEffect(() => {
    searchRepos('')
  }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <div className="container-search">
        <InputSubmit
          onSearch={value => searchRepos(value)}
        />
        {/* {loading
          ? <CardList items={repos} />
          : <ReactBootStrap.Spinner animation="border" />
        } */}
        {(repos.length === 0)
          ? <div>No repositories</div>
          : <CardList items={currentPosts}/>
        }
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={repos.length}
          paginate={paginate}
        />
      </div>
    )
}

export default Search
