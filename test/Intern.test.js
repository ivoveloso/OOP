const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it("should create an object with name, ID, email and school", () => {
    const intern = new Intern("Sarah", 3, 'sarah@email.com', 'University of Sydney');

    // Verify that the new object has the correct properties
    expect(intern.name).toEqual("Sarah");
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('sarah@email.com');
    expect(intern.school).toEqual('University of Sydney');

})

it('should return functions as per their correct use', () => {
  const intern = new Intern("Sarah", 3, 'sarah@email.com', 'University of Sydney');

  //Verify correct operation of functions
  expect(intern.getEmail()).toEqual('sarah@email.com');
  expect(intern.getName()).toEqual('Sarah');
  expect(intern.getId()).toEqual(3);
  expect(intern.getRole()).toEqual('Intern');
  expect(intern.getSchool()).toEqual('University of Sydney');
})

});