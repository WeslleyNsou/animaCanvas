//Captura o id canvas e o contexto 2D para desenhar nele
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//propriedades do circulo
let x = 100;
let y = 100;
let radius = 30;
let velocityX = 4;
let velocityY = 3;
let color = 'blue';

//loop de animação
function animar() {
    //limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //desenha o circulo
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    //atualiza a posição do circulo
    x += velocityX;
    y += velocityY;

    //verifica colisão com as bordas laterais do canvas
    if (x + radius > canvas.width || x - radius < 0) {
        velocityX = -velocityX; //inverte a direção horizontal
    }

    //  verifica colisão com as bordas superiores e inferiores do canvas
    if (y + radius > canvas.height || y - radius < 0) {
        velocityY = -velocityY; //inverte a direção vertical
    }   

    requestAnimationFrame(animar); //chama a função novamente para criar o loop
}

//clique do mouse para mudar a cor do circulo
canvas.addEventListener('click', () => {
    //gera uma cor aleatoria
    const cores = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    color = corAleatoria; //atualiza a cor do circulo
});

animar(); //inicia a animação