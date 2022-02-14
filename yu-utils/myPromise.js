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
    return new MyPromise((resolve, reject) => {
      if(this.state === FULLFILLED) {
        resolve(cb(this.value))
      }
  
      if(this.state = PENDING) {
        this.onFullfilledCbs.push(cb)
      }


    })
  }
}



new Promise((resolve, reject) => {
  resolve()

  reject()
})