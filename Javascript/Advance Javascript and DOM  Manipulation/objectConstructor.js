
function EmpDetails(name, desig, salary, lang,doWork) {
    this.name = name;
    this.desig = desig;
    this.salary = salary;
    this.lang = lang;
    this.doWork = function(){
        console.log("Doing Work!")
    }
}

var employee = new EmpDetails("John", "HRM", 12000, ["English", "Mlayalam"]);
console.log(employee)
employee.doWork();