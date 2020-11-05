const PENDING = 'pending'
const FULLFILED = 'fulfilled'
const REJECT = 'reject'

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = ''
    this.reason = ''

    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (val) => {
      if(this.status === PENDING){
        this.status = FULFILLED
        this.value = val
        //pending -> fulfilled 
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      if(this.status = PENDING){
        this.status = REJECT
        this.reason = reason
        //pending -> rejected
        this.onRejectedCallbackes.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    }catch(err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected){
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : value => value;

    onRejected = typeof onRejected === 'function' ? onRejected: err => { throw err }

    let promise2 = new Promise((resovle, reject) => {
      if(this.state === FUILFFILED){
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resovle, reject)
          }catch(e) {
            reject(e)
          }
        },0)
      }

      if(this.sstate === REJECTED) {
        setTimeout(() => {
          try { 
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
          }catch (e) {
            reject(e)
          }
        },0)
      }

      if(this.state === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try { 
              let x = onFulfilled(this.value)
              resovlePromise(promise2, x, resovle, reject) 
            }catch (e) {
              reject(e)
            }
          }, 0)
        })

       
      }
    })

  }
}

function resolvePromise(promise2, x, resolve, reject){
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise'))
  }

  let called;
  //if(x != null && )
}


MyPromise.catch = (fn) => {
  return this.then(null, fn)
}
MyPromise.resolve = val => {
  return new MyPromise(resolve => resolve(val))
}
MyPromise.reject = val => {
  return new MyPromise((_,reject )=> reject(val))
}
MyPromise.race = promises => {
  return new MyPromise((resolve, reject) => {
    //看哪个先执行resovle或者reject出结果
    promises.forEach(pro => pro.then(resovle, reject))
  })
}

MyPromise.all = promises => {
  return new MyPromise((resolve, reject) => {
    let index = 0;
    let result= [];
    if(promises.length === 0){
     resolve(result)
    }else{
      //传入了promise
      const processValue = (i, data) => {
        result[i] = data;
        if(++index === promises.length){
          resolve(result)
        }
      }

      for(let i = 0;i < promises.length; i++){
        MyPromise.resolve(promises[i]).then(data => {
          processValue(i, data)
        },err => {
          reject(err)
          return
        })
      }
    }
  })
}

new MyPromise((resolve, reject) => {
  if(1) {mise
    resolve('sucess')
  }else {
    reject('error')
  }
})
