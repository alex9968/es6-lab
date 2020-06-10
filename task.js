//
// console.log('1');
// setTimeout(function() {
//   console.log('2');
//   new Promise(function(resolve) {
//     console.log('3');
//     resolve();
//
//   }).then(function() {
//     console.log('4')
//
//   })
//
// })
// console.log('5');
// setTimeout(function() {
//   console.log('6');
//   new Promise(function(resolve) {
//     console.log('7');
//     resolve();
//
//   }).then(function() {
//     console.log('8')
//   })
// })
// console.log('9');

function test() {
    console.log(1)
    setTimeout(function () {  // timer1
        console.log(2)
      }, 1000)
  
}

test();

setTimeout(function () {    // timer2
  console.log(3)
})

new Promise(function (resolve) {
    console.log(4)
    setTimeout(function () {  // timer3
        console.log(5)
      }, 100)
    resolve()
  
}).then(function () {
    setTimeout(function () {  // timer4
        console.log(6)
      }, 0)
    console.log(7)
  
})

console.log(8)

let setTimeoutCallBack = function() {
    console.log('我是定时器回调');
  
};
let httpCallback = function() {
    console.log('我是http请求回调');
  
}
