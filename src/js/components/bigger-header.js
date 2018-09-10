import React from 'react'
import Title from './title'


const BiggerHeader = ({ title }) => {
  return (
    <header className="header bigger">
      <Title level="1" value={title} />
    </header>
  )
}

export default BiggerHeader
