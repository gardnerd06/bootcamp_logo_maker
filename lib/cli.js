const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const fs = require('fs');
const Triangle = require("./triangle");
const Circle = require("./circle");
const  Square = require("./square");
const Shapes = require("./shapes");




class GetShapes {
    constructor() {
        this.shape = '';}

        init() {
        const questions = [
   
            {
             type: "input",
             name: "Text",
             message: "What Text would you like on your logo?",
             validate(value) {
               if (value.length <= 3) return true;
               else console.log("You have a maximum of 3 symbols!");
             },
           },
           {
               type: "input",
               name: "Color",
               message: "What text color would you like?",
               validate(value) {
                 if (value !== "") return true;
                 else console.log("You must pick a color!");
               },
             },
              {
               type: "list",
               name: "Shape",
               message: "What shape would you like for your logo",
               choices: [
                   "Triangle",
                   "Square",
                   "Circle",
                 ],
               },
              {
               type: "input",
               name: "Design",
               message: "What color do you want your logo to be?",
               validate(value) {
                 if (value !== "") return true;
                 else console.log("You must pick a color!");
               },
             },
           ]
           return inquirer
 .prompt(questions)
 .then((answers) => {

       const text = answers.Text;
       const color = answers.Color;
       const shape = answers.Shape;
       const design = answers.Design;
       
       module.exports = text,color,design;

       switch (shape) {
        case "Triangle":
          const pickTri = new Triangle(color,text,design);
          render(pickTri);
          return pickTri;
        case "Circle":
          const pickcirc = new Circle(color,text,design);
          render(pickcirc);
          return pickcirc;
        case "Square":
          const picksqu = new Square(color,text,design);
          render(picksqu);
          return picksqu;
        }

        
         //    return writeFile(
        // join(__dirname, '..', 'examples', 'logo.svg'),  
     }).then(() => console.log('logo.svg'))
     .catch((err) => {
       console.log(err);
       console.log('Oops. Something went wrong.');
     });
    };
 
};

module.exports = GetShapes;


function render(pick) {


  console.log(pick.color);
  console.log(pick.text);
  console.log(pick.shape);
  console.log(pick.design);
  
  
  const shapes = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${pick.shape} fill="${pick.design}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${pick.color}">${pick.text}</text>
  
  </svg>`;



  fs.writeFile("../BOOTCAMP_LOGO_MAKER/examples/logo.svg", `${shapes}`, (err) => { 
    if (err) { 
      console.log(err); 
    } 
  });
};