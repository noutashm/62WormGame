var score = 0
var playerPic = new Image()
playerPic.src = "../images/player-test.png"
//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")

//Canvas 100% of screen size
c.width = window.innerWidth
c.height = window.innerHeight

//======================CLASSES===========================//

//Player Class
class Player {
    constructor(img, x, y) {
        this.img = img
        this.x = x
        this.y = y
    }

    draw() {
        ctx.beginPath()
        //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.drawImage(this.img, this.x, this.y)
        //ctx.fillStyle = this.color
        ctx.fill()
    }

    movePlayer() {
        $('body').bind('keyup', function (event) {
            switch (event.which) {
                case 87:
                case 83: player.ydir = 0; break;
                case 65:
                case 68: player.xdir = 0; break;
            }
            event.preventDefault();
            return false;
        });
    }
}

function startGame() {
    var startMenu = new bootstrap.Modal(document.getElementById('startMenu'), options)
    startMenu.show()
}

//Draw Player
var player = new Player(playerPic, canvas.width / 2, canvas.height / 2)
player.draw()

//Worms Class
class Worm {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, Math.PI, 0, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

//Spawn Worms
function spawnWorms() {
    setInterval(() => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 30
        const color = 'red'

        worms = new Worm(x, y, radius, color)
        worms.draw()
        console.log('Enemy')
    }, 1000)
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    worms.forEach(enemy => {
        enemy.update
    })
}

//spawnWorms()