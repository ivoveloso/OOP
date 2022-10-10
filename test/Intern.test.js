const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it("should create an object with name, ID, email and school", () => {
    const intern = new Intern("Sarah", 3, 'sarah@email.com', 'University of Sydney');

    // Verify that the new object has the correct properties
    expect(intern.name).toEqual("Sarah");
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('sarah@email.com');
    expect(intern.school).toEqual('University of Sydney');

})});