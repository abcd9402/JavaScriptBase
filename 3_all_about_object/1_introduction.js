/*
    All About Objects

    객체를 선언할때 사용 할 수 있는 방법들
    1) object를 생성해서 객체 생성 -> 기본기 {}
    2) class를 인스턴스화해서 생성 - class와 OOP
    3) function을 사용해서 객체 생성
*/

//1번 방법
const yuJin = {
    name:'안유진',
    year: 2003,
};
console.log(yuJin);


//2번 방법
class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    };
}
console.log(new IdolModel('안유진',2003));



//3번 방법

//생성자 함수
function IdolFunction(name,year){

    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을',2002);  //this로 할당한 경우에만 new 사용
console.log(gaEul);


function Test(name,year){
    const iii={
        name:name,
        year:year
    };
    return iii;
}
const qqq = Test('222',111);
console.log(qqq);