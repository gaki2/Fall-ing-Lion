import { PI2, expression, distance } from "./utils.js";

export default class Lion {
  constructor() {
    this.gravity = 5;
    this.accel = 0.1;
    this.resistance = 3;
    this.accel2 = 0.23;
    this.parachuteWidth = 230;
    this.parachuteHeight = 30;
    this.expression = expression();
    this.rotate = 0;
  }

  start(x, y, scale) {
    this.translate = {
      x: x,
      y: y,
    };
    this.center = {
      x: 0,
      y: 0,
    };
    this.scale = scale;
  }

  drawParachute(ctx) {
    // 낙하산 줄
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.center.x, this.center.y);
    ctx.lineTo(this.center.x, this.center.y - 110);
    ctx.stroke();
    ctx.closePath();

    // 낙하산
    ctx.fillStyle = "#80D0C7";
    ctx.beginPath();
    ctx.moveTo(this.center.x - this.parachuteWidth / 2, this.center.y - 100);
    ctx.quadraticCurveTo(
      this.center.x,
      this.center.y - 130 - this.resistance,
      this.center.x + this.parachuteWidth / 2,
      this.center.y - 100
    );
    ctx.moveTo(
      this.center.x - this.parachuteWidth / 2 + 35,
      this.center.y - 100
    );

