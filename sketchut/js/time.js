

var canvas = document.getElementById('s3-watch');
var ctx = canvas.getContext('2d');
clock();

function clock() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    ctx.clearRect(0, 0, 300, 300);
    ctx.save();
    ctx.translate(150, 150);
    ctx.strokeStyle = '#000'; // numbers
    var pitch = Math.PI * 2 / 12;
    for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(0, -135);
        ctx.lineTo(0, -140);
        ctx.stroke();
        ctx.rotate(pitch);
    }
    ctx.restore();
    
    var hourHand = (Math.PI * 2) / 12 * hour + (Math.PI * 2) / 12 * (min / 60);
    var minHand = (Math.PI * 2) / 60 * min;
    var secHand = (Math.PI * 2) / 60 * sec;
    
    clockHand(hourHand, 80, 6, '#333'); // for hour stroke
    clockHand(minHand, 120, 4, '#333'); // for minute stroke
    clockHand(secHand, 130, 2, '#e00'); // for second stroke
    
    setTimeout(clock, 1000);
}

function clockHand(rotation, length, width, color) {
    ctx.save();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.translate(150, 150);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.restore();
}