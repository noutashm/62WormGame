var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
var score = 0
var wormHorde = []
var playerImg = new Image()
playerImg.src = "../images/player.png"

var sad = new Audio('../sound/sad.wav')
var happy = new Audio('../sound/happy.wav')
var start = new Audio('../sound/start-game.wav')
var over = new Audio('../sound/game-over.wav')

var trackMovement = 0
var keys = []
var fps = 20
var currentFrame = 0
var counter = 0

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
    speed: 8,
    width: sheet.width / 4,
    height: sheet.height / 4
}

class Worm {
    constructor(x, y, vx, vy, width, height) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.width = width
        this.height = height
        this.lifeCycle = 0
    }

    draw() {
        var grad = ctx.createRadialGradient(this.x + this.width / 2, this.y + this.height, this.width / 2, Math.PI, 0, 316.23)
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
        grad.addColorStop(1, 'rgba(255, 231, 132, 1)')
        ctx.beginPath()
        ctx.fillStyle = grad
        ctx.arc(this.x + this.width / 2, this.y + this.height, this.width / 2, Math.PI, 0, false)
        ctx.fill()
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black'
        ctx.closePath()
        ctx.stroke()
    }

    update() {
        //worm lifecycle
        switch (this.lifeCycle) {
            case 0:
                this.x += this.vx
                this.y += this.vy
                this.lifeCycle = 1
                break

            case 1:
                this.x += this.vx
                this.y += this.vy
                this.width += 1;
                this.height += 1;
                if (this.width > 50) {
                    this.lifeCycle = 2
                }
                break

            case 2:
                this.x += this.vx
                this.y += this.vy
                this.width -= 1;
                this.height -= 1;
                if (this.width < 1) {
                    this.lifeCycle = 3
                }
                break

            case 3:
                this.x = getRandomInt(12, c.width - 12)
                this.y = getRandomInt(170, c.height)
                this.width = 20
                this.height = 100
                this.lifeCycle = 0
                break
        }
    }
}

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
    if (keys[37] && player.x >= 0 || keys[65] && player.x >= 0) { // left
        player.x -= player.speed
        trackMovement = 1
    }

    if (keys[38] && player.y >= 110 || keys[87] && player.y >= 110) { // up
        player.y -= player.speed
        trackMovement = 3
    }

    if (keys[39] && player.x <= (c.width - player.width + 5) || keys[68] && player.x <= (c.width - player.width + 5)) { // right
        player.x += player.speed
        trackMovement = 2
    }

    if (keys[40] && player.y <= (c.height - player.height) || keys[83] && player.y <= (c.height - player.height)) { // down
        player.y += player.speed
        trackMovement = 0
    }

    if (keys[32]) { //space - action
        killWorm()
    }
}

function animatePlayer() {
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

    for (var i = 0; i < wormHorde.length; i++) {
        wormHorde[i].update();
    }
}

function updateFrame() {
    controls()
    ctx.clearRect(0, 0, c.width, c.height)
    draw()
    animatePlayer()
    wormCollision()
    var frame = setTimeout(() => {
        requestAnimationFrame(updateFrame)
    }, 1000 / fps);
}

function draw() {
    //player
    ctx.drawImage(playerImg, player.vx, player.vy, player.width, player.height, player.x, player.y, player.width, player.height)

    //worm
    for (var i = 0; i < wormHorde.length; i++) {
        wormHorde[i].draw();
    }

    //score
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 10, 40);

    //timer
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Timer: " + counter, 10, 70);
}

var startMenuModal = new bootstrap.Modal(document.getElementById('startMenu'))
var gameOverModal = new bootstrap.Modal(document.getElementById('gameOver'))

window.onload = function startMenu() {
    startMenuModal.show();
}

function startGame() {
    var timer = document.getElementById("timer").value
    var volume = document.getElementById("volume").value
    var convertedTime = timer * 1000

    happy.volume = volume;
    sad.volume = volume;
    start.volume = volume;
    over.volume = volume;

    //make 10 worms
    wormHorde = []
    for (var i = 0; i < 10; i++) {
        var worm = new Worm(getRandomInt(12, c.width - 12), getRandomInt(170, c.height), getRandomInt(-3, 3), getRandomInt(-3, 3), 20, 100)
        wormHorde.push(worm)
    }

    start.play()

    //timer
    var stimer = setInterval(() => {
        document.getElementById('score').innerHTML = score;
        gameOverModal.show()
        over.play()
    }, convertedTime);

    counter = parseInt(timer)
    var tm = setInterval(countDown, 1000);

    function countDown() {
        counter--;
        if (counter == 0) {
            clearInterval(tm);
            clearInterval(stimer);
            clearTimeout(frame);
        }
    }

    updateFrame()
}

function restartGame() {
    var restartTimer = document.getElementById("restartTimer").value
    var restartVolume = document.getElementById("restartVolume").value
    var restartConvertedTime = restartTimer * 1000;

    happy.volume = restartVolume;
    sad.volume = restartVolume;
    start.volume = restartVolume;
    over.volume = restartVolume;

    wormHorde = []
    for (var i = 0; i < 10; i++) {
        var worm = new Worm(getRandomInt(12, c.width - 12), getRandomInt(170, c.height), getRandomInt(-3, 3), getRandomInt(-3, 3), 20, 100)
        wormHorde.push(worm)
    }

    score = 0
    counter = 0
    document.getElementById('score').innerHTML = 0

    start.play()

    var gtimer = setInterval(() => {
        document.getElementById('score').innerHTML = score
        gameOverModal.show()
        over.play()
    }, restartConvertedTime);

    //timer
    counter = parseInt(restartTimer)
    var rtm = setInterval(restartCountDown, 1000);

    function restartCountDown() {
        counter--;
        if (counter == 0) {
            clearInterval(rtm);
            clearInterval(gtimer);
            clearTimeout(frame);
        }
    }
    updateFrame()
}

function killWorm() {
    for (var i = 0; i < wormHorde.length; i++) {
        if (getDistance(player.x, player.y, player.width, player.height, wormHorde[i].x, wormHorde[i].y, wormHorde[i].width, wormHorde[i].height)) {
            happy.play()
            score++
            wormHorde[i].lifeCycle = 3
            return
        }
        sad.play()
    }
}

function wormCollision() {
    for (var i = 0; i < this.wormHorde.length; i++) {
        //check y-axis collision
        if (wormHorde[i].y + wormHorde[i].height >= c.height) {
            wormHorde[i].vy = -wormHorde[i].vy;
            wormHorde[i].y = c.height - wormHorde[i].height - 1;
        }
        else if (wormHorde[i].y <= 80) {
            wormHorde[i].vy = -wormHorde[i].vy;
            wormHorde[i].y = 80;
        }

        //check x-axis collision
        if (wormHorde[i].x + wormHorde[i].width >= c.width) {
            wormHorde[i].vx = -wormHorde[i].vx;
            wormHorde[i].x = c.width - wormHorde[i].width - 1;
        }
        else if (wormHorde[i].x <= 0) {
            wormHorde[i].vx = -wormHorde[i].vx;
            wormHorde[i].x = 1;
        }
    }
}

function getDistance(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
        return false;
    }
    return true;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}