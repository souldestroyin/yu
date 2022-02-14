function throttle(fn, time) {
  let timeout = null
  return function(...args) {
    if(timeout) {
      return
    }

    timeout = setTimeout(() => {
      fn.call(this, ...args)
      timeout = null
    }, time)
  }
}