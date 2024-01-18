/*
    if와 switch
*/

let number= 5;

if(number/2 === 0){
    //if(true)일 때
    console.log('number는 짝수입니다.');
}else{
    //if(false)일 때
    console.log('number는 홀수입니다.');
}

if(number%2 === 0){
    //if(true)일 때
    console.log('number는 2의 배수입니다.');
}else if (number%3 === 0){
    //if(true)일 때
    console.log('number는 3의 배수입니다.');
}else if (number%4 === 0){
    //if(true)일 때
    console.log('number는 4의 배수입니다.');
}else{
    console.log('모든 조건에 해당되지 않습니다.');
}




const englishDay = 'monday';
let koreanDay


switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    default :
        koreanDay = 'ㅁㅁㅁㅁㅁ';
        break;
}   


