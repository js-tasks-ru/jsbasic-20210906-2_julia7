function camelize(str) {
return str ? str.split('-')
          .map(item => item[0].toUpperCase() + item.substr(1))
          .join('') : str
}
