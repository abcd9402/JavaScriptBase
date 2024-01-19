/*
    class  (첫문자는 대문자)
    -객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 
     변수와 메소드(함수)를 정의하는 일종의 틀이다.
*/


class IdolModel{
    name ='안유진' ;
    year = 2003;
}

const yuJin = new IdolModel();
console.log(yuJin);



// constructor - 생성자
class IdolModel2{
    name;  //주석해도 가능
    year;  //주석해도 가능

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
const yuJin2 = new IdolModel2('안유진',2003);
const gaeul = new IdolModel2('가을',2002);
const ray = new IdolModel2('레이',2003);
const wonYoung = new IdolModel2('장원영',2007);
console.log(yuJin2,gaeul,ray,wonYoung);
console.log(yuJin2.name, yuJin2.year);



//method   -  메소드
class IdolModel3{

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}
const yuJin3 = new IdolModel3('안유진',2003);
console.log(yuJin3.sayName());

console.log(typeof IdolModel3);  //function
console.log(typeof yuJin3);  //Object