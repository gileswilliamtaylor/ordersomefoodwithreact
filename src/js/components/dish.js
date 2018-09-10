import React from 'react'
import dispatcher from '../dispatcher/dispatcher'


const Dish = ({ name, price, description, id }) => {
  const handleClick = () => {
    dispatcher.dispatch({
      data: id,
      type: "ADD_TO_ORDER"
    })
  }

  return (
    <li>
      <span className="dish-name">{name}</span>
      <span className="dish-price">£{(+price).toFixed(2)}</span>
      <blockquote>{description}</blockquote>
      <button type="button" className="menu-button" id={name.replace('\s','')} aria-label={name} onClick={handleClick}></button>
    </li>
  )
}

export default Dish
