$(document).ready(function() {
    //Used to include snippets from html files. Using it for the code blocks.
    w3.includeHTML();
    //Make sure code blocks don't get translated to other languages.
    document.querySelectorAll(".code").forEach(function(e) {e.setAttribute("translate","no")});
    //Let's play with the canvas.
    var canvas=document.querySelector("#myCanvas");
    var ctx=canvas.getContext('2d');
    //Let's draw some shapes.
    ctx.fillStyle='red';
    ctx.fillRect(10, 10, 50, 100);
    ctx.strokeStyle='blue';
    ctx.strokeRect(40, 40, 100, 50);
    ctx.fillStyle='green';
    ctx.fillRect(30, 70, 80, 50);
    ctx.strokeRect(50, 50, 100, 100);
    ctx.clearRect(60, 80, 20, 20);
    //Now for some Transformations.
    ctx.translate(160, 70);
    drawMonster(ctx, 0, 0);
    ctx.translate(300, 0);
    ctx.rotate(Math.PI/4);
    ctx.scale(0.5, 0.5);
    drawMonster(ctx, 0 , 0);
    ctx.fillRect(0, 0, 20, 20);
});

function drawMonster(ctx, x, y) {
    // head
    ctx.fillStyle='lightgreen';
    ctx.fillRect(x,y,200,200);
    // eyes
    ctx.fillStyle='red';
    ctx.fillRect(35,30,20,20);
    ctx.fillRect(140,30,20,20);
    // interior of eye
    ctx.fillStyle='yellow';
    ctx.fillRect(43,37,10,10);
    ctx.fillRect(143,37,10,10);
    // Nose
    ctx.fillStyle='black';
    ctx.fillRect(90,70,20,80);
    // Mouth
    ctx.fillStyle='purple';
    ctx.fillRect(60,165,80,20);
}