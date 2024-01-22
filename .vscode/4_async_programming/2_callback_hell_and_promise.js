/*
    Callbalck
*/

function waitAndRun(){
    setTimeout(()=>{
        console.log('끝');
    },2000);
};

waitAndRun(); //2초뒤 끝 출력


//콜백 지옥!!!!
function waitAndRun2(){
    setTimeout(()=>{
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    },2000);
};

waitAndRun2();  // 2초 마다 1,2,3번 콜백 끝


/*
    Promise
*/
const timeoutPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

timeoutPromise.then((res)=>{   //성공했을시 실행
    console.log('then');
    console.log(res);
});

const getPromise = (seconds) => new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('완료');    //then문 실행
    }, seconds*1000);
});

getPromise(5).then((res)=>{
    console.log('first then');
    console.log(res);

    return getPromise(5).then((res)=>{
        console.log('second then');
        console.log(res);
    });
});


const getPromise2 = (seconds) => new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('에러');  //catch문 실행
    }, seconds*1000);
});

getPromise2(5).then((res)=>{
    console.log('성공');
    console.log(res);
})
.catch((res)=>{
    console.log('실패');
    console.log(res);
})
.finally(()=>{
    console.log('무조건 실행   then,catch상관 없이');
}); 

//2초 뒤에 전부 실행된 값을 알려줌
Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(1),
]).then((res)=>{
    console.log(res);
})