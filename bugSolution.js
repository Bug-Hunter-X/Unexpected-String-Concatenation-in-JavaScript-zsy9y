function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Arguments must be numbers";
  }
  return a + b;
}

console.log(foo(5, '5')); // Output: Error: Arguments must be numbers
console.log(foo(5, 5)); // Output: 10

//or explicit type conversion
function foo2(a, b) {
  return Number(a) + Number(b);
}
console.log(foo2(5, '5')); //Output: 10