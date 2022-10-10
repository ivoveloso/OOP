const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, school) {
        super(id);
        this.school = school;
      }

  getSchool() {

  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;