const index = require("../index")
const SVG = require('@svgdotjs/svg.js')
const fs = require('fs/promises')

const triangle = 'polygon points="150, 18 244, 182 56, 182';
const circle = 'circle cx="150" cy="100" r="80"';
const square = 'rect x="400" y="400"'

function prompt (index) {
    const init = index.init;
    
    init();

    function renderSvg(index)
    {
    const color = index.color;
    const design = index.design;
    const shape = index.shape;
    const text = index.text;
    console.log(color);
};


}

prompt(index);





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




// }

// write(color, design, shape, text);


// <?xml version="1.0" encoding="UTF-8" standalone="no"?>
// <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
// <svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
// <rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
// <g opacity="0.8">
// 	<rect x="25" y="25" width="200" height="200" fill="lime" stroke-width="4" stroke="pink" />
// 	<circle cx="125" cy="125" r="75" fill="orange" />
// 	<polyline points="50,150 50,200 200,200 200,100" stroke="red" stroke-width="4" fill="none" />
// 	<line x1="50" y1="50" x2="200" y2="200" stroke="blue" stroke-width="4" />
// </g>
// </svg>




const shape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${pick} fill="${design}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

</svg>`;