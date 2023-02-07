const GetShapes = require("./cli")

  // created a shapes class to generate shapes and allow the other files to inherit color,text and object color.  
 class Shapes {
  constructor(color,text,design){
    this.color = color.toLowerCase();
    this.text = text;
    this.design = design.toLowerCase();
    
  }
 }


// exported file to be used in other pages
 module.exports = Shapes
 