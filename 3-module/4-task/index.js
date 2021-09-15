function showSalary(users, age) {
  return users.filter(user => user.age <= age)
              .map( el => `${el.name}, ${el.balance}`)
              .join('\n')
}
