/*
    Async / Await
*/

const getPromise = (second)=> 
    new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('완료');       
        }, 2000);
    });

async function runner(){
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(3);
    console.log(result3);
}    
runner();   //완료


const getPromise2 = (second)=> 
    new Promise ((resolve,reject)=>{
        setTimeout(() => {
            reject('에러');       
        }, second*1000);
    });

async function runner2(){
    try{
        const result1 = await getPromise2(1);
        console.log(result1);
        const result2 = await getPromise2(2);
        console.log(result2);
        const result3 = await getPromise2(3);
        console.log(result3);
    }catch(e){
        console.log(e)
    }
    
}    
runner2();   //완료
