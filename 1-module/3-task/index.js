function ucFirst(str) {
  // ваш код...
  // if (str) {
  //   return str[0].toUpperCase() + str.substring(1)
  // } else {
  //   return str
  // }
  return !!str ? str[0].toUpperCase() + str.substring(1) : str
}
