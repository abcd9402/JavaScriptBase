/*
    변수 이름 지을때(필수)

    1)일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 이싿.
    2)특수기호는 언더스코어와 달러를 사용 할 수 있다.
    3)숫자로 이름을 시작 할 수 없다.
        ex)1Name, 2Hello
    4)키워드는 변수명으로 사용 할 수 없다.
        ex) var const = 'var';
*/

let codeFactory = '코드팩토리';
var $ive = '아이브';
const _yuJin = '안유진';

console.log(codeFactory);
console.log($ive);
console.log(_yuJin);

//   let 1name= 'no';     -> x
//   let const = 'ateen' - > x

/* 
    변수 이름 지을때(선호)

    1) camelCase - 대부분의 언어에서 많이 사용
    2) snake_case - 파이썬같은 언어에서 사용
    3) PascalCase -  C# 같은 마이크로소프트 계열의 언어에서 사용함

*/

//camelCase
const anYuJin = '안유진';
//snake_case
const an_yu_jin = '안유진';
//PascalCase
const AnYuJin = '안유진';
