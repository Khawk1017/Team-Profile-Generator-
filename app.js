// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// team profiles 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// generate HTML 
const generateHTML = require("./src/htmlRenderer");

// empty array to push the propmt data into about the employees
let teamArr = [];

// a function to add the manager 
const addManager = () => {
    // prompt for only the manager
    return (
        inquirer
        .prompt([
            {
                name: "name",
                type:"input",
                message: "What is your Manager's name?",
                // used validate to make sure the correct answers were applied
                validate: (name) => {
                    if(name){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is your Manager's ID number?",
                validate: (id) => {
                    if(id){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "officeNmuber",
                type: "input",
                message: "What is your Manager's office number?",
                validate: (officeNumber) => {
                    if(officeNumber){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is your Manager's email?",
                validate: (email) => {
                    if(email){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
        ])
        // function to push the data in to manager then in teamArr the calling on addEmployee function
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.officeNumber,
                answers.email
            );
            teamArr.push(manager);
            addEmployee();
        })
    );
};
// function that is intended to prompt the user for the Engineer employee info.
const addEngineer = () => {
    return (
        inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is your Engineer's name?",
                validate: (name) => {
                    if(name){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is your Engineer's ID number?",
                validate: (id) => {
                    if(id){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is your Engineer's email?",
                validate: (email) => {
                    if(email){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "gitHubUsername",
                type: "input",
                message: "What is your Engineer's GitHub username?",
                validate: (gitHubUserName) => {
                    if(gitHubUserName){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.gitHubUserName
            );
            teamArr.push(engineer);
            addEmployee();
        })
    )
};
// function that is intended to prompt the user for the Intern employee info
const addIntern = () => {
    return(
        inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is your Intern's name?",
                validate: (name) => {
                    if(name){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is your Intern's ID number",
                validate: (id) => {
                    if(id){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is your Interns email?",
                validate: (email) => {
                    if(email){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "school",
                type: "input",
                message: "What is your Intern's school name?",
                validate: (school) => {
                    if(school){
                        return true;
                    } else {
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            teamArr.push(intern);
            addEmployee();
        })
    );
};

//  function to give the user the choice select Engineer, Intern,
const addEmployee = () => {
    return(
        inquirer
        .prompt([
            {
                name: "employee",
                type: "input",
                message: "Please confirm the Employee you'd like to insert info for of that you're done.",
                choices: ["Engineer", "Intern", "I am done with my team"],
            },
        ])
        // switch case for the based selection to after it is chosen to call another function based in the intent
        .then((chosen) => {
            switch (chosen.employee){
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                    default:
                        startHtml();
            }
        })
    );
};

// funtction to call and import the generateHTML and then create a file and write the data.
function startHtml() {
    const dom = generateHTML(teamArr);
    fs.writeFile("index.html", dom, function (err){
        if(err) throw err;
        console.log("great job!");
    });
}

// initialize the application in order to start the prompt
function init(){
    addManager();
}

// calling the init function to start the questions.
init();