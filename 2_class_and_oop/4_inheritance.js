/*
    inheritance   상속
    -객체들 간의 관계를 구축하는 방법이다.
    -수퍼클래스 또는 부모클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
*/

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return  '여자 아이돌이 춤을 춥니다.'
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return  '남자 아이돌이 노래를 부릅니다.'
    }
}

//상속받은 부모클래스의 constructor 사용 가능
const yuJin = new FemaleIdolModel('안유진',2003);  
console.log(yuJin);
console.log(yuJin.dance());

const jiMin = new MaleIdolModel('지민',1995);
console.log(jiMin);
console.log(jiMin.sing());
//console.log(jiMin.dance());  //불가능 -> 에러


const cf = new IdolModel('코드팩토리',1992);
console.log(cf);
console.log(cf.name);
console.log(cf.company);
//console.log(cf.dance());  // 불가능  -> 자식꺼를 부모가 쓸 수 없다.


console.log(yuJin instanceof FemaleIdolModel);  //true
console.log(yuJin instanceof IdolModel);  //true   -> 상속받았기에 
console.log(yuJin instanceof MaleIdolModel);  //false  -> 아무관계 x
