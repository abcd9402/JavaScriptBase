/*
    try...catch

    1) 발생시킬때 -> 던진다고한다. (throw)
    2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
*/

function runner(){
    console.log('Hello');

    throw new Error('큰 문제가 생겼습니다!');  //여기서 멈춘다. 하위코드는 실행 x

    console.log('code Factory');
}

runner();
//------------------------------------------------------------------------------------------
function runner(){
    try{
        console.log('Hello');

    //    throw new Error('큰 문제가 생겼습니다!');  //여기서 멈춘다. 하위코드는 실행 x -> catch문으로 이동

        console.log('code Factory');
    }catch(e){
        console.log('--catch---');
        console.log(e);
    }finally{   //에러가 있든 없든 무조건 실행되는 공간
        console.log('---------finally----------')
    }
    
}
runner();