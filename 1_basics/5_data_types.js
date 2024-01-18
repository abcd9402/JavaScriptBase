/*
    Data Types

    여섯개의 Primitive Type과 한개의 오브젝트 타입이있다.


    1)Number (숫자)
    2)String (문자열)
    3)Boolean (불리언)
    4)undefined (언디파인드)
    5)null (널)
    6)Symbol (심볼)

    7)Object (객체)
      -Function, Array Object
*/

//number
const age =32;
const template = -10;
const pi = 3.14;
console.log(typeof age);   //number
console.log(typeof template);   //number
console.log(typeof pi);   //number


//String
const cadeFactory = '코드팩토리';
console.log(typeof cadeFactory);   //String

/*
    Template Literal

    escaping charater
    1) newline -> \n
    2) tab -> /t
    3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면된다.

*/
const IveYuJin = '아이브\n안유진';
const IveYu = '아이브\t안유진';
const IveJin = '아이브\\안유진';
const IveJi = '아이브\'안유진';
console.log(IveYuJin);  //아이브 
                        //안유진
console.log(IveYu);     //아이브    안유진
console.log(IveJin);    //아이브\안유진
console.log(IveJi);     //아이브'안유진

/* template literal     ``안에 있으면 모든 문자든 편하게 사용 할 수 있다    타입은 String*/
const iveWonYoung = `아이브    ' " \\\ ///  asd
장원영`;
console.log(iveWonYoung);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);  //$를 사용하여 template riteral 응용


//Boolean
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);

//undefined
// 값을 초기화하지 않았을 때 지정되는 값
let noInit;
console.log(noInit);
console.log(typeof noInit);  //undefined

//null
// undefined와 마찬가지로 값이 없다는 뜻이나 JS에서는 개발자가 명시적으로 없는 값으로 초기화시 사용
let init = null;
console.log(init);
console.log(typeof init);  //object 출력이지만 원래는 null이 맞음 (개발자가 버그라고 인정함)

//Symbol
// 유일무이한 값을 생성할때 사용 - Symbol함수를 호출해서 사용한다.
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);  //true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);  //false


/*
    Object 타입
    Map
    키:밸류의 쌍으로 이루어져있다.  key:value
*/
const dictionary = {
    red:'빨간색',
    yellow:'노란색',
    orange:'주황색'
};
console.log(dictionary);
console.log(dictionary['red']);  //빨간색


/*
    Array 타입

    값을 리스트로 나열 할 수 있는 타입니다.
*/
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]
console.log(iveMembersArray);
// index  -> 배열의 순서(0부터 시작한다.)
console.log(iveMembersArray[0]);   //안유진

iveMembersArray[5] = '코드팩토리';
console.log(iveMembersArray[5]);   //코드팩토리




/*
    dynamic과 static
    
    dynamic -> 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 '추론'한다
    static -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다.

    JS- > dynamic typing
*/