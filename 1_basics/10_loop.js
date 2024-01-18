/*
    Loops

    1)for
    2)while
*/

//for(시작;조건;증감)
for(let i= 0 ;i<10;i++){
    console.log(i); //012345689
}

//이중 for문
for(let i=0;i<6;i++){
    for(let j=0;j<6;j++){
        console.log('*');
    }
    console.log('\n');
}

let yuJin = {
    name:'안유진',
    year:2003,
    group:'아이브'
}
//오브젝트 일때 키값
for(let key in yuJin){
    console.log(key);  //name,year,group
}


const iveMembersArray = ['안유진','레이','장원영'];
//배열일때 인덱스값
for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}: ${iveMembersArray[key]}`);  //0:안유진 1:레이 2:장원영
}

// for...of    -> value값이 출력
for(let value of iveMembersArray){
    console.log(value);   //안유진 레이 장원영
}


//while(조건)    -> 조건이 true면 계속 반복   
let i = 0;
while(i<10){
    console.log(i);
    i++;
    
}


//do...while   -> 실행 후 조건확인    기존 while은 조건확인 후 반복
let number = 0;
do{
    number++;
    console.log(number);
}while (number<10);


//break
for(let i = 0 ; i<10; i++){
    if(i === 5){
        break;    //for문 멈춤
    }
   console.log(i);  //01234
}



//continue

for(let i=0;i<5;i++){
    if(i===3){
        continue;     //스킵  -> 반복문이 멈추는게 아니다
    }
    console.log(i);   //0124
}