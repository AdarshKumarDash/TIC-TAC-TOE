canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent, last_x, last_y;
var color;
var line_width = "3";

var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("Color").value;
    if (color == "") {
        color = "black";
    }
}

    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e) {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e) {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e) {
        current_x = e.clientX - canvas.offsetLeft;
        current_y = e.clientY - canvas.offsetTop;
        if (mouseEvent == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = line_width;
            ctx.moveTo(last_x, last_y);
            ctx.lineTo(current_x, current_y);
            ctx.stroke();
        }
        last_x = current_x;
        last_y = current_y;
    }

    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e) {
        color = document.getElementById("Color").value;
        if (color == "") {
            color = "black";
        }
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e) {
        current_x = e.touches[0].clientX - canvas.offsetLeft;
        current_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        last_x = current_x;
        last_y = current_y;
    }

    function clearArea() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = line_width;
        ctx.moveTo(220, 0);
        ctx.lineTo(220, 610);
        ctx.moveTo(470, 0);
        ctx.lineTo(470, 610);
        ctx.moveTo(0, 180);
        ctx.lineTo(700, 180);
        ctx.moveTo(0, 370);
        ctx.lineTo(700, 370);
        ctx.stroke();

    function createBoard() {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = line_width;
        ctx.moveTo(220, 0);
        ctx.lineTo(220, 610);
        ctx.moveTo(470, 0);
        ctx.lineTo(470, 610);
        ctx.moveTo(0, 180);
        ctx.lineTo(700, 180);
        ctx.moveTo(0, 370);
        ctx.lineTo(700, 370);
        ctx.stroke();
    }