import React, {useState} from 'react';
import './Card.css'

function Card ({
  link,
  image,
  title,
  description,
  rank,
  date,
}) {

  const [name, setName] = useState('Add to favourites')
  const [count, setCount] = useState("")

  const aboutPage = () => {
    window.location.assign('http://localhost:3000/about/');
  }

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
        <a className="link" href={link}>
          <img className="image" src={image} />
        </a>
        <div className="cardBody">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <p className="rank-text">Rank: {rank}</p>
          <p className="date-text">Date: {date}</p>
          <div>
            <button
              className="button-card button-card-about"
              onClick={(e) => {
                aboutPage(e)
              }} 
            >
            view more</button>
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
