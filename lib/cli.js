const inquirer = require("inquirer");
const fs = require('fs');
const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");
const Shapes = require("./shapes");
// used require to import files from other folders to be used here



// created a constructor class to create shapes for my logo.svg file, constructor uses a test to allow the user to create a unique logo
class GetShapes {
  constructor() {
    this.shape = '';
  }
  // created a question array of objects to allow inquirer to be utilized .
  init() {
    const questions = [

      {
        type: "input",
        name: "Text",
        message: "What text would you like on your logo?",
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
        const polygon = answers.Shape;
        const setColor = answers.Design;

        module.exports = text, color, setColor;
        // used switch case to call the indivicual shape pages to generate a new shape to be displayed in logo.svg
        switch (polygon) {
          case "Triangle":
            const pickTri = new Triangle(color, text, setColor, polygon);
            render(pickTri);
            return pickTri;
          case "Circle":
            const pickcirc = new Circle(color, text, setColor, polygon);
            render(pickcirc);
            return pickcirc;
          case "Square":
            const picksqu = new Square(color, text, setColor, polygon);
            render(picksqu);
            return picksqu;
        }

      }).then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  };

};

module.exports = GetShapes;

// created a render function to dynamically display a unique logo page created by taking a users input and creating a logo.
function render(pick) {

  // created a switch case to utilize render method
  switch (pick.polygon) {
    case "Circle":
      const Logo1 = Circle.prototype.render(pick.setColor);
      input(Logo1)
      return Logo1;
    case "Square":
      const Logo2 = Square.prototype.render(pick.setColor);
      input(Logo2);
      return Logo2;
    case "Triangle":
      const Logo3 = Triangle.prototype.render(pick.setColor);
      input(Logo3)
      return Logo3;
  }

  function input(Logo) {
    const shapes = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${Logo}
    
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${pick.color}">${pick.text}</text>
  
  </svg>`;
    // used fs.writefile to create a new file to display the created logo
    fs.writeFile("../BOOTCAMP_LOGO_MAKER/examples/logo.svg", `${shapes}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    return shapes;
  }


};