const fs = require('fs');

const managerStr = (data) => `            
        <div class="col-sm-3">
        <div class="card text-center">
          <div class="card-body align-items-center row">
              <div style="background-color: #2d48df; padding: 10px">
                  <h4 class="card-title" style="color:white">${data.getName()}</h4>
                  <h4 class="card-title fa fa-coffee" style="color:white"> Manager</h4>
              </div>
            <a class="card-footer text-muted">ID: ${data.getId()}</a>
            <a href="mailto:${data.getEmail()}" class="card-footer text-muted">Email: ${data.getEmail()}</a>
            <a class="card-footer text-muted">Office Number: ${data.officeNumber}</a>
          </div>
        </div>
        </div> `

const engineerStr = (data) => `            
        <div class="col-sm-3">
            <div class="card text-center">
              <div class="card-body align-items-center row">
                  <div style="background-color: #2d48df; padding: 10px">
                      <h4 class="card-title" style="color:white">${data.getName()}</h4>
                      <h4 class="card-title fas fa-glasses" style="color:white"> Engineer</h4>
                  </div>
                <a class="card-footer text-muted">ID: ${data.getId()}</a>
                <a href="mailto:${data.getEmail()}" class="card-footer text-muted">Email: ${data.getEmail()}</a>
                <a href="https://github.com/${data.getGithub()}" target='_blank' class="card-footer text-muted">GitHub: ${data.getGithub()}</a>
              </div>
            </div>
        </div>`

const internStr = (data) => `            
          <div class="col-sm-3">
              <div class="card text-center">
                <div class="card-body align-items-center row">
                    <div style="background-color: #2d48df; padding: 10px">
                        <h4 class="card-title" style="color:white">${data.getName()}</h4>
                        <h4 class="card-title fa fa-graduation-cap" style="color:white"> Intern</h4>
                    </div>
                  <a class="card-footer text-muted">ID: ${data.getId()}</a>
                  <a href="mailto:${data.getEmail()}" class="card-footer text-muted">Email: ${data.getEmail()}</a>
                  <a class="card-footer text-muted">School: ${data.getSchool()}</a>
                </div>
              </div>
          </div>`




// TODO: Create a function to append data to html file
function generateHTML(data) {
fs.writeFile(`./dist/index.html`,`${basicLayout(data)}\n`,
 (err) => err ? console.error(err) : console.log('HTML ready!'))
}

function basicLayout (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="./style.css" />
      <title>My Team</title>
    </head>
    
    <body>
      <header style="background-color: #c24949;">
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-lg">
                <h1 class="display-5 fw-bold">My Team</h1>
                <p class="lead">Quickly create your team members' cards!</p>
                </div>
              </div>
            </div>
          </div>
      </header>
    
      <main>
        <div class="row" id="main">

        ${basicLoop(data)}

        </div>
      </main>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    </body>
    
    </html>`
}

function basicLoop (data) {

let str = '';
console.log(data)
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  if (element.getRole() == 'Manager') {
    str += managerStr(element)
  } else if (element.getRole() == 'Engineer') {
    str += engineerStr(element)
  } else if (element.getRole() == 'Intern') {
    str += internStr(element)
  }
}
return str;
}


module.exports = generateHTML;