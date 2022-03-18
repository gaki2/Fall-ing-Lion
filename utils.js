export const PI2 = Math.PI * 2;

export function distance(x1, y1, x2, y2) {
  const diffX = x2 - x1;
  const diffY = y2 - y1;
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

export function lengthToRadian(stageWidth, fixedX, nowX, maxRotate) {
  const diff = nowX - fixedX;
  const rotate = -(diff / stageWidth) * maxRotate;
  return rotate;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export function expression() {
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
