import React, {useState} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.css'

function CardList ({
  items,
}) {
  const [valueOfSort, setValueOfSort] = useState(items)
    const onChangeStatus = (event) => {
      const { value } = event.target;
  
      switch (value) {
        case 'Sort by':
          setValueOfSort()
          break;
  
        case 'Rank':
          setValueOfSort(items.sort(function(a, b) {
            return b.stargazers_count - a.stargazers_count;
          }))
          break;
  
        case 'Name':
          setValueOfSort(items.sort(function(a, b) {
            return a.name.localeCompare(b.name);
          }))
          break;

          case 'Date':
            setValueOfSort(items.sort(function(a, b) {
            return parseFloat(b.created_at)- parseFloat(a.created_at);
          }))
          break;
  
        default:
          break;
      }
    }

    return (
      <>
        <select onChange={onChangeStatus}  className="sort">
          <option value="Sort by">Sort by</option>
          <option value="Date">Years</option>
          <option value="Rank">Rank</option>
          <option value="Name">Name</option>
        </select>
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
                item={item}
              />
            </>
          ))}
        </div>
      </>
    )
}

export default CardList
