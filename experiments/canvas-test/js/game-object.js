class GameObject {
    x = null;
    y = null;
    w = null;
    h = null;
    context = null;
    sprite = {
        img: null,
        config: {
            x: 0,
            y: 0,
            w: 100,
            h: 100,
        }
    };
    constructor(x,y,w,h, context, sprite) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.context = context;
        this.sprite.img = sprite;
    }
    draw() {
        this.context.drawImage(
            this.sprite.img,
            this.sprite.config.x,
            this.sprite.config.y,
            this.sprite.config.w,
            this.sprite.config.h,
            this.x,
            this.y,
            this.w,
            this.h,
            )
    }
}