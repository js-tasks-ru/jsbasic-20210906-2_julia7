function factorial(n) {
  // ваш код...
  if (n > 0) {
    let fact = 1;
    for(let i = n; i > 0; i--) {
      fact *= i;
    }
    return fact
  } else {
    return n === 0 ? 1 : false
  }
}
