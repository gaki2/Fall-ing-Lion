const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 2000;
canvas.height = 1000;
ctx.fillStyle = "blue";
ctx.save();
ctx.translate(200, 900);
ctx.rotate((10 * Math.PI) / 180);
ctx.fillRect(0, 0, 40, 40);
ctx.restore();

ctx.translate(300, 300);
ctx.fillStyle = "red";
ctx.rotate((0 * Math.PI) / 180);
ctx.fillRect(0, 0, 40, 40);
