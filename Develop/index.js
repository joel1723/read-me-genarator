const inquirer = require("inquirer");
const fs = require("fs")
const path= require('path')
const generateMarkdown= require('./utils/generateMarkdown');
const { type } = require("os");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        name:'title',
        message:'what is title of your project',

        type:'input'

    },{
        name:'license',
        message:'what license does your project have?',

        type:'input'

    },{
        name:'discription',
        message: 'write a discription of your project',
        type: 'input'
    },{
            name:'installation',
            message:'discribe installation process',
            type:"input"

    },{
        name:'contribution',
        message:"who is contributing to this project?",
        type:'input'
    },{
        name:'username',
        message:'write github user name',
        type:"input"

    },
    {
        name:'email',
        message:'write your email',
        type:"inputs"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
       console.log(data) 
       writeToFile('readme.md',generateMarkdown(data))
    })
}
    

// Function call to initialize app
init();
