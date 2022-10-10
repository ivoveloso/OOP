const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it("Gets the name of the Employee", () => {
    expect(new Employee('John', 15, 'john@email.com')).toBe(true);
  });


});
