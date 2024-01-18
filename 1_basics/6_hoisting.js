/*
    Hoisting
    -모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
*/

console.log('Hello');
console.log('World');
console.log('---------------');


// console.log(name);   // undefinded
// var name = '코드팩토리';
// console.log(name);  // 코트팩토리

var name;
console.log(name);   // undefinded
var name = '코드팩토리';
console.log(name);  // 코트팩토리

//console.log(yuJin);  // 에러
let yuJin = '안유진';  //const,let은 선언전에 사용 시 에러가 뜸