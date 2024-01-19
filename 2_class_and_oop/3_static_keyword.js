/*
    Static Keyword
*/

class IdolModel{
    name;
    year;
    static gourpName = '아이브';
    gender;

    constructor(name,year){
        this.name= name;
        this.year= year;
    };

    static returnGroupName(){
        return '아이브';
    }

}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);  //groupName은 객체 귀속 x
console.log(IdolModel.gourpName);    //아이브     -> static은 객체가 아닌 클래스에 귀속이 된다.
//console.log(yuJin.returnGroupName());  //불가능  -> 에러
console.log(IdolModel.returnGroupName());    //아이브   



/*
    Factory constructor
*/


class IdolModel2{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel2(
            list[0],
            list[1],
        );
    }

}
const yuJin2 = IdolModel2.fromObject({
    name:'안유진',
    year:2003,
});
console.log(yuJin2);

const wonYoung = IdolModel2.fromList(['장원영',20023]);
console.log(wonYoung);