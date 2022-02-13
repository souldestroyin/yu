function debounce(fn, time) {
  let timeout = null

  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.call(this, ...args)
    }, time)
  }

}