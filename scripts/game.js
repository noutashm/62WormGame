var score = 0
var player = new Image()
player.src = "../images/player.png"
var sad = new Audio('../sound/sad.wav')
var happy = new Audio('../sound/happy.wav')

//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")

//Canvas 100% of screen size
// c.width = window.innerWidth
// c.height = window.innerHeight

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

// player co-ordinates
var x = c.width / 2
var y = c.height / 2

//sprite sheet
var sheetWidth = 267
var sheetHeight = 400

var playerW = sheetWidth / 4
var playerH = sheetHeight / 4

var currentFrame = 0
var trackMovement = 0
var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;

    if (keys[37] || keys[65] && x >= 0) { // left
        x -= 4
        trackMovement = 1
    }

    if (keys[38] || keys[87] && y >= 110) { // up
        y -= 4
        trackMovement = 3
    }

    if (keys[39] || keys[68] && x <= (c.width - playerW + 5)) { // right
        x += 4
        trackMovement = 2
    }

    if (keys[40] || keys[83] && y <= (c.height - playerH)) { // down
        y += 4
        trackMovement = 0
    }

    if (keys[32]) { //space - action
        sad.play()
        //TODO: what happens if space is hit?
    }
    e.preventDefault();
    drawPlayer();
}

function keysReleased(e) {
    keys[e.keyCode] = false;
    trackMovement = 0
}

function updateFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    currentFrame = ++currentFrame % 4;
    srcX = currentFrame * playerW
    srcY = 3
    switch (trackMovement) {
        case 0:
            srcY = trackMovement * playerH
            break;
        case 1:
            srcY = trackMovement * playerH
            break;
        case 2:
            srcY = trackMovement * playerH
            break;
        case 3:
            srcY = trackMovement * playerH
            break;
    }
}

function drawPlayer() {
    updateFrame()
    ctx.drawImage(player, srcX, srcY, playerW, playerH, x, y, playerW, playerH)
}

setInterval(function () {
    drawPlayer()
    spawnWorm(50)
    //requestAnimationFrame(updateFrame)
}, 300)

//Worms Class

function spawnWorm(r) {
    var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23)
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 231, 132, 1)');

    const x = Math.random() * c.width
    const y = Math.random() * c.height + 150

    ctx.beginPath()
    ctx.fillStyle = grad
    ctx.arc(x, y, r, Math.PI, 0, false)
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = 'black'
    ctx.closePath()
    ctx.stroke()
}

// function startGame() {
//     var startMenu = new bootstrap.Modal(document.getElementById('startMenu'), options)
//     startMenu.show()
// }

//Spawn Worms
setInterval(() => {

}, 2000)
// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, canvas.width, canvas.height)
//     worms.forEach(enemy => {
//         enemy.update
//     })
// }

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}
