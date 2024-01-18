/*
    Object  / 객체
*/

//object 선언    key : value
let yuJin ={
    name: '안유진',
    group : '아이브',
    dance : function(){
        return '안유진이 춤을 춥니다.';
    },
    sing : function(){
        return `${this.name}이 노래를 부릅니다.`;
    }
};

console.log(yuJin);     
console.log(yuJin.name);    //안유진
console.log(yuJin['name']); //안유진

console.log(yuJin.dance()); //안유진이 춤을 춥니다.   -> 함수는 함수()로 실행
console.log(yuJin.sing()); //안유진이 노래를 부릅니다.  -> this는 본인함수라 생각 


const nameKey = 'name';
const nameValue= '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 ={
    [nameKey]: nameValue,      //key는 []사용
    [groupKey]: groupValue,
}
console.log(yuJin2);

yuJin2.group = '코드팩토리';  // 변경
console.log(yuJin2);

yuJin2.englishName = 'yuJin2';  // 추가 
console.log(yuJin2);  //해당 오브젝트에 키가없으면 자동 추가된다.

delete yuJin2.englishName;  //오브젝트의 키,밸류 삭제
console.log(yuJin2);  


/*
    객체의 특징
    1)const로 선언할 경우 객체 자체를 변경 할 수는 없다.
    2)객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
*/

const wonYoung= {
    name:'장원영',
    group:'아이브',
}
console.log(wonYoung);
// wonYoung ={};     -> 에러
wonYoung.group = '코드팩토리';  // 가능
console.log(wonYoung);

// 모든 키값 가져오기
console.log(Object.keys(wonYoung));  // name,group
// 모든 밸류값 가져오기
console.log(Object.values(wonYoung));  // 장원영,코드팩토리

const name = '안유진';
const group = '아이브';

//키,밸류 값이 같으면 한번만 써도 된다   name:name  -> name
const yuJin3 = {
    name: name,
    group
}
console.log(yuJin3);