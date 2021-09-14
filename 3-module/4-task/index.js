function showSalary(users, age) {
  let res = []
  users.filter(user => user.age <= age).forEach( el => {
    res.push(`${el.name}, ${el.balance}`)
  });
  return res.join('\n')
}
