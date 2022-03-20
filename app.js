import Lion from "./lion.js";
import { lengthToRadian } from "./utils.js";

export default class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    window.addEventListener("resize", this.resize.bind(this));
    this.lions = [];
    this.totalLions = 75;
    this.nowLions = 0;

    this.rotate = 0;
    this.maxRotate = 30;
    this.minRotate = -30;
    this.prevTargetDegree = 0;
    this.targetDegree = 0;
    this.diff = 0;
    this.returnToZero = 0;
    this.resize();
    // MouseEvent
    this.isMouseDown = false;
    window.requestAnimationFrame(this.animate.bind(this));
    window.addEventListener("mousedown", this.onDown.bind(this));
    window.addEventListener("mousemove", this.onMove.bind(this));
    window.addEventListener("mouseup", this.onUp.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.nowLions = 0;
    this.lions = [];
    for (let i = 0; i < this.totalLions; i++) {
      const lion = this.create();
      this.lions.push(lion);
    }
    this.nowLions = this.totalLions;
  }

  create() {
    const lion = new Lion();
    const scale = 0.3 + Math.random() / 2; // 0.3 ~ 0.8
    const randomX =
      -400 + Math.random() * (this.stageWidth + 800) * (1 / scale); // 0 ~ stageWidth
    const randomY = (-1800 + Math.random() * 1600) * (1 / scale);
    // -this.stageWidth * Math.sin((this.rotate * Math.PI) / 180) * (1 / scale) -
    // 850 +
    // Math.random() * 800;
    lion.start(randomX, randomY, scale);
    return lion;
  }

  animate() {
    // this.toZeroRotate();

    this.lions = this.lions.filter(
      (lion) => lion.translate.y < (this.stageHeight + 100) * (1 / lion.scale)
    );
    this.nowLions = this.lions.length;
    for (let i = this.nowLions; i < this.totalLions; i++) {
      const lion = this.create();
      this.lions.push(lion);
      this.nowLions += 1;
    }
    this.lions.sort(function (a, b) {
      return a.scale - b.scale;
    });

    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    const interval = this.returnToZero > 55 ? 90 : 2;
    this.diff = (this.targetDegree - this.rotate) / interval;
    this.rotate = this.changeDiff(this.rotate, this.diff);

    if (this.rotate != 0 && this.diff < 0.5 && this.diff > -0.5) {
      this.returnToZero += 1;
    }

    if (this.returnToZero > 55) {
      this.targetDegree /= 7.5;
    }

    for (let i = 0; i < this.totalLions; i++) {
      this.lions[i].draw(this.ctx, this.rotate);
    }
  }

  onDown(e) {
    this.fixedX = e.clientX;
    this.fixedY = e.clientY;
    this.isMouseDown = true;
  }
  onMove(e) {
    // calculate rotate Degree
    if (this.isMouseDown) {
      const nowX = e.clientX;
      this.targetDegree = lengthToRadian(
        this.stageWidth,
        this.fixedX,
        nowX,
        this.maxRotate
      );
      this.returnToZero = 0;
    }
  }

  changeDiff(nowRotate, diff) {
    const newRotate = nowRotate + diff;
    let returnRotate;
    if (newRotate > 0 && nowRotate < 0) {
      returnRotate = 0;
    } else if (newRotate < 0 && nowRotate > 0) {
      returnRotate = 0;
    } else {
      returnRotate = newRotate;
    }

    return returnRotate;
  }
  onUp() {
    this.isMouseDown = false;
  }
}

window.onload = () => {
  new App();
};
