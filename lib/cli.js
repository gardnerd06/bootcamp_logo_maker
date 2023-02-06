const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const fs = require('fs');
const Triangle = require("./triangle");
const Circle = require("./circle");
const  Square = require("./square");



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
          const pickTri = new Triangle();
          console.log(pickTri);
          return pickTri;
        case "Circle":
          const pickcirc = new Circle();
          
          return pickcirc;
        case "Square":
          const picksqu = new Square();
          
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