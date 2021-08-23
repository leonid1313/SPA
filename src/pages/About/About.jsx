import React from 'react'
import './About.css'

function About ({
  ...props
}) {

    return (
      <div className="container-about">
          <div className="container-card container-card-about">
        <a className="link" target="_blank" href={props.location.data.html_url}>
          <img className="image-about" src={props.location.data.owner.avatar_url} />
        </a>
        <div className="cardBody">
          <h1 className="login">Login: {props.location.data.owner.login}</h1>
          <h1 className="title">Title: {props.location.data.name}</h1>
          <p className="description">Description: {props.location.data.description}</p>
          <p className="rank-text">Rank: {props.location.data.stargazers_count}</p>
          <p className="date-text">Date: {props.location.data.created_at}</p>
        </div>
      </div>
      </div>
    )
}

export default About;