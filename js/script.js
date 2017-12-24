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
    canvasPlay7();
    formPlay();
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
        if ((rectX+60 > 200) || (rectX <= 0)) {
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
        if ((rectX+60 > 200) || (rectX <= 0)) {
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
        if ((rectX+60 > 200) || (rectX <= 0)) {
            speed = -speed;
        }
        requestAnimationFrame(animate);
    }
}

function canvasPlay7() {
    var canvas = document.querySelector("#myCanvas7");
    var ctx = canvas.getContext('2d');
    cellWidth = canvas.width / 3;
    cellHeight = canvas.height / 4;
    ctx.font = ('26px Calibri');
    ctx.textBaseline = 'middle';
    drawGrid();
    var mouseEvent = document.querySelector("#mouseEvent");
    var mousePos = document.querySelector("#mousePos");
    canvas.addEventListener('mouseenter', function(event) {
        canvas.focus(); });
    canvas.addEventListener('mouseout', function(event) {
        canvas.blur(); });
    canvas.addEventListener('mouseover', function (event) {
        mouseEvent.innerHTML = 'mouseover'; });
    canvas.addEventListener('mousedown', function (event) {
        mouseEvent.innerHTML = 'mousedown Button#: ' + event.button;
        event.preventDefault(); });
    canvas.addEventListener('mouseup', function (event) {
        mouseEvent.innerHTML = 'mouseup'; });
    canvas.addEventListener('mousemove', function (event) {
        showMousePos(); });
    canvas.addEventListener('keydown', handleKeydown, false);
    canvas.addEventListener('keyup', handleKeyup, false);
    function showMousePos() {
        var canvasLoc = canvas.getBoundingClientRect();
        mousePos.innerHTML = "x: " + (event.clientX - canvasLoc.left).toString()
        + ", y: " + (event.clientY - canvasLoc.top).toString();
    }
    function drawGrid() {
        for (var i=1; i<=2; i++) {
            ctx.moveTo(cellWidth*i,0);
            ctx.lineTo(cellWidth*i,canvas.height);
        }
        for (var i=1; i<=3; i++) {
            ctx.moveTo(0,cellHeight*i);
            ctx.lineTo(canvas.width,cellHeight*i);
        }
        ctx.stroke();
        ctx.fillText('keydown',cellWidth+10,cellHeight/2);
        ctx.fillText('keyup',cellWidth*2+10,cellHeight/2);
        ctx.fillText('event.keyCode',10,cellHeight*1.5);
        ctx.fillText('event.key',10,cellHeight*2.5);
        ctx.fillText('event.code',10,cellHeight*3.5);
    }
    function handleKeydown(event) {
        ctx.clearRect(cellWidth+1,cellHeight+1,cellWidth-2,cellHeight-2);
        ctx.strokeText(event.keyCode, cellWidth+10, cellHeight*1.5);
        ctx.clearRect(cellWidth+1,cellHeight*2+1,cellWidth-2,cellHeight-2);
        ctx.strokeText(event.key, cellWidth+10, cellHeight*2.5);
        ctx.clearRect(cellWidth+1,cellHeight*3+1,cellWidth-2,cellHeight-2);
        ctx.strokeText(event.code, cellWidth+10, cellHeight*3.5);
        event.preventDefault();
    }
    function handleKeyup(event) {
        ctx.clearRect(cellWidth*2+1,cellHeight+1,cellWidth-2,cellHeight-2);
        ctx.strokeText(event.keyCode, cellWidth*2+10, cellHeight*1.5);
        ctx.clearRect(cellWidth*2+1,cellHeight*2+1,cellWidth-2,cellHeight-2);
        ctx.strokeText(event.key, cellWidth*2+10, cellHeight*2.5);
        ctx.clearRect(cellWidth*2+1,cellHeight*3+1,cellWidth-2,cellHeight-2);
        ctx.strokeText(event.code, cellWidth*2+10, cellHeight*3.5);
        event.preventDefault();
    }
}
function formPlay() {
    var numrange = document.querySelector("#numrange");
    var numrangevalue = document.querySelector("#numrangevalue");
    numrange.addEventListener("input", function() {
        numrangevalue.value = numrange.value;
    });
    var password1 = document.querySelector("#password1");
    var password2 = document.querySelector("#password2");
    password2.addEventListener("input", function() {
        if (password1.value != password2.value) {
            password2.setCustomValidity("Passwords do not match!");
        } else {
            password2.setCustomValidity("");
        }
    });
}