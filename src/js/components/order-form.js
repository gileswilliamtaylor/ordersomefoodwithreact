import React from 'react'
import data from '../data/data'
import OrderStore from '../stores/order-store'
import Basket from './basket'
import Menu from './menu'
import MenuNav from './menu-nav'


export default class OrderForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      order: OrderStore.getAll(),
      courses: [],
      dishes: []
    }

    this.data = data.ref()
  }

  componentWillMount() {
    OrderStore.on("change", () => {
      this.setState({
        order: OrderStore.getAll()
      })
    })

    this.data.child("courses").on("value", snapshot => {
      this.setState({
        courses: snapshot.val()
      })
    })

    this.data.child("dishes").on("value", snapshot => {
      this.setState({
        dishes: snapshot.val()
      })
    })
  }

  render () {
    return (
      <div className="order-form">
        <MenuNav courses={this.state.courses} />
        <Menu courses={this.state.courses} dishes={this.state.dishes} />
        <Basket {...this.state} />
      </div>
    )
  }
}
