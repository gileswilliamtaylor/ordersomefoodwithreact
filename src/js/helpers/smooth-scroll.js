import getScrollTop from './get-scroll-top'


const smoothScroll = (destination, duration) => {
  destination = (typeof destination === "number")
    ? destination
    : document.getElementById(destination).offsetTop + 300

  duration = (typeof duration !== "undefined")
    ? duration
    : 500

  if (duration <= 0) {
    return
  }

  const difference = destination - getScrollTop()
  const perTick = difference / duration * 50

  setTimeout(() => {
    const position = getScrollTop() + perTick
    scrollTo(0, position)
  
    if (position === destination) {
      return
    }
  
    smoothScroll(destination, duration - 10)
  }, 10)
}

export default smoothScroll
