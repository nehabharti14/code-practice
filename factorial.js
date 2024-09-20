function fact(num) {
  let i = 0,
    fact = 1;
  while (i < num) {
    i += 1;
    fact *= i;
}
return fact;
}
console.log(fact(4));
