function fact(num) {
  let i = 0,
    fact = 1;
  while (i < num) {
    i = i + 1;
    fact = fact * i;
  }
  return fact;
}
console.log(fact(4));
