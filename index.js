const svg = require("./lib/shapes")
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
function init(svg) {
  
const inquirer = require("inquirer");
inquirer
  .prompt(questions)
  .then((answers) => {
    let text = answers.Text;
    let color = answers.Color;
    let shape = answers.Shape;
    let design = answers.Design;
    
    
    console.log(text,color,shape,design);
    module.exports = {text, color, shape, design};
    
    
    }
    
       )
         
  }
  
    module.exports = {init}

   
    function render() {





      fs.writeFile("../examples/logo.svg", shape);
    };