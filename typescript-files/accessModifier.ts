class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
        console.log("Employee constructor called");
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('John');
console.log(emp1.employeeName);
emp1.greet();


// inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
        console.log('Manager constructor called');
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let manager1 = new Manager('Bruce');
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);