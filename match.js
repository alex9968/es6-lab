var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/g);
//返回匹配到的数组
console.info(n)


//普通匹配
var regex = /hello/;
console.log( regex.test("hello")  ); // => true

//横向模糊匹配
var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex)  );
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]


//纵向模糊匹配
var regex = /a[123]b/g;
var string = "a0b a1b a2b a3b a4b";
console.log( string.match(regex)  );
// => ["a1b", "a2b", "a3b"]

