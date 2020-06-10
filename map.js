let sy = Symbol("key1");
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);    // {Symbol(key1): "kk"}


var myMap = new Map();
var keyObj = {}
myMap.set(keyObj, "value");
myMap.get(keyObj); // "和键 keyObj 关联的值"
myMap.get({}); // undefined, 因为 keyObj !== {}
console.info("myMap", myMap)



