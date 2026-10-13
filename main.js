let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

canvas.width =windowWidth;
canvas.height = windowHeight;

canvas.style.backgroundColor = '#ff8';

class Bola {
    constructor(x, y, raio, cor) {
        this.x = x;
        this.y = y;
        this.raio = raio;
        this.cor = cor;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
        ctx.fillStyle = this.cor;
        ctx.fill();
        ctx.closePath();
    }
}

onclick = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let newBola = new Bola(x, y, 50, 'blue');
    newBola.draw(ctx);
}

