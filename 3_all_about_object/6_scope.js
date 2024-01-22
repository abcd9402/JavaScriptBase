/*
    Scope
*/

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
};

// levelOne();  //20

function levelOne(){   
    var numberOne = 40;

    console.log(numberOne);
}


levelOne(); //40

console.log(numberOne); //20

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 90;

        console.log(numberOne);  //40
        console.log(numberTwo);  //90
    }

    levelTwo();
    console.log(numberOne);  //40
}

levelOne();    // 40 90 40

console.log(numberOne);  //20
//console.log(numberTwo);  //에러


/*
    JS -> Lexical Scope
    - 선언된 위치가 상위 스코프를 정한다.

    Dynamic Scope
    - 실행한 위치가 상위 스코프를 정한다.
*/

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();

}

function functionTwo(){
    console.log(numberThree);  //3

}

functionOne();  //3    


var i = 999;
for(var i =0; i<10; i++){

    console.log(i);
}
console.log('i in global scope : '+i); //10    -> var

i=999;
//block level scope
for(let i=0; i<10;i++){
    console.log(i);
};
console.log('i in global scope : '+i); //999  -> let


/*
    var 키워드는 함수 레벨 스코프만 만들어낸다.

    let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
*/

