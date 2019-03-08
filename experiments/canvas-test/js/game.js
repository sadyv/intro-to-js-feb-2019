class Game {
    body = null;
    canvas = null;
    sprites = [];
    gameObjects = [];
    constructor() {

    }
    run() {
        this.body = document.body;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.body.appendChild(this.canvas);
        this.sprites.push(document.createElement('img'));
        this.sprites[this.sprites.length -1 ].src = './hero.png';
        this.reset();
    }

    reset() {
        this.body.style.backgroundColor = 'aqua';
        this.canvas.width = 600;
        this.canvas.height = 500;
        this.canvas.style.border = '1px solid black';
        this.play();
    }

    play() {
        this.gameObjects.push(new GameObject(100, 100, 100, 100, this.context, this.sprites[0]));

        this.loop();
    }

    loop() {
        console.log(this);
        if (!this.gameObjects) return;
        console.log('this.gameObjects', this.gameObjects);
        this.gameObjects.forEach( obj => {
            obj.draw();
        });

        window.requestAnimationFrame(this.loop.bind(this))
    }
}