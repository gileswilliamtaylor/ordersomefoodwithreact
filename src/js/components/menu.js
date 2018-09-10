import React from 'react'
import Course from './course'


const Menu = ({ courses, dishes }) => {
  return (
    <div className="menu" id="menu">
      {courses.map(({ id, course }) => <Course key={id} id={id} name={course} dishes={dishes} />)}
    </div>
  )
}

export default Menu
