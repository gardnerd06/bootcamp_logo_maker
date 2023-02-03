
const questions = [
   
     {
      type: "input",
      name: "Text",
      message: "What Text would you like on your logo?",
      validate(value) {
        if (value !== "") return true;
        else console.log("You must input valid text!");
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
function init(inquirer) {}
const inquirer = require("inquirer");
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)})


    init();