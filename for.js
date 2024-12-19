const fibonacchi = (n)=>{
  if(n<=0) return [];
  if(n===1) return [0, 1];
  let fib = [0, 1];
  for(i=2; i<n; i++){
    fib.push(fib[i-2]+fib[i-1]);
  }
  return fib;
}

fibonacchi(10);