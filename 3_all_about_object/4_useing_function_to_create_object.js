/*
    Using function to create objects
*/

function IdolModel(name,year){
    this.name=name;
    this.year=year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진',2003);

console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진',2003);


const IdolModelArrow = (name,year) => {
    this.name = name;
    this.year = year;
}

const yuJin3 = IdolModelArrow('안유진',2003);