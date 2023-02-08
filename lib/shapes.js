const GetShapes = require("./cli")

// created a shapes class to generate shapes and allow the other files to inherit color,text and object color.  
class Shapes {
  constructor(color, text, setColor, polygon) {
    this.color = color;
    this.text = text;
    this.setColor = setColor;
    this.polygon = polygon;

  }
};


// exported file to be used in other pages
module.exports = Shapes
