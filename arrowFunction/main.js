//1
let squareFunction = (num) => num*num;
console.log(squareFunction(4));
//2
const posativeNumberFunction = (num) => {
  return num>0;
}
console.log(posativeNumberFunction(1));
console.log(posativeNumberFunction(-1));
//3
const formatName =(firstName, seperator="", lastName ) => {
   
}

//4
const greetCheck = (name,boolean) => {
  let greeting='';
  if(boolean===true){
    greeting = `Good evening, ${name}`
  }
  else{
    greeting = `hi, ${name}`
  }
  return greeting;
}
console.log(greetCheck('yuri',false));
//5
const calcFunction = (num1=2, operator='plus', num2=2) => {
  let result = 0;
  switch(operator){
    case '+':
        result = num1+num2
    case '-':
        result = num1-num2
    case '*':
        result = num1*num2
    case '/':
    case num2!==0:
        result = num1/num2
  return result;
}
}
console.log(calcFunction(3,'+',2));
//6
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];

const merged = [...team, ...captain];
console.log(merged);
//9
const myArray = ['oak', 'hasky', 'coca-cola' ];
const [tree, dog, beverage] = myArray;
console.log(dog);
10//
const letterArray = ['a','b','c'];
const [g,f,d] = letterArray;
console.log(f);
//11
const actors = [
  { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
  { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
  { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
 ];
const [firstActor,,thirdActor] =  actors;
console.log(thirdActor);

