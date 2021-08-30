function ucFirst(str) {
  // ваш код...
  // if (str) {
  //   str.toLowerCase()
  //   return str[0].toUpperCase() + str.substring(1)
  // } else {
  //   return str
  // }
  str.toLowerCase()
  return !!str ? str[0].toUpperCase() + str.substring(1) : str
}
