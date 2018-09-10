import React from 'react'
import BiggerHeader from './components/bigger-header'
import OrderForm from './components/order-form'
import SmallerHeader from './components/smaller-header'


const title = "Order Some Food"

const App = () => {
  return (
    <>
      <BiggerHeader title={title} />
      <SmallerHeader title={title} />
      <OrderForm />
    </>
  )
}

export default App
