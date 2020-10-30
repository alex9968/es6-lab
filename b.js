
function runAsync1(){
  var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
    //false && reject()
  });
  return p;
}


function runAsync2(){
  var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 1000);
    //false && reject()
  });
  return p;
}

runAsync1()
  .then(function(data){
        console.log(data);
        //return runAsync2();
        return '直接返回数据';  //这里直接返回数据
  })
  .then(function(data){
        console.log(data);
  })
  //       return '直接返回数据';  //这里直接返回数据
  // })
  // .then(function(data){
  //       console.log('ss', data);
  // });


