class FlyingHeart {
    constructor(sContainer, sGravity) {
        const container = document.querySelector(sContainer);
        const heart = document.createElement('h1');
        heart.innerHTML = '❤️';
        heart.classList.add('flying-heart');
        container.appendChild(heart);
        this.heart = heart;
        this.heartPhysics = {
            position: [Math.random() * window.innerWidth, Math.random() * window.innerHeight],
            speed: [Math.random() * 0.05, 0],
            acceleration: [0, 0],
            mass: 1
        };
        const gravity = document.querySelector(sGravity);
        this.gravityBall = {
            position: [gravity.offsetLeft + gravity.offsetWidth / 2, gravity.offsetTop + gravity.offsetHeight / 2],
            mass: 10,
        };

        this.timer = {
            previousTime: 0,
            fps: 60,
        };
    }

    startAnimation() {
        const animate = this.animate.bind(this);
        window.requestAnimationFrame(animate);
    }

    animate(time) {
        const animate = this.animate.bind(this);
        window.requestAnimationFrame(animate);

        const dt = time - this.timer.previousTime;

        // animation
        if (dt > (1000 / this.timer.fps)) {

            this.timer.previousTime = time;
            if (this.heartPhysics.position[0] > window.innerWidth - 10
                && this.heartPhysics.position[0] < window.innerWidth + 10
                && this.heartPhysics.position[1] > window.innerHeight - 10
                && this.heartPhysics.position[1] < window.innerHeight + 10) {
                this.heartPhysics.speed[0] /= 2;
                this.heartPhysics.speed[1] /= 2;

                return;
            }

            this.heartPhysics.position[0] += this.heartPhysics.speed[0] * dt
            this.heartPhysics.position[1] += this.heartPhysics.speed[1] * dt
            this.heartPhysics.speed[0] += this.heartPhysics.acceleration[0] * dt
            this.heartPhysics.speed[1] += this.heartPhysics.acceleration[1] * dt
            this.heartPhysics.acceleration[0] = this.gravitize(0);
            this.heartPhysics.acceleration[1] = this.gravitize(1);

            this.heart.style.left = this.heartPhysics.position[0] + "px"
            this.heart.style.top = this.heartPhysics.position[1] + "px"
        }
    }

    gravitize(dir = 0) {
        const G = 0.005;
        const rd = this.heartPhysics.position[dir] - this.gravityBall.position[dir];
        const rx = this.heartPhysics.position[0] - this.gravityBall.position[0];
        const ry = this.heartPhysics.position[1] - this.gravityBall.position[1];
        const r = rx * rx + ry * ry;
        const f = -G * (1 / r)
        return rd * f;
    }
}

export const createHeart = () => {
    const heart = new FlyingHeart(".container", ".days");
    heart.startAnimation();
}