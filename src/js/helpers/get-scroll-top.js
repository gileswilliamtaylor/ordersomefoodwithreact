const getScrollTop = () => {
  return (window.scrollTop || document.body.scrollTop || document.documentElement.scrollTop)
}

export default getScrollTop
