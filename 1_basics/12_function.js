/*
    function 함수
*/

/*
    만약에 2라는 숫자에 *10/2%3 스트링으로 변환해서 반환받고 싶다면 어떻게 해야할까?
*/

//함수생성
function calculate(){
    console.log((3*10/2%3).toString());
}
//함수실행
calculate();


//파라미터가 있는 함수 생성
function calculate2(num){
    console.log((num*10/2%3).toString());
}
//파라미터가 있는 함수 실행
calculate2(2);
calculate2(3);

function multiply(x,y){
    console.log(x*y);
}
multiply(2,3);  //6

function multiply2(x,y=10){
    console.log(x*y);
}

multiply2(2,4);  //8
multiply2(2);  //20


//return   -> 함수실행 후 리턴 값
function multiply3(x,y){
    return x*y;
}

const result = multiply3(2,4);
console.log(result);  //8

// Arrow 함수
const multiply4 = (x,y) => {
    return x*y;
}
console.log(multiply4(5,6));  //30

//arguments
const multiplyThree = function(x,y,z){
    console.log(arguments);   //[Arguments] { '0': 3, '1': 4, '2': 5 }
    return x*y*z;  
}
console.log(multiplyThree(3,4,5));  //60

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b)=>a*b,1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));   //전부 곱한거 출력


//곧장 실행
(function(x,y) {
    console.log(x*y)
})(4,5)   //20


console.log(typeof multiply); //function
console.log(multiply instanceof Object); //true   -> 좌측이 우측타입인지 -> multiply는 Object타입인지
