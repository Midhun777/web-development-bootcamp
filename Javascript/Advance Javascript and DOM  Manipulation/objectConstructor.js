
function EmpDetails(name, desig, salary, lang) {
    this.name = name;
    this.desig = desig;
    this.salary = salary;
    this.lang = lang;
}

var employee = new EmpDetails("John", "HRM", 12000, ["English", "Mlayalam"]);
console.log(employee)