class Employee {

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";




  }

  getName() {
    console.log(`Hello, my name is ${this.name}`);
    return this.name;

  }
  getId() {
    console.log(`  ${this.id}`);
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }

};



module.exports = Employee;