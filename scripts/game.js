var score = 0
var player = new Image()
player.src = "../images/player.png"

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

    if (keys[38] || keys[87] && y >= 0) { // up //TODO: gotta fix to restrict water movement
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

    //space - action
    if (keys[32]) {
        //TODO: what happens if space is hit?
    }
    e.preventDefault();
    drawImage();
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

function drawImage() {
    updateFrame()
    ctx.drawImage(player, srcX, srcY, playerW, playerH, x, y, playerW, playerH)
}

setInterval(function () {
    drawImage()
    //requestAnimationFrame(updateFrame)
}, 200)

//Worms Class
class Worm {
    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }
}

// function startGame() {
//     var startMenu = new bootstrap.Modal(document.getElementById('startMenu'), options)
//     startMenu.show()
// }

//Draw Player
// var player = new Player(playerPic, canvas.width / 2, canvas.height / 2)
// player.draw()

//Spawn Worms
// function spawnWorms() {
//     setInterval(() => {
//         const x = Math.random() * canvas.width
//         const y = Math.random() * canvas.height
//         const radius = Math.random() * 30
//         const color = 'red'

//         worms = new Worm(x, y, radius, color)
//         worms.draw()
//         console.log('Enemy')
//     }, 1000)
// }

// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, canvas.width, canvas.height)
//     worms.forEach(enemy => {
//         enemy.update
//     })
// }

//spawnWorms()

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}
