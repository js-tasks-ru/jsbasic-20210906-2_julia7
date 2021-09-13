function sumSalary(salaries) {
    let salary = 0;
    for(let item in salaries) {
      if(salaries[item] > 0 && salaries[item] < Infinity && typeof salaries[item] == 'number') {
        salary += salaries[item]
      }
    }
    return salary;
}
