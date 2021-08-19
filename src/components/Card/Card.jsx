import React from 'react';
import './Card.css'

function Card ({
  link,
  image,
  title,
  description,
  rank,
  date,
}) {

  const aboutPage = () => {
    window.location.assign('http://localhost:3000/about/');
  }

  const addToFavourite = () => {
    console.log('added');
  }

    return (
      <div className="container">
        <a href={link}>
          <img className="image" src={image} />
        </a>
        <div className="cardBody">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <p>{rank}</p>
          <p>{date}</p>
          <div>
            <button 
              onClick={(e) => {
                aboutPage(e)
              }} 
            >
            view more</button>
            <button
              onClick={addToFavourite}
            >
              Add to favourites
            </button>
          </div>
        </div>
      </div>
    )
}

export default Card
