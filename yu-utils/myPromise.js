const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.onFullfilledCbs = []
    this.onRejectedCbs = []
    this.value = null
    this.reason = null


    function resolve(value) {
      if(this.state = PENDING) {
        this.state = FULLFILLED
        this.value = value
        this.onFullfilledCbs.forEach(cb => cb())
      }
    }

    function reject(reason) {
      if(this.state = PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.onRejectedCbs.forEach(cb => cb())
      }
    }


    executor(resolve, reject)
  }

  then(cb) {
    if(this.state === FULLFILLED) {
      cb()
    }

    if(this.state =PENDING) {
      this.cbs.push(cb)
    }
  }
}



new Promise((resolve, reject) => {
  resolve()

  reject()
})