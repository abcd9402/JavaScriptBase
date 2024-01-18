/*
    타입 변환
    1)명시적
    2)암묵적
*/

let age =32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge,stringAge);    //string 32   -> number - string 변환

//암묵적
let test =age+'';
console.log(typeof test, test); //string 32 -> number - string 변환

console.log('98'+ 2);    // 982
console.log('98'* 2);    // 196
console.log('98'- 2);    // 96

//명시적 변환 몇가지 더
console.log(typeof (99).toString());   //String
console.log(typeof (true).toString());   //String
console.log(typeof (Infinity).toString());   //String

console.log(typeof parseInt('0'))  //number
console.log(typeof parseFloat('0.99'))  //number


// Boolean 변화  값이 있으면 true 없으면 false
// 글자없으면, 값이 없다, 0 -> false

console.log(!'x'); //false
console.log(!!'x'); //true

console.log(!!0);   //false
console.log(!!'0'); //true

console.log(!!{}); //true
console.log(!![])//true
