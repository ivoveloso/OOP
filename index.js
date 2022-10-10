// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/append');

// TODO: Create an array of questions for user input
const questions = [
    `What is your team manager's name?`, //0
    `What is his employee ID?`,//1
    `What is his email address?`,//2
    `What is his office number?`,//3
    `Would you like to add a another team member?` //4
];

const engQs = [
  `What is your engineer's name?`, //0
  `What is his employee ID?`,//1
  `What is his email address?`,//2
  `What is his GitHub?`,//3
];

const intQs = [
  `What is your intern's name?`, //0
  `What is his employee ID?`,//1
  `What is his email address?`,//2
  `What is his school's name?`,//3
];

const roles = [
    `Engineer`,
    `Intern`,
    `Finish building my team`
];

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'name',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'eID',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'email',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'officeNum',
      },
    ])
    .then(val => {
      generateHTML(val);
      finalQ(val);
      })}

function finalQ(data) {
    const manager = new Manager(data.name, data.eID, data.email, data.officeNum);
    inquirer
    .prompt([
      {
        type: 'list',
        message: questions[4],
        choices: roles,
        name: 'role',
      }
    ])
    .then(val => {
      if (val.role === `Engineer`){
        engineer();
      } else if(val.role === 'Intern') {
        intern();
      } else {
        console.info('Your team is ready. HTML generated!');
        console.info(manager.getRole());
      }
})
    }

function engineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: engQs[0],
        name: 'name',
      },
      {
        type: 'input',
        message: engQs[1],
        name: 'eID',
      },
      {
        type: 'input',
        message: engQs[2],
        name: 'email',
      },
      {
        type: 'input',
        message: engQs[3],
        name: 'github',
      },
    ])
    .then(val => {
      const engineer = new Engineer(val.name, val.eID, val.email, val.github);
      finalQ(val);
      })
  }

function intern() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: intQs[0],
        name: 'name',
      },
      {
        type: 'input',
        message: intQs[1],
        name: 'eID',
      },
      {
        type: 'input',
        message: intQs[2],
        name: 'email',
      },
      {
        type: 'input',
        message: intQs[3],
        name: 'school',
      },
    ])
    .then(val => {
      const intern = new Intern(val.name, val.eID, val.email, val.school);
      finalQ(val);
    })
}

// Function call to initialize app
init();



