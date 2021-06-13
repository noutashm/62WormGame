var score = 0
var wormHorde = []
var playerImg = new Image()
playerImg.src = "../images/player.png"
var sad = new Audio('../sound/sad.wav')
var happy = new Audio('../sound/happy.wav')

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
    width: sheet.width / 4,
    height: sheet.height / 4
}

var worm = {
    x: getRandomInt(12, c.width - 12),
    y: getRandomInt(170, c.height),
    vx: getRandomInt(-1, 1),
    vy: getRandomInt(-1, 1),
    radius: 10,
    lifeCycle: 0
}

var currentFrame = 0

window.addEventListener("keydown", keysPressed, false)
window.addEventListener("keyup", keysReleased, false)
var trackMovement = 0
var keys = []

function keysPressed(e) {
    keys[e.keyCode] = true

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
        //     zombieHorde.splice(i, 1)
        //     shots.splice(j, 1)
        //     spawnZombie()
        //     spawnZombie()
        //     score++
        // }
        sad.play()
        //TODO: what happens if space is hit?
    }
    e.preventDefault()
    draw()
}

function keysReleased(e) {
    keys[e.keyCode] = false
    trackMovement = 0
}

function updateFrame() {
    ctx.clearRect(0, 0, c.width, c.height)
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

    switch (worm.lifeCycle) {
        case 0:
            worm.x += worm.vx
            worm.y += worm.vy
            worm.lifeCycle = 1
            break

        case 1:
            worm.x += worm.vx
            worm.y += worm.vy
            worm.radius += 0.1
            if (worm.radius > 30) {
                worm.lifeCycle = 2
            }
            break

        case 2:
            worm.x += worm.vx
            worm.y += worm.vy
            worm.radius -= 0.1
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

// class Worm {
//     constructor(x, y, vx, vy, radius) {
//         this.x = x
//         this.y = y
//         this.vx = vx
//         this.vy = vy
//         this.radius = radius
//         this.lifeCycle = 0

//         this.draw = this.draw.bind(this)
//         this.update = this.update.bind(this)
//         this.timeout = this.timeout.bind(this)
//         setTimeout(this.timeout, getRandomInt(1000, 10000))
//     }

//     timeout() {
//         this.enabled = true
//     }

//     draw() {
//         var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23)
//         grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
//         grad.addColorStop(1, 'rgba(255, 231, 132, 1)')

//         ctx.beginPath()
//         ctx.fillStyle = grad
//         ctx.arc(this.x, this.y, this.radius, Math.PI, 0, false)
//         ctx.fill()
//         ctx.lineWidth = 1
//         ctx.strokeStyle = 'black'
//         ctx.closePath()
//         ctx.stroke()
//     }

//     update() {
//         if (this.enabled == false) {
//             return
//         }

//         switch (this.lifeCycle) {
//             case 0:
//                 this.x += this.vx
//                 this.y += this.vy
//                 this.lifeCycle = 1

//                 break
//             case 1:
//                 this.x += this.vx
//                 this.y += this.vy
//                 this.radius += 0.1
//                 if (this.radius > 30) {
//                     this.lifeCycle = 2
//                 }

//                 break
//             case 2:
//                 this.x += this.vx
//                 this.y += this.vy
//                 this.radius -= 0.1
//                 if (this.radius < 1) {
//                     this.lifeCycle = 3
//                 }

//                 break
//             case 3:
//                 this.x = getRandomInt(50, 950)
//                 this.y = getRandomInt(250, 600)
//                 this.lifeCycle = 0
//                 break
//         }

//     }
// }

function draw() {
    updateFrame()
    ctx.drawImage(playerImg, player.vx, player.vy, player.width, player.height, player.x, player.y, player.width, player.height)

    spawnWorm(getRandomInt(12, c.width - 12), getRandomInt(170, c.height), 10)
}

function spawnWorm(x, y, r) {
    var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23)
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

function startGame() {

    setInterval(() => {
        draw()
    }, 200)
    //window.requestAnimationFrame(drawPlayer)
}

function restartGame() {
    wormHorde = []
}

function gameLoop(time) {
    timeoffset = time
    if (time > endTime && endTime > 0) {
        if (ScoreBoard !== null)
            ScoreBoard.drawEnd(myGameArea.context)
    }
    else {
        updateGameArea()
        draw()
    }
    window.requestAnimationFrame(gameLoop)
}

function hypot(length1, length2) {
    return Math.sqrt((length1 * length1) + (length2 * length2))
}

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min)
}