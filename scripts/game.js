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
    ctx.clearRect(0, 0, c.width, c.height)
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
    ctx.drawImage(playerImg, srcX, srcY, player.width, player.height, player.x, player.y, player.width, player.height)
}

class GameObject {
    constructor(x, y, vx, vy, width, height) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.width = width;
        this.height = height;
        this.isColliding = false;
    }
}

class Worm extends GameObject {
    constructor(x, y, vx, vy, radius) {
        super(x, y, vx, vy)
        this.radius = radius
        this.lifeCycle = 0

        this.draw = this.draw.bind(this)
        this.update = this.update.bind(this)
        this.timeout = this.timeout.bind(this)
        setTimeout(this.timeout, getRandomInRange(1000, 10000))
    }

    timeout() {
        this.enabled = true;
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

    update() {
        if (this.enabled == false) {
            return;
        }

        switch (this.lifeCycle) {
            case 0:
                this.x += this.vx;
                this.y += this.vy;
                this.lifeCycle = 1;

                break;
            case 1:
                this.x += this.vx;
                this.y += this.vy;
                this.radius += 0.1;
                if (this.radius > 30) {
                    this.lifeCycle = 2;
                }

                break;
            case 2:
                this.x += this.vx;
                this.y += this.vy;
                this.radius -= 0.1;
                if (this.radius < 1) {
                    this.lifeCycle = 3;
                }

                break;
            case 3:
                this.x = getRandomInRange(50, 950);
                this.y = getRandomInRange(250, 600);
                this.lifeCycle = 0;
                break;
        }

    }
}

function drawPlayer() {
    updateFrame()
    ctx.drawImage(playerImg, srcX, srcY, player.width, player.height, player.x, player.y, player.width, player.height)
}

function spawnWorm(x, y, r) {
    var grad = ctx.createRadialGradient(300, 100, 0, 300, 100, 316.23)
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 231, 132, 1)');

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

    drawPlayer()

    for (i = 10; i < 10; i++) {
        var worm = new Worm(getRandomInt(12, c.width - 12), getRandomInt(170, c.height), getRandomInt(-1, 1), getRandomInt(-1, 1), 10)
        wormHorde.push(worm)
        console.log(worm)
    }
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
        updateGameArea();
        draw();
    }
    window.requestAnimationFrame(gameLoop);
}

function hypot(length1, length2) {
    return Math.sqrt((length1 * length1) + (length2 * length2));
}

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}