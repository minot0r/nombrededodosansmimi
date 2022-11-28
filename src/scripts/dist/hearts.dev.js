"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeart = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FlyingHeart =
/*#__PURE__*/
function () {
  function FlyingHeart(sContainer, sGravity) {
    _classCallCheck(this, FlyingHeart);

    var container = document.querySelector(sContainer);
    var heart = document.createElement('h1');
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
    var gravity = document.querySelector(sGravity);
    this.gravityBall = {
      position: [gravity.offsetLeft + gravity.offsetWidth / 2, gravity.offsetTop + gravity.offsetHeight / 2],
      mass: 10
    };
    this.timer = {
      previousTime: 0,
      fps: 60
    };
  }

  _createClass(FlyingHeart, [{
    key: "startAnimation",
    value: function startAnimation() {
      var animate = this.animate.bind(this);
      window.requestAnimationFrame(animate);
    }
  }, {
    key: "animate",
    value: function animate(time) {
      var animate = this.animate.bind(this);
      window.requestAnimationFrame(animate);
      var dt = time - this.timer.previousTime; // animation

      if (dt > 1000 / this.timer.fps) {
        this.timer.previousTime = time;

        if (this.heartPhysics.position[0] > window.innerWidth - 10 && this.heartPhysics.position[0] < window.innerWidth + 10 && this.heartPhysics.position[1] > window.innerHeight - 10 && this.heartPhysics.position[1] < window.innerHeight + 10) {
          this.heartPhysics.speed[0] /= 2;
          this.heartPhysics.speed[1] /= 2;
          return;
        }

        this.heartPhysics.position[0] += this.heartPhysics.speed[0] * dt;
        this.heartPhysics.position[1] += this.heartPhysics.speed[1] * dt;
        this.heartPhysics.speed[0] += this.heartPhysics.acceleration[0] * dt;
        this.heartPhysics.speed[1] += this.heartPhysics.acceleration[1] * dt;
        this.heartPhysics.acceleration[0] = this.gravitize(0);
        this.heartPhysics.acceleration[1] = this.gravitize(1);
        this.heart.style.left = this.heartPhysics.position[0] + "px";
        this.heart.style.top = this.heartPhysics.position[1] + "px";
      }
    }
  }, {
    key: "gravitize",
    value: function gravitize() {
      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var G = 0.005;
      var rd = this.heartPhysics.position[dir] - this.gravityBall.position[dir];
      var rx = this.heartPhysics.position[0] - this.gravityBall.position[0];
      var ry = this.heartPhysics.position[1] - this.gravityBall.position[1];
      var r = rx * rx + ry * ry;
      var f = -G * (1 / r);
      return rd * f;
    }
  }]);

  return FlyingHeart;
}();

var createHeart = function createHeart() {
  var heart = new FlyingHeart(".container", ".days");
  heart.startAnimation();
};

exports.createHeart = createHeart;