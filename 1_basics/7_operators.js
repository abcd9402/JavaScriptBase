/*
    덧셈,뺼셈,곱셈,나눗셈,나머지
*/

console.log(10+10); //덧셈
console.log(10-10); //뺄셈
console.log(10*10); //곱하기
console.log(10/10); //나누기
console.log(3%10); //나머지

console.log(10*(10+10));   //200

let number = 1;

number++;   //2
number--;   //1

//연산자의 위치

let result = 1;

result = number++;   // result=1  number=2
result = ++number;   // result=2  number=2


/*
    숫자 타입이 아닌 타입에 +ㅡ- 사용하면 어떻게 될까?
*/

let sample = '99';
console.log(typeof +sample)   //number로 바뀜      99

sample = '안유진';
console.log(typeof +sample)   //NaN (Not a Number)

/*
    할당 연산자
*/
number =100;
number += 10;   // number=number+10       110     

/*
    비교 연산자

    1)값의 비교
    2)값과 타입의 비교
*/

//타입은 비교x
console.log(5==5); //true
console.log(5!=5); //false
console.log(5=='5'); //true
console.log(true == 1); //true
console.log(true == '1'); //true



// 타입까지 비교
console.log(5 === 5); //true
console.log(5 !== 5); //false
console.log(5 === '5'); //fasle
console.log(true === 1); //false
console.log(true === '1'); //false


/*
    대소 관계 비교 연산자
*/


console.log(100>1); //true
console.log(100<1); //false
console.log(100>=1); //true


/*
    삼항 조건 연산자
*/
//  조건? 맞을때 : 틀릴때
console.log(10>0? '맞음':"틀림");   //맞음
console.log(10<0? '맞음':"틀림");   //틀림

/*
    논리 연산자
*/
// &&는 조건 둘다 true여야 true
console.log(true && true);  //true
console.log(true && false); //false

// ||는 조건 중 하나만 true여도 true
console.log(true || true);  //true
console.log(true || false); //true
console.log(false || false); //false

// &&사용 시 좌측이 true면 우측 값 변환 false면 좌측 값 변환
console.log(true && '아이브');  //아이브
console.log(false && '아이브');  //false
// ||사용 시 좌측이 true면 좌측 값 변환 false면 우측 값 변환
console.log(true || '아이브');  //true
console.log(false || '아이브');  //아이브


/*
    지수 연산자
*/

console.log(10 ** 3);  //1000 

/*
    null 연산자
*/

let name;
console.log(name);  //undefinded

name = name?? '코드팩토리';   // ??는 좌측값이 undefinded거나 null 이면 우측값을 저장
console.log(name); //코드팩토리
name = name?? '아이브';
console.log(name); //코드팩토리

