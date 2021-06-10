var score = 0
var playerPic = new Image()
playerPic.src = "../images/player.png"
//playerPic.addEventListener("load", loadImage, false);

//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")

//Canvas 100% of screen size
// c.width = window.innerWidth
// c.height = window.innerHeight

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var x = c.width / 2
var y = c.height / 2

var sheetWidth = 267
var sheetHeight = 400

var playerW = sheetWidth / 4
var playerH = sheetHeight / 4

var currentFrame = 0
var trackMovement = 0
var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;

    // left
    if (keys[37] || keys[65]) {
        x -= 2
        trackMovement = 1
    }

    // down
    if (keys[38] || keys[87]) {
        y -= 2
        trackMovement = 3
    }

    // right
    if (keys[39] || keys[68]) {
        x += 2
        trackMovement = 2
    }

    // up
    if (keys[40] || keys[83]) {
        y += 2
        trackMovement = 0
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
    ctx.drawImage(playerPic, srcX, srcY, playerW, playerH, x, y, playerW, playerH)
}

setInterval(function () {
    drawImage()
}, 200)

//======================CLASSES===========================//

class GameObject {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, Math.PI, 0, false)
        ctx.fill()
    }

    update() {

    }
}

//Player Class
// class Player extends GameObject {
//     constructor() {
//     }

//     draw() {
//         //let pos = this.positions[position]
//         ctx.drawImage(this.img, this.x, this.y)
//         //ctx.fillStyle = this.color
//         ctx.fill()
//     }
// }

//Worms Class
class Worm extends GameObject {
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