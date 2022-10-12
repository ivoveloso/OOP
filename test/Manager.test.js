const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it("should create an object with name, ID, email and Office Number", () => {
    const manager = new Manager("Sarah", 3, 'sarah@email.com', 32);

    // Verify that the new object has the correct properties
    expect(manager.name).toEqual("Sarah");
    expect(manager.id).toEqual(3);
    expect(manager.email).toEqual('sarah@email.com');
    expect(manager.officeNumber).toEqual(32);
})
it('should return functions as per their correct use', () => {
  const manager = new Manager("Sarah", 3, 'sarah@email.com', 32)

  //Verify correct operation of functions
  expect(manager.getEmail()).toEqual('sarah@email.com');
  expect(manager.getName()).toEqual('Sarah');
  expect(manager.getId()).toEqual(3);
  expect(manager.getRole()).toEqual('Manager');
})
});