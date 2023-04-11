//  myTeam function is using the data to correctly disaplay the app
function  myTeam(teamArr){
    console.log(teamArr);
    for (var i = 0; i < teamArr.length; i++){
        // saying if the role equals Manager then passing that data into the myManager function
        if (teamArr[i].getRole() === "Manager"){
            myManager(teamArr[i]);
        }
        // saying if the role equals Engineer then passing that data into the myEngineer function
        if (teamArr[i].getRole() === "Engineer"){
            MyEngineer(teamArr[i]);
        }
        // saying if the role equals Intern then passing that data into the myIntern funtction
        if (teamArr[i].getRole() === "Intern"){
            myIntern(teamArr[i]);
        }
        // return the joine arrays a string 
        return htmlTeam.join("");
    }
}
myTeam(teamArr);
// empty array to take in all the html strings with data
const htmlTeam = [];
//  myManager function is inserting the correct data in to the html string and pushing it in to an array
const myManager = (manager) => {
    // the manager html template
    let htmlManager = `
        <div class="manager-card container bg-light mb-2">
            <h2 class="manager-name container">${manager.name}</h2>
            <ul class="manager-info container">
                <li class="id col">ID:${manager.id}</li>
                <li class="email col">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                <li class="office-number col">Office Number: ${manager.officeNumber}</li>
                </ul>
        </div>
    `;
    // pushing manager template in to htmlTeam array
    htmlTeam.push(htmlManager);
};

// MyEngineer functIon is inserting the correct data in to the html string and pushing it in to an array
const MyEngineer = (engineer) => {
    // the engineer html template
    let htmlEngineer = `
        <div class="engineer-card container bg-light mb-2">
            <h2 class="engineer-name container">${engineer.name}</h2>
            <ul class="engineer-info container">
                <li class="id col">ID:${engineer.id}</li>
                <li class="email col">Email: <a href="mailto: ${engineer.email}">${engineer.email}</li>
                <li class="engineer-username col">GitHub: <a href="https://github.com/${engineer.GitHub}">${engineer.GitHub}</li>
            </ul>
        </div>
    `;
    // pushing engineer template to the htmlTeam array
    htmlTeam.push(htmlEngineer);
};

// myIntern function is inserting the correctdata in to the html string and pushing it in to an array.
const myIntern = (intern) => {
    // the intern html template
    let htmlIntern = `
        <div class="intern-card container bg-light mb-2">
            <h2 class="intern-name container bg-light mb-2">${intern.name}</h2>
            <ul class="intern-info container">
                <li class="id col">ID:${intern.id}</li>
                <li class="email col">Email: <a href="mailto: ${intern.email}">${intern.email}</li>
                <li class="school col">${intern.school}</li>
            </ul>
        </div>
    `;
    // pushing intern template into htmlTeam array
    htmlTeam.push(htmlIntern);
};
//  a for loop so i can pass each function data and to create as many times as needed 
// for (var i = 0; i < teamArr.length; i++){
//     // saying if the role equals Manager then passing that data into the myManager function
//     if (teamArr[i].getRole() === "Manager"){
//         myManager(teamArr[i]);
//     }
//     // saying if the role equals Engineer then passing that data into the myEngineer function
//     if (teamArr[i].getRole() === "Engineer"){
//         MyEngineer(teamArr[i]);
//     }
//     // saying if the role equals Intern then passing that data into the myIntern funtction
//     if (teamArr[i].getRole() === "Intern"){
//         myIntern(teamArr[i]);
//     }
//     // return the joine arrays a string 
//     return htmlTeam.join("");
// }

// creating an html template that passes multiple div templates
function generateHTML(teamArr){
    // the readME template literal so it structured and recevies data input in the correct area
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1 class="team-card">My Team</h1>
        </header>

        <main> ${myTeam(teamArr)} </main>

        <footer>

        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>

    `;
}

// exporting the function generateHTML
module.exports = generateHTML;