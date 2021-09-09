function factorial(n) {
  if (n >= 0) {
    let fact = 1;
    for(let i = n; i > 0; i--) {
      fact *= i;
    }
    return fact
  }
  return false
}
