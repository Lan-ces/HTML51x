$(document).ready(function() {
    //Used to include snippets from html files. Using it for the code blocks.
    w3.includeHTML();
    //Make sure code blocks don't get translated to other languages.
    document.querySelectorAll(".code").forEach(function(e) {e.setAttribute("translate","no")});
    canvasPlay1();
    canvasPlay2();
    canvasPlay3();
    canvasPlay4();
    canvasPlay5();
    canvasPlay6_1();
    canvasPlay6_2();
    canvasPlay6_3();
});

function canvasPlay1() {
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
}

function drawMonster(ctx, x, y) {
    // head
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(x,y,200,200);
    // eyes
    ctx.fillStyle = 'red';
    ctx.fillRect(35,30,20,20);
    ctx.fillRect(140,30,20,20);
    // interior of eye
    ctx.fillStyle = 'yellow';
    ctx.fillRect(43,37,10,10);
    ctx.fillRect(143,37,10,10);
    // Nose
    ctx.fillStyle = 'black';
    ctx.fillRect(90,70,20,80);
    // Mouth
    ctx.fillStyle = 'purple';
    ctx.fillRect(60,165,80,20);
}

function canvasPlay2() {
    var canvas=document.querySelector("#myCanvas2");
    var ctx=canvas.getContext('2d');
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.font = "60pt Calibri";
    ctx.fillText("Hello World!",20,80);
    ctx.strokeText("Hello World!",20,80);
    var textMetrics = ctx.measureText("Hello World!");
    var textWidth = textMetrics.width;
    ctx.moveTo(20,80);
    ctx.lineTo(20+textWidth,80);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.font = "italic bold 100px Calibri";
    ctx.fillText("Hello World!",20,180);
    ctx.strokeText("Hello World!",20,180);
    ctx.fillText("Hello World!",20,280,200);
    ctx.strokeText("Hello World!",20,280,200);
}

function canvasPlay3() {
    var canvas = document.querySelector("#myCanvas3");
    var ctx = canvas.getContext('2d');
    var imageObj = new Image();
    imageObj.onload = function() {
        ctx.drawImage(imageObj,0,0,100,100);
        ctx.drawImage(imageObj,100,100,200,200);
        ctx.drawImage(imageObj,50,0,400,100,300,0,175,50);
    };
    imageObj.src = "../img/HTML5_Logo_512.png";
}

function canvasPlay4() {
    var canvas = document.querySelector("#myCanvas4");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'green';
    ctx.rect(20,20,100,50);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(50,50,50,100);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.rect(70,100,100,50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150,20);
    ctx.lineTo(250,100);
    ctx.lineTo(300,50);
    ctx.closePath();
    ctx.stroke();
}

function canvasPlay5() {
    var canvas = document.querySelector("#myCanvas5");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(0,0,255,0.2)";
    ctx.rect(20,20,150,100);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.rect(70,70,150,100);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,255,0.8)";
    ctx.rect(120,120,150,100);
    ctx.fill();
    rainbow = ctx.createLinearGradient(300,0,600,300);
    rainbow.addColorStop(0,"red");
    rainbow.addColorStop(0.15,"orange");
    rainbow.addColorStop(0.29,"yellow");
    rainbow.addColorStop(0.43,"green");
    rainbow.addColorStop(0.57,"blue");
    rainbow.addColorStop(0.71,"indigo");
    rainbow.addColorStop(0.85,"violet");
    ctx.fillStyle = rainbow;
    ctx.fillRect(300,0,100,40);
    ctx.fillRect(450,20,150,60);
    ctx.fillRect(300,90,300,200);
    ctx.fillRect(0,200,100,100);
}

function canvasPlay6_1() {
    var canvas = document.querySelector("#myCanvas6-1");
    var ctx = canvas.getContext('2d');
    var rectX = 0;
    var speed = 3;
    setInterval(animate,33);
    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect(rectX,10,60,80);
        rectX += speed;
        if((rectX+60 > 200) || (rectX <= 0)){
            speed = -speed;
        }
    }
}

function canvasPlay6_2() {
    var canvas = document.querySelector("#myCanvas6-2");
    var ctx = canvas.getContext('2d');
    var rectX = 0;
    var speed = 3;
    setTimeout(animate,22);
    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect(rectX,10,60,80);
        rectX += speed;
        if((rectX+60 > 200) || (rectX <= 0)){
            speed = -speed;
        }
        setTimeout(animate,22);
    }
}

function canvasPlay6_3() {
    var canvas = document.querySelector("#myCanvas6-3");
    var ctx = canvas.getContext('2d');
    var rectX = 0;
    var speed = 3;
    requestAnimationFrame(animate);
    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect(rectX,10,60,80);
        rectX += speed;
        if((rectX+60 > 200) || (rectX <= 0)){
            speed = -speed;
        }
        requestAnimationFrame(animate);
    }
}