    ctx.ellipse(
      this.center.x - this.parachuteWidth / 2 + 17.5,
      this.center.y - 100,
      17.5,
      10,
      0,
      0,
      Math.PI,
      false
    );
    ctx.moveTo(
      this.center.x + (this.parachuteWidth / 2 - 35),
      this.center.y - 100
    );
    // ctx.quadraticCurveTo(
    //   this.center.x,
    //   this.center.y - 120,
    //   this.center.x + this.parachuteWidth / 2 - 35,
    //   this.center.y - 100
    // )
    ctx.ellipse(
      this.center.x,
      this.center.y - 100,
      this.parachuteWidth / 2 - 35,
      10,
      0,
      0,
      Math.PI,
      true
    );
    ctx.moveTo(this.center.x + this.parachuteWidth / 2, this.center.y - 100);
    ctx.ellipse(
      this.center.x + this.parachuteWidth / 2 - 17.5,
      this.center.y - 100,
      17.5,
      10,
      0,
      0,
      Math.PI,
      false
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  drawArms(ctx) {
    ctx.fillStyle = "rgba(197,149,50,1)";
    // 오른팔
    ctx.beginPath();
    ctx.ellipse(
      this.center.x - 18,
      this.center.y + 55,
      40,
      12,
      (140 * Math.PI) / 180,
      0,
      PI2,
      true
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // 왼팔
    ctx.beginPath();
    ctx.ellipse(
      this.center.x + 18,
      this.center.y + 55,
      40,
      12,
      (40 * Math.PI) / 180,
      0,
      PI2,
      true
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  drawLegs(ctx) {
    // 왼쪽 다리
    ctx.beginPath();
    ctx.ellipse(
      this.center.x - 15,
      this.center.y + 110,
      22,
      12,
      (90 * Math.PI) / 180,
      0,
      PI2,
      true
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // 오른쪽 다리
    ctx.beginPath();
    ctx.ellipse(
      this.center.x + 15,
      this.center.y + 110,
      22,
      12,
      (90 * Math.PI) / 180,
      0,
      PI2,
      true
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  drawBody(ctx) {
    // 몸통
    const body = ctx.roundRect(
      this.center.x - 37.5,
      this.center.y + 40,
      75,
      70,
      30
    );
    body.fill();
    body.stroke();
    // 흰 배
    ctx.fillStyle = "white";
    const white = ctx.roundRect(
      this.center.x - 20,
      this.center.y + 57,
      40,
      40,
      17
    );
    white.fill();
    white.stroke();
  }

  drawHead(ctx) {
    ctx.fillStyle = "rgba(197,149,50,1)";
    // 왼쪽 귀
    ctx.beginPath();
    //  ctx.lineCap = "round";
    ctx.arc(this.center.x - 27, this.center.y - 33, 16, 0, PI2, true);
    //  ctx.fill();
    //  ctx.stroke();
    //  ctx.closePath();
    ctx.moveTo(this.center.x + 43, this.center.y - 33);
    // 오른쪽 귀
    ctx.arc(this.center.x + 27, this.center.y - 33, 16, 0, PI2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // 귀 안
    ctx.fillStyle = "#ad833a";
    ctx.beginPath();
    ctx.arc(this.center.x - 27, this.center.y - 33, 10, 0, PI2, true);
    ctx.moveTo(this.center.x + 37, this.center.y - 33);
    ctx.arc(this.center.x + 27, this.center.y - 33, 10, 0, PI2, true);
    ctx.fill();
    ctx.closePath();

    // 머리통
    ctx.beginPath();
    ctx.fillStyle = "rgba(197,149,50,1)"; // 갈색 피부
    ctx.lineCap = "round";
    ctx.ellipse(this.center.x, this.center.y, 50, 44.5, 0, 0, PI2, true);
    ctx.stroke();
    ctx.fill();
    // 왼쪽 눈썹
    ctx.moveTo(this.center.x - 35, this.center.y - 20);
    ctx.lineTo(this.center.x - 13, this.center.y - 20);
    ctx.moveTo(this.center.x + 35, this.center.y - 20);
    ctx.lineTo(this.center.x + 13, this.center.y - 20);
    ctx.stroke();
    // 눈
    if (this.expression === "normal") {
      ctx.moveTo(this.center.x - 23, this.center.y - 6);
      ctx.arc(this.center.x - 23, this.center.y - 6, 2, 0, PI2, true);
      ctx.moveTo(this.center.x + 23, this.center.y - 6);
      ctx.arc(this.center.x + 23, this.center.y - 6, 2, 0, PI2, true);
    } else if (this.expression === "fun") {
      ctx.moveTo(this.center.x - 26, this.center.y - 6);
      ctx.quadraticCurveTo(
        this.center.x - 23,
        this.center.y - 10,
        this.center.x - 20,
        this.center.y - 6
      );
      ctx.moveTo(this.center.x + 26, this.center.y - 6);
      ctx.quadraticCurveTo(
        this.center.x + 23,
        this.center.y - 10,
        this.center.x + 20,
        this.center.y - 6
      );
    } else if (this.expression === "sleep") {
      ctx.moveTo(this.center.x - 26, this.center.y - 6);
      ctx.quadraticCurveTo(
        this.center.x - 23,
        this.center.y - 2,
        this.center.x - 20,
        this.center.y - 6
      );
      ctx.moveTo(this.center.x + 26, this.center.y - 6);
      ctx.quadraticCurveTo(
        this.center.x + 23,
        this.center.y - 2,
        this.center.x + 20,
        this.center.y - 6
      );
    } else if (this.expression === "wow") {
      ctx.moveTo(this.center.x - 16, this.center.y - 6);
      ctx.lineTo(this.center.x - 30, this.center.y - 9);
      ctx.moveTo(this.center.x - 16, this.center.y - 6);
      ctx.lineTo(this.center.x - 30, this.center.y - 3);
      ctx.moveTo(this.center.x + 16, this.center.y - 6);
      ctx.lineTo(this.center.x + 30, this.center.y - 9);
      ctx.moveTo(this.center.x + 16, this.center.y - 6);
      ctx.lineTo(this.center.x + 30, this.center.y - 3);
    }
    ctx.stroke();
    ctx.closePath();

    //양쪽 코 구멍
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.center.x - 5, this.center.y + 12.4, 8, 0, PI2, true);
    ctx.arc(this.center.x + 5, this.center.y + 12.4, 8, 0, PI2, true);
    ctx.fill();

    // 코 중앙
    ctx.beginPath();
    ctx.moveTo(this.center.x, this.center.y + 6);
    ctx.arc(this.center.x, this.center.y + 6, 3, 0, PI2, true);
    ctx.stroke();
    ctx.closePath();
  }

  draw(ctx, degree) {
    this.translate.y +=
      this.gravity * (1 + Math.abs(Math.sin(this.rotate)) / 4);
    // this.gravity * (1 + this.accel) * (1 + Math.abs(this.rotate) / 80);
    this.resistance += this.accel2 * this.scale;
    this.rotate = degree;
    if (this.rotate < 0) {
      this.translate.x += 1 + this.rotate ** 2 / 30;
    } else if (this.rotate > 0) {
      this.translate.x -= 1 + this.rotate ** 2 / 30;
    }

    // this.rotate += this.rotateAccel;
    // this.rotateAccel *= 0.7;
    ctx.save();
    ctx.scale(this.scale, this.scale);

    ctx.translate(this.translate.x, this.translate.y);
    ctx.rotate((this.rotate * Math.PI) / 180);

    // this.drawParachute(ctx);
    ctx.lineWidth = 3;
    this.drawArms(ctx);
    this.drawLegs(ctx);
    this.drawBody(ctx);
    this.drawHead(ctx);

    // scale 이 클수록 추락 속도 빠름.
    // scale 이 클수록 나중에 렌더링됨. 즉 lions 라는 배열은 scale 크기에 오름차순 정렬.
    // 낙하산 줄

    ctx.restore();
  }
}
