function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  }

  str.split(' ').filter(num => isFinite(+num)).forEach(num => {
    if(+num < result.min) result.min = +num;
    if(+num > result.max) result.max = +num;
  })

  return result
}
