import React, {useState} from 'react';
import './Card.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Card ({
  image,
  title,
  rank,
  item,
}) {

  const [name, setName] = useState('Add to favourites')
  const [count, setCount] = useState("")

  const addToFavourite = () => {
    if(name === 'Add to favourites') {
      setName('Remove from favorites')
      setCount('Added to favorites')
    } else {
      setName('Add to favourites')
      setCount('')
    }
    
  }

    return (
      <div className="container-card">
          <img className="image" src={image} />
        <div className="cardBody">
          <h1 className="title">{title}</h1>
          <p className="rank-text">Rank: {rank}</p>
          <div>
            <button
              className="button-card button-card-about"
            >
              <Link 
                className="link-about"
                to={{
                  pathname: `/about/${item}`,
                  data: item,
                }}
              >
                About
              </Link>
            </button>
            {(name === 'Add to favourites') 
              ? <p className="default"></p>
              :<div className="count">{count}</div>
            }
            <button
              className="button-card button-card-favourite"
              onClick={addToFavourite}
            >
              {name}
            </button>
          </div>
        </div>
      </div>
    )
}

export default Card
