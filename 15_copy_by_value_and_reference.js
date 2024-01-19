/*
    copy by value 값에 의한 전달
    copy by reference 참조에 의한 전달

    1) 기본적으로 모든 primitive 값은  copy by value다 (String,number,boolean 등)
    2) 객체는 copy by reference다
*/


//copy by value
let original = '안녕하세요';
let clone = original;
console.log(original == clone); //true
console.log(original === clone); //true

clone += ' 안유진 입니다.';

console.log(original == clone); //false
console.log(original === clone); //false

console.log(original);
console.log(clone);

//----------------------------------------------------

//copy by reference
let originalObj ={
    name:'안유진',
    group: '아이브',
};
let cloneObj = originalObj;
console.log(originalObj == cloneObj); //true
console.log(originalObj === cloneObj); //true

originalObj.group = '코트팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj == cloneObj); //true
console.log(originalObj === cloneObj); //true

originalObj = {
    name: '최지호',
    group: '코트팩토리',
}
cloneObj = {
    name: '최지호',
    group: '코트팩토리',
}
console.log(originalObj == cloneObj); //false
console.log(originalObj === cloneObj); //false






const yuJin1 = {
    name:'안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}

console.log(yuJin1 === yuJin2); //true
console.log(yuJin1 === yuJin3); //false
console.log(yuJin2 === yuJin3); //false


/*
    정리
    - copy by value: 값을 복사하면 메모리 다른 공간에 할당이 된다.
        ex) let name = '안유진'
            A(name): 안유진
            복사 -> cloneName = name
            B(cloneName): 안유진

    - copy by reference: 값을 복사하면 메모리 다른 공간에 객체 데이터 '좌표'를 할당한다.
        ex) originalObj = {
                name: '최지호',
                group: '코트팩토리',
                }
        A(공간): name: '최지호',group: '코트팩토리'
        B(originalObj):  A좌표
        복사 -> cloneObj = originalObj
        C(cloneObj) = A좌표

*/


/*
    Spread Operator
    -완전 복사 -> 다른 메모리공간에 할당
    -키가 같으면 덮어씌여짐  -> 순서(위치)가 중요
*/
const yuJin4 = {
    ...yuJin3,
}
console.log(yuJin4);
console.log(yuJin4 === yuJin3); //false

//추가 가능
const yuJin5 = {
    year:2003,
    ...yuJin3,
}
console.log(yuJin5);

//순서!!!  -> 덮어씌여짐
const yuJin6 = {
    name:'코트팩토리',
    ...yuJin3,
}
console.log(yuJin6); //변경x     순서!!!!


//순서!!!
const yuJin7 = {
    ...yuJin3,
    name:'코트팩토리',
}
console.log(yuJin7); //변경o     순서!!!!


