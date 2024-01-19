/*
    Property Attribute

    1)데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
    2)엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
                       설정할때 호출되는 함수로 구성된 프로퍼티  ex)getter와 setter
    


    let yuJin = { name:'안유진', year:2003 }
    ->프로퍼티: name:'안유진', year:2003
*/

const yuJin = {
    name:'안유진',
    year:2003
};

console.log(Object.getOwnPropertyDescriptor(yuJin,'name'));    // Object:생성자함수 또는 클래스함수 , .get~~:static 함수
console.log(Object.getOwnPropertyDescriptor(yuJin,'year'));


/*
    1)value - 실제 프로퍼티의 값
    2)writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정 할 수 없다.
    3)enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면 true로 반환한다.
    4)configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
                    false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지 된다.
                    단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
*/


console.log(Object.getOwnPropertyDescriptor(yuJin,'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));



const yuJin2={
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}


console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);

console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'));

yuJin2.height= 172;  //추가
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height')); //{ value: 172, writable: true, enumerable: true, configurable: true }

Object.defineProperty(yuJin2,'weight',{
    value:40,
    writable: true,
//    enumerable: true, 생략 시 false가 기본값
    configurable: false      
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'weight'));  //{ value: 40, writable: true, enumerable: false, configurable: false }



/*
writable - 수정 여부
*/
Object.defineProperty(yuJin2,'height',{
    writable:false,
});
yuJin2.height =180;
console.log(yuJin2);  //변경 x  172

/*
enumerable - 열거 여부
*/
console.log(Object.keys(yuJin2));     //name,year,age,height
for(let key in yuJin2){
    console.log(key);
};

Object.defineProperty(yuJin2,'height',{
    enumerable: false,
});

console.log(Object.keys(yuJin2));   //name,year,age       -    height 없음
for(let key in yuJin2){
    console.log(key);
};
console.log(yuJin2);    //name,year,age  - height 없음
console.log(yuJin2.height); //172     -> 지정해서 출력시 가능   열거만 불가능   


/*
Configurable - 
*/
Object.defineProperty(yuJin2,'name',{
    configurable:false,
});

// Object.defineProperty(yuJin2,'name',{
//     enumerable:false,
// });       ----> 에러

yuJin2.name = '안유진2';
console.log(yuJin2);    //안유진2    -> writable이 true임