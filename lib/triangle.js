const Shapes = require("./shapes");



class Triangle extends Shapes { 

    constructor(color,text,design) {
        super(color,text,design)
        // this.color = color;
        // this.text = text
        // this.design = design;
        console.log(`you want a ${this.color} triangle!`)
        this.shape = 'polygon points="150, 18 244, 182 56, 182"';
    }
 };
 module.exports = Triangle;
 
 