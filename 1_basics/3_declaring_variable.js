/*
    1)var - 더이상 쓰지 않는다.
    2)let - 
    3)cont - 

*/ 

var name = '코드팩토리';
console.log(name);

let ive = '아이브';
console.log(ive);
// let,var로 선언 시 값을 추후 변경할 수 있다.
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';  -> 불가능 const는 

/* 
선언과 할당
-선언: 변수를 선언하는 것    ex) var name
-할당: 선언한 변수에 데이터를 넣는것  ex) name = '이름'
-변수를 선언만 할 시 undefinded가 됨

    *const의 경우에는 선언과 할당을 동시에 해야한다 
*/