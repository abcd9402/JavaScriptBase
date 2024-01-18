/*
    Array Function
*/


//--------------------원본을 변경-----------------------------------------
let iveMembers =[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers); 

//어레이 맨끝에 추가   push()
iveMembers.push('코드팩토리');
console.log(iveMembers);

//어레이 맨끝에 제거 pop()
iveMembers.pop();
console.log(iveMembers);

//어레이 맨처음꺼 제거 shift()
iveMembers.shift();
console.log(iveMembers);

//어레이 맨처음에 추가 unshift();
iveMembers.unshift('안유진');
console.log(iveMembers);

//부분 삭제 splice(삭제시작,전까지삭제)   -> (포함,미포함)
iveMembers.splice(0,3);
console.log(iveMembers);

//어레이 오름차순 재정렬 sort()
iveMembers.sort();
console.log(iveMembers);
/* 
    a,b를 비교했을때 
    1) a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
    2) a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
    3) 원래 순서를 그대로 두려면 0을 반환
*/
let numbers =[
    1,9,7,5,3
];
numbers.sort((a,b)=>{
    return a>b? 1:-1;
})
console.log(numbers);


//어레이 내림차순 재정렬 reverse()
iveMembers.reverse();
console.log(iveMembers);

//----------------원본은 유지

iveMembers =[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);

//어레이 맨긑에 추가(원본은 변경 x -> push()와의 차이점)  concat()
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);  //코드팩토리 없음

//어레이 자르기 slice(시작,자르고싶은다음인덱스)
console.log(iveMembers.slice(0,2));  //0,1
console.log(iveMembers);

//어레이를 벗긴다 spread operator    ...
let iveMembers2= [
    ...iveMembers,
];
console.log(iveMembers2);   //어레이를 풀음

let iveMembers3= [
    iveMembers,
];
console.log(iveMembers3); //어레이안에 어레이가 됨

//메모리 위치를 복사
let iveMembers4 =iveMembers;
console.log(iveMembers4);  //ivMembers와 출력물 같음
console.log(iveMembers === iveMembers4); //true


//완전 복사 새로운 메모리에 새로 생성 
let iveMembers5= [
    ...iveMembers,
];
console.log(iveMembers5 === iveMembers)  //false


//어레이를 합친다 join(구분문자)   -> 구분문자 없을시 ,     
console.log(iveMembers.join());    //안유진,가을,레이  
console.log(iveMembers.join('/')); //안유진/가을/레이

console.log(iveMembers);

//어레이 반복 map()
console.log(iveMembers.map((x)=>x))
console.log(iveMembers.map((x)=>{
    if(x === '안유진'){
        return `아이브:${x}`;
    }else{
        return x;
    }
}))


//어레이 조건 출력   filter() -> filter((어레이)=> {조건})
numbers = [1,8,7,6,3];
console.log(numbers.filter((x)=> true));  //전부 출력
console.log(numbers.filter((x)=> false)); //출력x
console.log(numbers.filter((x)=> x%2 ===0)); // 짝수만 출력


//어레이 중 조건에 맞는거 있음 그거 하나만 출력 find()
console.log(numbers.find((x)=> x%2 ===0)) //해당 값 찾고 끝   8

//어레이 중 조건에 맞는 인덱스 출력 findIndex()
console.log(numbers.findIndex((x)=>x%2 ===0));  //8의 인덱스 1 출력

//reduce((반환값,어레이값),시작할 값)  어레이값:반복
// p:0 n:1 p+n=1, p:1 n:8 p+n:9, p:9 n:7 p+n:16, p:16 n:6 p+n:22
console.log(numbers.reduce((p,n)=> p+n,0));
