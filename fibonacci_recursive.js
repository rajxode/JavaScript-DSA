
// for printing fib series till nth position
const recursiveFib = (firstNum, secondNum, limit) => {
    if(limit <= 0){
        return;
    }
    console.log(firstNum+secondNum);
    recursiveFib(firstNum+secondNum,firstNum,limit-1);
}
const printFib = (num) => {
    if(num <1){
        return;
    }
    console.log(0);
    if(num>1){
        console.log(1);
        recursiveFib(1,0,num-2);
    }
}
printFib(5);
// output => 0 1 1 2 3 ( print till 5th position)


console.log(' ');
// for printing fib series till nth value
const recursiveFib2 = (firstNum, secondNum, value) => {
    if((firstNum+secondNum) > value) {
        return;
    }
    console.log(firstNum+secondNum);
    recursiveFib2(firstNum+secondNum, firstNum, value);
}
const printFib2 = (num) => {
    if(num<0){
        return;
    }
    console.log(0);
    if(num>0){
        console.log(1);
        recursiveFib2(1,0,num);
    }
}
printFib2(8);
// output => 0 1 1 2 3 5 8  ( print till 8 )


console.log(' ');
// for printing fib value at nth position
const recursiveFib3 = (firstNum, secondNum, limit) => {
    if(limit <= 0){
        return firstNum;
    }
    return recursiveFib3(firstNum+secondNum,firstNum,limit-1);
}
const printFib3 = (num) => {
    if(num <1){
        return null;
    }
    if(num === 1){
        return 0;
    }
    if(num === 2){
        return 1;
    }
    if(num>1){
        return recursiveFib3(1,0,num-2);
    }
}
const result = printFib3(8);
console.log(result);   // output => 13 (8th fib number)