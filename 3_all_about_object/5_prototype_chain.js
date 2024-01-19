/*
    Prototype
*/

const testObj = {};

/*
    __proto__는 모든 객체에 존재하는 프로퍼티이다.
    class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
*/

console.log(testObj.__proto__);


function IdolModel(name,year){
    this.name=name;
    this.year=year;

}

console.log(IdolModel.prototype); // {}
console.dir(IdolModel.prototype,{
    showHidden: true,
}); // 숨겨진 값까지 출력함
console.log(IdolModel.prototype.constructor);   //IdolModel
console.log(IdolModel.prototype.constructor === IdolModel);  //true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);   //true   -> circular reference -> 서로 참조하고 있는 상태


const yuJin = new IdolModel('안유진',2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype); //true

console.log(testObj.__proto__ === Object.prototype);  //true

console.log(IdolModel.__proto__ === Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(IdolModel.prototype.__proto__ === Object.prototype); //true


console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name,year){
    this.name=name;
    this.year=year;
    
    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    };
}

const yuJin2 = new IdolModel2('안유진',2003);
const wonYoung2 = new IdolModel2('장원영',2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello);  //false    -> 두 메모리에 각자 저장됨 -> 메모리 낭비

console.log(yuJin2.hasOwnProperty('sayHello'));  //true   상속받았는지 확인  true면 상속x -> 고유

function IdolModel3(name,year){
    this.name= name;
    this.year= year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
};

const yuJin3 = new IdolModel3('안유진',2003);
const wonYoung3 = new IdolModel3('장원영',2002);
console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello);  //true   -> 한 메모리에서 함수를 가져옴

console.log(yuJin3.__proto__ === wonYoung3.__proto__) //true

console.log(yuJin3.hasOwnProperty('sayHello'));  //false -> 상속받음 


/*
    Overriding
*/

function IdolModel4(name,year){
    this.name= name;
    this.year= year;
    // overide
    // this.sayHello = function(){
    //     return '인스턴스';
    // }
}

IdolModel4.prototype.sayHello = function(){
    return '안녕하세요. 저는 prototype 매서드입니다.';
}

const yuJin4 = new IdolModel4('안유진',2003);
console.log(yuJin4.sayHello());   //안녕하세요. 저는 prototype 매서드입니다.


/*
    정리


    함수를 객체로 받을 경우 
    객체는 함수.prototype을 상속받는다.
    객체 프로퍼티는 __proto__    함수는 .prototype
    ex) const aa = IdolModel('aaa',bbb);    const qq = IdolModel('qwe',ttt); 
    -> aa.__proto__ === IdolModel.prototype
    -> aa.__proto__ === qq.__proto__
    -> IdolModel.prototype을 공통적으로 상속을 받는다.
    -> IdolModel.prototype을 수정하여 aa,qq가 사용하면 메모리 절약 가능

*/





