import React from 'react'
import { smoothScroll } from '../helpers'
import Sticker from './sticker'


const MenuNav = ({ courses = [] }) => {
  return (
    <div className="left-column" id="left-column">
      <Sticker classname="sidebar" id="sidebar" stuckClassname="scrolling-sidebar">
        <ul id="courses">
          {courses.map(({id, course}) => {
            return <li key={id}>
              <a onClick={() => smoothScroll(id)} href="javascript: void(0)">{course}</a>
            </li>
          })}
        </ul>
      </Sticker>
    </div>
  )
}

export default MenuNav
