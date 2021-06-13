var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
var score = 0
var wormHorde = []
var playerImg = new Image()
playerImg.src = "../images/player.png"
var sad = new Audio('../sound/sad.wav')
var happy = new Audio('../sound/happy.wav')
var trackMovement = 0
var keys = []
var fps = 20

//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")

//sprite sheet
var sheet = {
    width: 267,
    height: 400
}

var player = {
    x: c.width / 2,
    y: c.height / 2,
    vx: 0,
    vy: 0,
    speed: 6,
    width: sheet.width / 4,
    height: sheet.height / 4
}

var worm = {
    x: getRandomInt(12, c.width - 12),
    y: getRandomInt(170, c.height),
    vx: getRandomInt(-3, 3),
    vy: getRandomInt(-3, 3),
    radius: 10,
    lifeCycle: 0
}

var currentFrame = 0

window.addEventListener("keydown", keysPressed, false)
window.addEventListener("keyup", keysReleased, false)

function keysPressed(e) {
    keys[e.keyCode] = true
    e.preventDefault()
}

function keysReleased(e) {
    keys[e.keyCode] = false
    trackMovement = 0
}

function controls() {
    if (keys[37] || keys[65] && player.x >= 0) { // left
        player.x -= player.speed
        trackMovement = 1
    }

    if (keys[38] || keys[87] && player.y >= 110) { // up
        player.y -= player.speed
        trackMovement = 3
    }

    if (keys[39] || keys[68] && player.x <= (c.width - player.width + 5)) { // right
        player.x += player.speed
        trackMovement = 2
    }

    if (keys[40] || keys[83] && player.y <= (c.height - player.height)) { // down
        player.y += player.speed
        trackMovement = 0
    }

    if (keys[32]) { //space - action
        sad.play()
    }
}

function animate() {
    //player
    currentFrame = ++currentFrame % 4
    player.vx = currentFrame * player.width
    player.vy = 3
    switch (trackMovement) {
        case 0:
            player.vy = trackMovement * player.height
            break
        case 1:
            player.vy = trackMovement * player.height
            break
        case 2:
            player.vy = trackMovement * player.height
            break
        case 3:
            player.vy = trackMovement * player.height
            break
    }

    //worm - lifecycle
    switch (worm.lifeCycle) {
        case 0:
            worm.x += worm.vx
            worm.y += worm.vy
            worm.lifeCycle = 1
            break

        case 1:
            worm.x += worm.vx
            worm.y += worm.vy
            worm.radius += 1
            if (worm.radius > 30) {
                worm.lifeCycle = 2
            }
            break

        case 2:
            worm.x += worm.vx
            worm.y += worm.vy
            worm.radius -= 1
            if (worm.radius < 1) {
                worm.lifeCycle = 3
            }
            break

        case 3:
            worm.x = getRandomInt(12, c.width - 12)
            worm.y = getRandomInt(170, c.height)
            worm.lifeCycle = 0
            break
    }
}

function updateFrame() {
    controls()
    ctx.clearRect(0, 0, c.width, c.height)
    draw()
    animate()
    setTimeout(() => {
        requestAnimationFrame(updateFrame)
    }, 1000 / fps);
}

function draw() {
    ctx.drawImage(playerImg, player.vx, player.vy, player.width, player.height, player.x, player.y, player.width, player.height)
    spawnWorm(worm.x, worm.y, worm.radius)
}

function checkCollision() {

}

function spawnWorm(x, y, r) {
    var grad = ctx.createRadialGradient(x, y, r, Math.PI, 0, 316.23)
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
    grad.addColorStop(1, 'rgba(255, 231, 132, 1)')
    ctx.beginPath()
    ctx.fillStyle = grad
    ctx.arc(x, y, r, Math.PI, 0, false)
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = 'black'
    ctx.closePath()
    ctx.stroke()
}

window.onload = function startGame() {
    updateFrame()
}

function restartGame() {
    wormHorde = []
}

function hypot(length1, length2) {
    return Math.sqrt((length1 * length1) + (length2 * length2))
}

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min)
}