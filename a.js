const success = 0
const p = new Promise((resovle, reject) => {
  if(success ) {
     resovle('sucess')
    //return 'sss'
  }else {
    reject('fail')
  }
  // setTimeout(() => {
  //   throw new Error('selferror')
  // },3000)
})

function P() {
  return p
}



console.log("hello https://tool.lu/");

function sleep(i) {
  setTimeout(() => {
    //return Promise.resolve()
  },i*1000)

  return Promise.resolve()
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(i)
  //   }, i*1000)
  // })
}

// sleep(2).then(() => {
//   console.log('5秒到了')
//
// })

async function f() {

  const res = await P().catch((res) => {
    console.log('res', res)
  })
  if(res){
    console.log('res2', res)
  }

  // try {
  //   const res = await P()
  //   console.log("res", res)
  //   aaf
  // }catch(err){
  //   //console.log("res", res)
  //   //const a = Object.values(err)
  //   console.log("err", err)
  // }
}

f()
console.log('end')
// p.then(res => {
//   console.log('res', res)
//   return 'sss'
//
// //  return Promise(reject => reject('res1'))
// })
//   .catch(err => console.log("err", err) )
//   .then(res => {
//
//     console.log('res2', res)
//   })
//   .then(res => {
//     console.log('res3', res)
//   })
