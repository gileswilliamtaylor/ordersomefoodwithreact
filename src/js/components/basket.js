import React from 'react'
import OrderStore from '../stores/order-store'
import BasketItem from './basket-item'
import Sticker from './sticker'
import Title from './title'


const EmptyBasket = shouldRender => {
  if (shouldRender) {
    return (
      <div className="empty-basket-message" id="empty-basket">
        <p>Uh oh, it looks like you have no food in your basket!</p>
      </div>
    )
  }
}

const MinimumSpend = shouldRender => {
  if (shouldRender) {
    return (
      <div className="under-minimum-spend" id="under-minimum-spend">
        <p className="statement">Minimum spend is</p>
        <p className="statement-price">£15.00</p>
      </div>
    )
  }
}

const OurFee = shouldRender => {
  if (shouldRender) {
    return (
      <div className="our-fee" id="our-fee">
        <p className="statement">Our fee</p>
        <p className="statement-price">£2.00</p>
      </div>
    )
  }
}

const OrderTotal = (shouldRender, total) => {
  if (shouldRender) {
    return (
      <div className="total" id="total">
        <p className="statement">Total</p>
        <p className="statement-price total-price">
          £{total.toFixed(2)}
        </p>
      </div>
    )
  }
}

const BuyNowButton = shouldRender => {
  if (shouldRender) {
    return (
      <button className="buy-now" id="buy-now" onClick={() => alert("Sorry, we've just closed")} type="button">
        Buy now
      </button>
    )
  }
}

const calcSubTotal = order => {
  return order.reduce((acc, {price}) => {
    return acc + (+price)
  }, 0)
}

const calcTotal = (subTotal, fee) => {
  if (subTotal > 15) {
    return subTotal + fee
  }
  return subTotal
}

const Basket = ({ order, fee = 2 }) => {
  const subTotal = calcSubTotal(order)
  const total = calcTotal(subTotal, fee)
  const visible = (OrderStore.getOpen()) ? 'is-visible' : ''

  return (
    <div className={['right-column', visible].join(' ')}>
      <Sticker classname="my-order" id="my-order" stuckClassname="scrolling-order">
        <Title level="3" value="My Order" />
        {EmptyBasket(!order.length)}
        <div className="basket" id="basket">
          <div className="order-container" id="order-container">
            <ul className="order" id="order">
              {order.map((props, index) => {
                return <BasketItem key={index} {...props} />
              })}
            </ul>
          </div>
          {MinimumSpend(subTotal <= 15 && order.length)}
          {OurFee(subTotal > 15)}
          {OrderTotal(order.length, total)}
          {BuyNowButton(subTotal > 15)}
        </div>
      </Sticker>
    </div>
  )
}

export default Basket
