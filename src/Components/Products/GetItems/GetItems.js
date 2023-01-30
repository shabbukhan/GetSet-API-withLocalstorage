import React from 'react';
import './getitems.css'

const GetFromAPI = (props) => {

  const title = props.title;
  return (
    <li key={props.id} id={props.id}>
    <label htmlFor={title} className="dataItemContainer">
      <input type="checkbox" className='dataItem' onClick={props.setOnLocalStorage} id={props.id} value={title} />
      <span className='checkmark'></span>
      {title}
    </label>
    </li>
  )
}

export default GetFromAPI
