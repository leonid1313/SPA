import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Search.css'

import InputSubmit from '../../components/InputSubmit/InputSubmit.jsx'
import CardList from '../../components/CardList/CardList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import { useLocalStorage } from '../../Hooks/UseLocalStorage'

function Search () {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [repos, setRepos] = useLocalStorage('repos', []);

  const searchRepos = async (keyword) => {
    await axios
      .get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(result => setRepos( result.data.items));
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
        {(repos.length === 0)
          ? <h1 className="title-error">No repositories</h1>
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
