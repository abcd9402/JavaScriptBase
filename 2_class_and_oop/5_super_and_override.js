/*
    Super and Override

    Super:부모클래스를 의미
    Override: 함수 재정의   -> 부모의 함수를 재정의 하는 방법
*/

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    constructor(name,year,part){
        super(name,year);   //부모클래스 호출
        this.part=part;
    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진',2003,'보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영',2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());

console.log(yuJin.sayHello());  //함수를 재정의했다. -> override