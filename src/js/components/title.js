import React from 'react'


const Title = ({level, value}) => {
  const Heading = `h${level}`

  return <Heading>{value}</Heading>
}

export default Title