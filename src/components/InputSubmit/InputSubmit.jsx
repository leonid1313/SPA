import React, { useState } from 'react'
import './InputSubmit.css'

function InputSubmit ({
  onSearch,
}) {
  const [value, setValue] = useState('');
  const [valueDirty, setValueDirty] = useState(false);
  const [valueError, setValueError] = useState('Cannot be empty');

  const changeValue = (event) => {
    setValue(event.target.value)
  }

  const submitValue = () => {
    setValueDirty(false)
    onSearch(value)
  }

  const blurHandler = (event) => {
    switch(event.target.name) {
      case 'search':
        setValueDirty(true)
        break
    }
  }

    return (
      <div>
        <form
            className="form-container"
            onSubmit={(event) => event.preventDefault()}
        >
        {(valueDirty && valueError)
          ? <div>{valueError}</div>
          : <div className="default"></div>
          
        }
        <input
          className="search"
          name="search"
          placeholder="Search Github Repositories"
          type="text"
          value={value}
          onChange={event => changeValue(event)}
          onBlur={event => blurHandler(event)}
        />
        <button 
          className="button-input"
          onClick={() => submitValue()}
        >
          Search
        </button>
        </form>
      </div>
    )
}

export default InputSubmit;