const index = require("../index")
const SVG = require('@svgdotjs/svg.js')
const fs = require('fs/promises')

function prompt (index) {
    const init = index.init;
    
    init();
}

prompt(index);


function renderSvg(index)
    {
    const color = index.color;
    const design = index.design;
    const shape = index.shape;
    const text = index.text;
    console.log(color);
};


module.exports = renderSvg;
// SVG.Container ();

// class Svg {
//     constructor (color, design,shape,text) {

//         console.log(color);
//         console.log(design);
//         console.log(shape);
//         console.log(text);
//     }
// }

// Svg (color,design,shape,text);
// async function write (color, design, shape, text){

// const rect = draw.rect(100,100);
// const circle = draw.circle(100);
// const polyline = draw.polyline(0, 50, 220, -50, 60, 0);

// const deploy = `<!DOCTYPE html>
// <html>
// <head>
//   <title>SVG.js</title>
//   <script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js"></script>
// </head>
// <body>
// ${rect}
// ${circle}
// ${polyline}
// </body>
// </html>`


// fs.writeFile("../examples/index.html", deploy, "utf-8",callback);

// }

// write(color, design, shape, text);
