const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const width = 640, height = 480
const lw = 1

//new
class Block{
    constructor(x, y, w=ms, h=ms, col="sienna", stroke){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.col = col
        this.stroke = stroke
    }
    draw(){
        drawRect(this.x, this.y, this.w, this.h, this.col, this.stroke)
    }
}
function drawRect(x, y, w, h, col, stroke=false){
    ctx.fillStyle = col
    ctx.fillRect(x, y, w, h)
    if(stroke){
        ctx.strokeRect(x+lw/2, y+lw/2, w+lw/2, h+lw/2)
    }
}
function init() {
    canvas.width = width
    canvas.height = height
    ctx.lineWidth = lw

    loop()


start()
}

    const ms = 32
    let map = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]
    function start() {
        blocks = []
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[0].length; j++){
                let m = map[i][j]
                if(m == 1) blocks.push(new Block(j*ms, i*ms))
            }
        }
    }
function loop(){
    drawRect(0, 0, width, height, "aliceblue")
    blocks.forEach(block => block.draw())
    requestAnimationFrame(loop)
}

onload = init