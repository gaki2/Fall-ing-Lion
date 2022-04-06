/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lion)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



const BROWN = "rgba(197,149,50,1)";
const GREEN = "#4caf50";
const BLUE = "#03a9f4";
const PINK = "#e91e63";
const ORANGE = "#ff9800";
const GRAY = "#9e9e9e";
const YELLOW = "#fdd835";
class Lion {
  constructor() {
    this.gravity = 5;
    this.accel = 0.1;
    this.resistance = 3;
    this.accel2 = 0.23;
    this.parachuteWidth = 230;
    this.parachuteHeight = 30;
    this.expression = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.expression)();
    this.rotate = 0;
    this.speedReducer = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.isMobile)() ? 50 : 30;
  }

  color() {
    let a = 10;
    const colors = [BROWN, GREEN, GRAY, BLUE, PINK, ORANGE, YELLOW];
    const idx = parseInt(Math.random() * 7);
    return BROWN;
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
    ctx.fillStyle = this.color();
    // 오른팔
    ctx.beginPath();
    ctx.ellipse(
      this.center.x - 18,
      this.center.y + 55,
      40,
      12,
      (140 * Math.PI) / 180,
      0,
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2,
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
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2,
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
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2,
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
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2,
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
    ctx.fillStyle = this.color();
    // 왼쪽 귀
    ctx.beginPath();
    //  ctx.lineCap = "round";
    ctx.arc(this.center.x - 27, this.center.y - 33, 16, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
    //  ctx.fill();
    //  ctx.stroke();
    //  ctx.closePath();
    ctx.moveTo(this.center.x + 43, this.center.y - 33);
    // 오른쪽 귀
    ctx.arc(this.center.x + 27, this.center.y - 33, 16, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // 귀 안
    ctx.fillStyle = this.color();
    ctx.beginPath();
    ctx.arc(this.center.x - 27, this.center.y - 33, 10, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
    ctx.moveTo(this.center.x + 37, this.center.y - 33);
    ctx.arc(this.center.x + 27, this.center.y - 33, 10, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
    ctx.fill();
    ctx.closePath();

    // 머리통
    ctx.beginPath();
    ctx.fillStyle = this.color(); // 갈색 피부
    ctx.lineCap = "round";
    ctx.ellipse(this.center.x, this.center.y, 50, 44.5, 0, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
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
      ctx.arc(this.center.x - 23, this.center.y - 6, 2, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
      ctx.moveTo(this.center.x + 23, this.center.y - 6);
      ctx.arc(this.center.x + 23, this.center.y - 6, 2, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
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
    ctx.arc(this.center.x - 5, this.center.y + 12.4, 8, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
    ctx.arc(this.center.x + 5, this.center.y + 12.4, 8, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
    ctx.fill();

    // 코 중앙
    ctx.beginPath();
    ctx.moveTo(this.center.x, this.center.y + 6);
    ctx.arc(this.center.x, this.center.y + 6, 3, 0, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PI2, true);
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
      this.translate.x += 1 + this.rotate ** 2 / this.speedReducer;
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


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PI2": () => (/* binding */ PI2),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "expression": () => (/* binding */ expression),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "lengthToRadian": () => (/* binding */ lengthToRadian),
/* harmony export */   "normalDistribution": () => (/* binding */ normalDistribution)
/* harmony export */ });
const PI2 = Math.PI * 2;

function distance(x1, y1, x2, y2) {
  const diffX = x2 - x1;
  const diffY = y2 - y1;
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

function lengthToRadian(stageWidth, fixedX, nowX, maxRotate) {
  const diff = nowX - fixedX;
  const rotate = -(diff / stageWidth) * maxRotate;
  return rotate;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function expression() {
  const expressions = [
    "fun",
    "sleep",
    "normal",
    "wow",
    "normal",
    "normal",
    "normal",
    "normal",
  ];
  shuffle(expressions);
  return expressions[0];
}

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// 평균 0, 표준편차 1
function normalDistribution(mean = 0, sd = 1) {
  const percent = Math.random();
  if (0 <= percent && percent < 0.341) {
    // 평균 ~ 평균 + 표준편차 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + temp * sd;
      }
    }
  } else if (0.341 <= percent && percent < 0.682) {
    // 평균 - 표준편차 ~ 평균 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - temp * sd;
      }
    }
  } else if (0.682 <= percent && percent < 0.818) {
    // 평균 + 표준편차 ~ 평균 + 2 표준편차 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + sd + temp * sd;
      }
    }
  } else if (0.818 <= percent && percent < 0.954) {
    // 평균 - 2 표준편차 ~ 평균 - 표준편차 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - sd - temp * sd;
      }
    }
  } else if (0.954 <= percent && percent < 0.975) {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + 2 * sd + temp * sd;
      }
    }
  } else if (0.975 <= percent && percent < 0.996) {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - 2 * sd - temp * sd;
      }
    }
  } else if (0.996 <= percent && percent < 0.998) {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + 3 * sd + temp * sd;
      }
    }
  } else {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - 3 * sd - temp * sd;
      }
    }
  }
}


/***/ }),
/* 3 */
/***/ (() => {

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
};


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class Footer {
  constructor(makeFull) {
    this.makeFull = makeFull;
    this.wrapper();
    this.name();
    if (!(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
      this.fullscreen();
    }
  }

  wrapper() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "footer_wrapper";
  }

  fullscreen() {
    this.$footer_fullscreen = document.createElement("div");
    this.$footer_fullscreen.className = "fullscreen";
    this.$footer_fullscreen.innerText = "fullscreen";
    this.$footer_fullscreen.addEventListener("click", this.makeFull);
  }

  name() {
    this.$footer_name = document.createElement("div");
    this.$footer_name.className = "footer_name";
    this.$footer_name.innerText = "24:26 projects";
  }

  render() {
    this.$wrapper.appendChild(this.$footer_name);
    this.$wrapper.appendChild(this.$footer_fullscreen);
    document.body.appendChild(this.$wrapper);
  }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
class Header {
  constructor() {
    this.header();
  }

  header() {
    this.$header = document.createElement("div");
    this.$header.className = "header";
    this.$header.innerText = "24:26";
  }

  render() {
    document.body.appendChild(this.$header);
  }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _lion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_canvasUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_canvasUtils_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_canvasUtils_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);








class App {
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
    window.addEventListener(
      `${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.isMobile)() ? "touchstart" : "mousedown"}`,
      this.onDown.bind(this)
    );
    window.addEventListener(
      `${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.isMobile)() ? "touchmove" : "mousemove"}`,
      this.onMove.bind(this)
    );
    window.addEventListener(
      `${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.isMobile)() ? "touchend" : "mouseup"}`,
      this.onUp.bind(this)
    );
    if ((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {
      window.addEventListener("touchcancel", this.onUp.bind(this));
    }
    this.header = new _header_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.header.render();
    this.footer = new _footer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.onFull.bind(this));
    this.footer.render();
  }

  onFull() {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
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
    const lion = new _lion_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const scale = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalDistribution)(0.55, 0.1); // 0.3 ~ 0.8 ( 평균 0.7, 표준편차: 0.05)
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
    e.preventDefault();
    const event = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.isMobile)() ? e.touches[0] : e;
    this.fixedX = event.clientX;
    this.fixedY = event.clientY;
    this.isMouseDown = true;
  }
  onMove(e) {
    e.preventDefault();
    const event = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.isMobile)() ? e.touches[0] : e;
    // calculate rotate Degree
    if (this.isMouseDown) {
      const nowX = event.clientX;
      this.targetDegree = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.lengthToRadian)(
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

})();

/******/ })()
;