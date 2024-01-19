/*
    Immutable Object
*/

const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}


console.log(yuJin);

/*
    Extensible - 확장 여부
*/

console.log(Object.isExtensible(yuJin)); //true    -> 확장가능

yuJin.position = 'vocal';
console.log(yuJin);     //추가 가능

Object.preventExtensions(yuJin);  //확장 불가능 변경
console.log(Object.isExtensible(yuJin)); //false    -> 확장x

yuJin.groupName = '아이브';
console.log(yuJin);     //추가x   *에러가 나오진 않는다

delete yuJin.position;
console.log(yuJin);     //삭제는 가능


/*
    Seal  - 봉인  -> configurable을 false로 바꾸는 명령어 -> 삭제,추가 불가
*/

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}
console.log(Object.isSealed(yuJin2)); //false  기본값 false
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); //true   -> configurable을 false로 바꿈
yuJin2.group='아이브';
console.log(yuJin2);  //추가x    -> Seal: true로 봉인 되어서
delete yuJin2.name;
console.log(yuJin2); //삭제x
yuJin2.name='코드팩토리';
console.log(yuJin2); //수정o 


/*
    Freezed ->  writable,configurable을 false로 바꿈  -> 추가,삭제,수정 불가
*/

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(Object.isFrozen(yuJin3)); //false
Object.freeze(yuJin3);  // true로 변경

yuJin3.groupName = '아이브';
delete yuJin3.name;
yuJin3.year=1000;
console.log(yuJin3);  //추가,삭제,수정 x



const yuJin4 = {
    name: '안유진',
    year: 2003,

    wonYoung:{
        name:'장원영',
        year:2002,
    }
};
Object.freeze(yuJin4);  //yuJin4 freeze= true
console.log(Object.isFrozen(yuJin4.wonYoung));  // yuJin4의 하위 객체는 false -> 영향 x    -> extensible,seal도 같음
