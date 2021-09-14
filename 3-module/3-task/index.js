function camelize(str) {
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== '-' && arr[i-1] === '-') {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
    }
  }
  return arr.filter(item => item !== '-').join('')
}
