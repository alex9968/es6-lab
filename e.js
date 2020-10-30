var arr = [ [ 2,1, 2 ], [3, 4, 5, 5], [ 7, 8,6,9, [11, 12, [12, 13, [14] ] ]  ], 10 ]

let res = [];

const   f =  (arr) => {
  for(let v of arr) {
    if(typeof v === 'number'){
      console.log('number', v)
      res.push(v)
    }else {
      console.log('array',v)
      f(v)
    }
  }
}

let fn = function(ary) {
  for(let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])){
      fn(item);
    } else {
      res.push(item);
    }
}
}
  // arr.forEach((v,i) => {
  //   if(typeof v === "number" ){
  //     return res.push(v)
  //   } else {
  //     return f(v)
  //   }
  // })

//f(arr)
// fn(arr);
// console.log("arr",res)
//
str = arr.replace(/(\[\]))/g, '');
str = '[' + str + ']';
res = JSON.parse(str);

console.log(res)
