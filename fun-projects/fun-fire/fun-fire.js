
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


let quadWidth = 50;
let quadHeight = 50;

let quadRowCount = canvas.height / quadHeight;
let quadColumnCount = canvas.width / quadWidth;




let pixelCount = 128;
let fireIntensity = 255;

let pixel = [];
for(let  c = 0; c < pixelCount; c++) {
    pixel[c] = [];
    for(let r = 0; r < pixelCount; r++) {
        pixel[c][r] = { r: fireIntensity, g: 25, b: 0, a: 1 };
    }
}

let d = new Date();
console.log(d.getSeconds());
function Update() {

  for(let  c = 0; c < pixelCount; c++) {

    for(let r = 0; r < pixelCount; r++) {
        //pixel[c][r] = { r: fireIntensity, g: 0, b: 0, a: 0 };

        ctx.beginPath();
        ctx.rect(c, pixelCount - 1 - r, 1, 1);
        ctx.fillStyle = 'rgba('+ pixel[c][r].r +','+ pixel[c][r].g +','+ pixel[c][r].b +','+ pixel[c][r].a +')';//Numbers from 0 to 9 converted to 0 to 255
        
        ctx.fill();
        ctx.closePath();

        pixel[c][r].r = pixelCount - 1 - r;

        let delta = new Date();
        pixel[c][r].g = (delta.getSeconds() * 2) - r;

    }

  }
  

  requestAnimationFrame(Update);

}
Update();


//RANDOM CODE FROM SOMEWHERE...
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
 }