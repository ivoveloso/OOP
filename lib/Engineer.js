const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, github) {
        super(id);
        this.github = github;
      }

  getGithub() {

  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;