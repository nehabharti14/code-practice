
console.log("*********NATURAL NUMBER ****IN NEW LINES*****");
function main() {
  let num = 10;
  for (let i = 1; i <= 10; i++) console.log(i);
}
main();

console.log("*****NATURAL NUMBER *****IN THE SAME LINE*************")
//print in the same line 1,2,3,4,5,6,7,8,9,10

function main1() {
  let str = "";
  for (let i =1; i <= 10; i++) {
    if (i <= 10)
         str = str + i +" ";
    if(i>=10) 
    str =str;
}
console.log(str);
}
main1();

//this is for prime number 
console.log("***************PRIME NUMBER BY USING for loop******************");

function isPrime() {
  let num = 23;
  let count = 0;
  for (let i = 1; i <= num; i++) if (num % i === 0) count++;
  if (count == 2) console.log(+num + " is a prime number");
}
isPrime();
console.log("**************MULTIPLICATION**********************");
function multiplication(){
    let number=5; //6,7,8,9,10......you can  write here the n. which table you want to create
    for(let i=1; i<=10; i++){
        console.log(`${number}*${i}=${number * i}`);
    }
}
    multiplication();

console.log("*********CUBES**** 1 TO 10*********");
function cube_num(){
    for(let i=1; i<=10; i++){
 let cube=i*i*i;
 console.log(`${i}*${i}*${i} = ${cube}`);
    }
}
cube_num();