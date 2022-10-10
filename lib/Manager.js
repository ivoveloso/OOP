const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, officeNumber) {
    super(id);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager'
  }
}

module.exports = Manager;