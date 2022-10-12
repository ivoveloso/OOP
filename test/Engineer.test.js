const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it("should create an object with name, ID, email and github", () => {
    const engineer = new Engineer("Sarah", 3, 'sarah@email.com', 'sarahgitty');

    // Verify that the new object has the correct properties
    expect(engineer.name).toEqual("Sarah");
    expect(engineer.id).toEqual(3);
    expect(engineer.email).toEqual('sarah@email.com');
    expect(engineer.github).toEqual('sarahgitty');

})

it('should return functions as per their correct use', () => {
  const engineer = new Engineer("Sarah", 3, 'sarah@email.com', 'sarahgitty');

  //Verify correct operation of functions
  expect(engineer.getEmail()).toEqual('sarah@email.com');
  expect(engineer.getName()).toEqual('Sarah');
  expect(engineer.getId()).toEqual(3);
  expect(engineer.getRole()).toEqual('Engineer');
  expect(engineer.getGithub()).toEqual('sarahgitty');
})
});
