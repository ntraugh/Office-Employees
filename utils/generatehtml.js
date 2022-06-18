
const makeTeam = team => {
    const makeManager = manager => {
        return ` <div class="col-md-4 col-sm-6 col-12 col-lg-4">
        <div class="card mb-3 rounded shadow-lg">
            <div class="card-header bg-primary">
                <h5 class="text-left text-white">${manager.newName()}</h5>
                <h5 class="text-left text-white">Manager</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.newId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.newEmail()}"></a>${manager.newEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber()} </li>
                </ul>
            </div>
        </div>
    </div>`
    }
    const makeEngineer = engineer => {
        return ` <div class="col-md-4 col-sm-6 col-12 col-lg-4">
        <div class="card mb-3 rounded shadow-lg">
            <div class="card-header bg-primary">
                <h5 class="text-left text-white">${engineer.newName()}</h5>
                <h5 class="text-left text-white">${engineer.newPosition()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.newId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.newEmail()}"></a>${engineer.newEmail()}</li>
                    <li class="list-group-item">GitHub: ${engineer.newGithub()} </li>
                </ul>
            </div>
        </div>
    </div>`
    }
    const makeIntern = intern => {
        return ` <div class="col-md-4 col-sm-6 col-12 col-lg-4">
        <div class="card mb-3 rounded shadow-lg">
            <div class="card-header bg-primary">
                <h5 class="text-left text-white">${intern.newName()}</h5>
                <h5 class="text-left text-white">${intern.newPosition()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.newId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.newEmail()}"></a>${intern.newEmail()}</li>
                    <li class="list-group-item">School: ${intern.newSchool()} </li>
                </ul>
            </div>
        </div>
    </div>`
    }
    // adding map and filter methods since for loop was giving issues
    const newHTML = []
    newHTML.push(team
        .filter(employee => employee.newPosition() === "Manager")
        .map(manager => makeManager(manager))
    );
    newHTML.push(team
        .filter(employee => employee.newPosition() === "Engineer")
        .map(engineer => makeEngineer(engineer))
        .join("")
    );
    newHTML.push(team
        .filter(employee => employee.newPosition() === "Intern")
        .map(intern => makeIntern(intern))
        .join("")
    );
    return newHTML.join("")
}


module.exports = generateHTML => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        .jumbotron h1 {
            text-align: center;
            padding: 50px;
            color: white;
        }
        
        .card {
            margin-bottom: 40px;
        }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Office Employees </title>
    </head>
    
    <body>
        <div class="header">
            <div class="jumbotron bg-danger">
                <h1>Office Employees</h1>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row"
                <div class="col-md-4 col-sm-6 col-12 col-lg-4">
                    ${makeTeam(generateHTML)}
                </div>
                
            </div>
        </div>
    
    </body>
    
    </html>`

} // this is where the HTML will go