import React from 'react'
import Dish from './dish'
import Title from './title'


const Course = ({ name, id, dishes }) => {
  return (
    <div id={id}>
      <Title level="4" value={name} />
      <ul>
        {
          dishes
            .filter(dish => dish.course === id)
            .map((props) => <Dish key={props.id} {...props} />)
        }
      </ul>
    </div>
  )
}

export default Course
