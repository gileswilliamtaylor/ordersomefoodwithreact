import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'
import data from '../data/data'


class OrderStore extends EventEmitter {
  constructor() {
    super()
    this.order = []
    this._open = false

    const dishesRef = data.ref().child("dishes")

    dishesRef.on("value", snapshot => {
      this.dishes = snapshot.val()
    })
  }

  findDish(dishes, id) {
    return dishes.find(element => element.id === id)
  }

  addToOrder(id) {
    const foundDishInOrder = this.findDish(this.order, id)
    const dish = Object.assign({}, this.findDish(this.dishes, id))

    if (foundDishInOrder && foundDishInOrder.id) {
      foundDishInOrder.quantity++
      foundDishInOrder.price += dish.price
    } else {
      dish.quantity = 1
      this.order.push(dish)
    }

    this.emit("change")
  }

  removeFromOrder(id) {
    const foundDishInOrder = this.findDish(this.order, id)
    const dish = Object.assign({}, this.findDish(this.dishes, id))

    if (foundDishInOrder && foundDishInOrder.quantity > 1) {
      foundDishInOrder.quantity--
      foundDishInOrder.price -= dish.price
    } else {
      const index = this.order.indexOf(foundDishInOrder)
      this.order.splice(index, 1)
    }

    this.emit("change")
  }

  getAll() {
    return this.order
  }

  open() {
    this._open = true
    this.emit("change")
  }

  close() {
    this._open = false
    this.emit("change")
  }

  getOpen() {
    return this._open
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_TO_ORDER": {
        this.addToOrder(action.data)
        break
      }
      case "REMOVE_FROM_ORDER": {
        this.removeFromOrder(action.data)
        break
      }
      case "OPEN": {
        this.open()
        break
      }
      case "CLOSE": {
        this.close()
        break
      }
    }
  }
}

const orderStore = new OrderStore
dispatcher.register(orderStore.handleActions.bind(orderStore))

export default orderStore
