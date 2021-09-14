function sumSalary(salaries) {
    let salary = 0;
    for(let item in salaries) {
      if (isFinite(salaries[item]) && typeof salaries[item] == 'number')
        salary += salaries[item]
      }
    return salary;
}
