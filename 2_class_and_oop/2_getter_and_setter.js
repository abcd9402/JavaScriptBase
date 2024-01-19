/*
    Getter and Setter
*/


class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    /*
        get
        1) 데이터를 가공해서 새로운 데이터를 반환할때
        2) private한 값을 반환할때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    };
    /* 
        set
        1) 프로퍼티는 반드시 1개를 받는다
        2) 변경할 변수명과 일치시키는게 좋다
    */
    set setName(name){
        this.name = name;
    };
    
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);  // 안유진-2003
yuJin.name = '장원영';
console.log(yuJin);  //안유진 -> 장원영   
yuJin.setName= '안유진';//장원영 -> 안유진
console.log(yuJin);  //안유진 -> 장원영   
// 현재는 set이 없어도 가능한데 추후에 private로 변수 선언 시 set으로만 변경 가능

//private   ->   #으로 표현  -> 외부에서 출력 불가능 -> get_set으로 출력 가능
class IdolModel2{
    #name;  //private  외부출력 불가능
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get getName(){
        return this.#name;
    }
    set setName(name){
        this.#name= name;        
    }
}

const yuJin2 = new IdolModel2('안유진',2003);
console.log(yuJin2);  //안유진 출력x    -> year:2003
console.log(yuJin2.name);  //출력 x -> undefined
console.log(yuJin2.getName);  //안유진
yuJin2.name= '장원영';
console.log(yuJin2.getName);  //변경x -> 안유진  
yuJin2.setName = '장원영';
console.log(yuJin2.getName);  //장원영