/*
    Closure

    A closure is the Combination of a function and the lexical environemnt within which that function was delared
    클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
        -> 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
*/

function getNumber(){
    var number =5;
    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

//console.log(number); -> 에러
console.log(getNumber()); //5

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

//closure
const runner = getNumber();
console.log(runner);  //function
console.log(runner()); // 5



/*
    1)데이터 캐싱
*/

function cacheFunction(newNumber){
    //number 계산이 오래걸리는 가정일 시
    var number = 10*10;

    return number * newNumber;
}
//아래 과정이 리소스를 많이 차지한다.
console.log(cacheFunction(10));  //오래걸리는 계산은 실행할때마다 한다.
console.log(cacheFunction(20));
console.log(cacheFunction(30));


function cacheFunction2(){
    //number 계산이 오래걸리는 가정일 시
    var number = 10*10;
    function innerCacheFunction(newNumber){
        return number * newNumber;
    }

    return innerCacheFunction;
}
//오래걸린다는 계산은 한번만하고 대입
const runner2 = cacheFunction2();
console.log(runner2(10));
console.log(runner2(20));


/*
    2) 정보 저장
*/
function cacheFunction3(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }
    return increment;
}

const runner3 = cacheFunction3();     //number 정보 저장중
console.log(runner3());  //100
console.log(runner3());  //101
console.log(runner3());  //102


/*
    3) 정보 은닉
*/
function Idol(name,year){
    this.name=name;
    var _year = year;

    this.sayNameAndYeaer = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    };
}

const yuJin = new Idol('안유진',2003);
console.log(yuJin.sayNameAndYeaer());
console.log(yuJin.name);    //안유진
console.log(yuJin._year);   //undefinded    정보은닉 => 나중에 가져오기때문에
