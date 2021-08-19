import React from 'react'
import Card from '../Card/Card.jsx'
import './CardList.css'

function CardList ({
  items,
}) {
    return (
      <div className="container">
        {items.map(item => (
          <>
            <Card
              key={item.id}
              link={item.html_url}
              title={item.name}
              description={item.description}
              image={item.owner.avatar_url}
              rank={item.stargazers_count}
              date={item.created_at}
            />
          </>
        ))}
      </div>
    )
}

export default CardList
