var score = 0
var wormHorde = []
var playerImg = new Image()
playerImg.src = "../images/player.png"
var sad = new Audio('../sound/sad.wav')
var happy = new Audio('../sound/happy.wav')

//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")

var player = {
    y: 0,
    x: 0,
    width: 0,
    height: 0
}

player.x = c.width / 2
player.y = c.height / 2

//sprite sheet
var sheet = {
    width: 267,
    height: 400
}

player.width = sheet.width / 4
player.height = sheet.height / 4

var currentFrame = 0

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
var trackMovement = 0
var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;

    if (keys[37] || keys[65] && player.x >= 0) { // left
        player.x -= 4
        trackMovement = 1
    }

    if (keys[38] || keys[87] && player.y >= 110) { // up
        player.y -= 4
        trackMovement = 3
    }

    if (keys[39] || keys[68] && player.x <= (c.width - player.width + 5)) { // right
        player.x += 4
        trackMovement = 2
    }

    if (keys[40] || keys[83] && player.y <= (c.height - player.height)) { // down
        player.y += 4
        trackMovement = 0
    }

    if (keys[32]) { //space - action
        // if (hypot(zombie.x - shot.x, zombie.y - shot.y) < 10) {
        //     zombieHorde.splice(i, 1);
        //     shots.splice(j, 1);
        //     spawnZombie();
        //     spawnZombie();
        //     score++
        // }
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
    ctx.clearRect(player.x - 5, player.y, player.width + 10, player.height)
    currentFrame = ++currentFrame % 4;
    srcX = currentFrame * player.width
    srcY = 3
    switch (trackMovement) {
        case 0:
            srcY = trackMovement * player.height
            break;
        case 1:
            srcY = trackMovement * player.height
            break;
        case 2:
            srcY = trackMovement * player.height
            break;
        case 3:
            srcY = trackMovement * player.height
            break;
    }
}

class Worm {
    constructor(x, y, radius, speed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.speed = speed
        this.draw()
    }

    draw() {
        var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23)
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(1, 'rgba(255, 231, 132, 1)');

        ctx.beginPath()
        ctx.fillStyle = grad
        ctx.arc(this.x, this.y, this.radius, Math.PI, 0, false)
        ctx.fill()
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black'
        ctx.closePath()
        ctx.stroke()

        wormHorde.push(worm);
    }

    move() {
        this.x + this.speed
        this.y + this.speed
    }
}

function drawPlayer() {
    updateFrame()
    ctx.drawImage(playerImg, srcX, srcY, player.width, player.height, player.x, player.y, player.width, player.height)
}

var worm = new Worm(getRandomInt(12, c.width - 12), getRandomInt(170, c.height), 10, getRandomInt(-10, 10))

console.log(worm);
setInterval(() => {
    drawPlayer()
    //wormLifeCycle()
    //requestAnimationFrame(updateFrame)
}, 300)

var trackWorms = 0
//Spawn Worms
setInterval(() => {
    if (trackWorms < 5) {
        worm.draw()
        worm.move()
        trackWorms++
    }
}, 2000)


// function spawnWorm(x, y, r) {
//     var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23)
//     grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
//     grad.addColorStop(1, 'rgba(255, 231, 132, 1)');

//     ctx.beginPath()
//     ctx.fillStyle = grad
//     ctx.arc(x, y, r, Math.PI, 0, false)
//     ctx.fill()
//     ctx.lineWidth = 1
//     ctx.strokeStyle = 'black'
//     ctx.closePath()
//     ctx.stroke()

//     wormHorde.push(worm);
// }

function wormLifeCycle() {
    worm.x = Math.random() * c.width
    worm.y = Math.random() * c.height + 170
    worm.r = 10

    //spawnWorm(worm.x, worm.y, worm.r)

    worm.x++
    worm.y++

    var phase1 = true
    var phase2 = false
    var phase3 = false

    // var f1 = setTimeout(function () {
    //     phase1 = false
    //     phase2 = true
    // }, 5000);

    // setTimeout(function () {
    //     phase2 = false
    //     phase3 = true
    //     clearInterval(f1)
    // }, 5000);
}

// function startGame() {
//     var startMenu = new bootstrap.Modal(document.getElementById('startMenu'), options)
//     startMenu.show()
// }


function hypot(length1, length2) {
    return Math.sqrt((length1 * length1) + (length2 * length2));
}

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}