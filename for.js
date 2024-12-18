function fibonacciGenerator(n) {
  let output = [];
  let first = 0;
  let second = 1;
  if (n === 1) {
    output = [first];
  } else if (n === 2) {
    output = [first, second];
  } else if (n > 2) {
    output = [first, second];
    for (let i = 2; i < n; i++) {
      let third = first + second;
      output.push(third);
      first = second;
      second = third;
    }
  }
  return output;
}
fibonacciGenerator(3);
