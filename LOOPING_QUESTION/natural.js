function main(){
    let num=10;
    for(let i=1; i<=10; i++)
        console.log(i);
}
main();

console.log("**************************************");
console.log("***************PRIME NUMBER BY USING for loop******************");
console.log("**************************************");
function isPrime(){
    let num=23;
    let count=0;
    for(let i=1; i<=num; i++)
    if(num%i===0)
        count++;
    if(count==2)
        console.log(+num+ " is a prime number");

}
isPrime();


