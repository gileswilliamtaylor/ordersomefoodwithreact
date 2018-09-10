import React from 'react'
import { mql } from '../helpers'


class Sticker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stuck: false
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentWillMount() {
    window.addEventListener("scroll", this.onScroll)
  }

  getScrollTop() {
    return (window.scrollTop || document.body.scrollTop || document.documentElement.scrollTop)
  }

  onScroll() {
    const stuck = (this.getScrollTop() > 300 && mql.nonMobile.matches)

    this.setState({
      stuck
    })
  }

  render() {
    const {children, name, classname, id, stuckClassname} = this.props
    const stickyClassname = this.state.stuck ? stuckClassname : ""

    return (
      <div className={[classname, stickyClassname].join(" ")} id={id}>
        {children}
      </div>
    )
  }
}

export default Sticker
