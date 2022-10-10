
const el = document.querySelector<HTMLCanvasElement>('#canvas')!;

const app = el.getContext('2d')!;

//正方形填充
// app.fillStyle = '#000';
// app.fillRect(0,0,300,300);

// app.fillStyle = '#f1c40f';
// app.fillRect(el.width /2 -50 , el.height / 2 - 50 ,100,100);


//线
// app.strokeStyle = '#FF00FF';
// app.lineWidth = 30;
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 100, 100)

//⚪
// app.strokeStyle = '#4EEE94';
// app.lineWidth = 30; 
// app.arc(100,100,50,0,2 * Math.PI);
// app.stroke();
// app.fill();

//三角形
// app.beginPath();
// app.moveTo(el.width / 2 , 10);
// app.lineTo(el.height - 10 , 150);
// app.lineTo(10,150);
// app.closePath();
// // app.stroke();
// app.fill();

//渐变
const gradient = app.createLinearGradient(0,0,300,300);
gradient.addColorStop(0,'#000080');
gradient.addColorStop(0.5,'#00BFFF');
gradient.addColorStop(1,'#AFEEEE');

app.strokeStyle = gradient;
app.lineWidth = 20;
app.lineJoin = 'round';
app.strokeRect(50,50,200,200);