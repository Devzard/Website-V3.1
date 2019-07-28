let canvas=document.getElementById('canvas');
let scoreBoard=document.getElementById('score');
let btn = document.getElementById('button');
let gameStatus=document.getElementById('status');

let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - (window.innerHeight*0.4);

let randX;
let clr;
let y=0;
let circles = [];
let time = 2600;
let margin = canvas.width - 30;
let d;
let score =0;
let duplicateScore=0;
let clickButtonCount=0;
let interval;
let speedOfParticle=2.5;

let color = [
    '#ff8370',
    '#fff480',
    '#99ff80',
    '#80ffdf',
    '#fcfcff',
    '#f59eff',
    '#ff9eb9',
    '#ff6376'
]

//circle object
let Circle = function(x,y,clr){
    this.x = x;
    this.y = y;
    this.radius = 30;
    this.clr = clr;
}

Circle.prototype.drawCircle = function(){
    ctx.fillStyle = color[this.clr];
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    
    //shadow
    ctx.shadowColor=color[this.clr];
    ctx.shadowBlur=10;
    
    ctx.strokeStyle = color[this.clr];
    ctx.stroke();
    ctx.fill();
}

//returns the distance between two points;
function distance(x1,y1,x2,y2){
    let c = Math.pow((x1-x2),2)+Math.pow((y1-y1),2);
    return (Math.sqrt(c)); 
}

//drawing the circles
for(let i=0;i<circles.length;i++){
    circles[i].drawCircle();
}


//Bounding the canvas tag
let canvasBounds = canvas.getBoundingClientRect();

//Event listner
canvas.addEventListener("click",function(e){
    let mouseX = e.pageX - canvasBounds.left;
    let mouseY = e.pageY - canvasBounds.top;

    for(let i=0;i<circles.length;i +=1){
        d=distance(mouseX,mouseY,circles[i].x,circles[i].y);
        if(d<25){
            circles.splice(i,1);
            score += 1;
            scoreBoard.innerHTML="Score : " + score;
            
            duplicateScore = score;//used for increasing speed and spawning
        }
    }
});

//updates the screen
function update(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<circles.length;i++){

        if(circles[i].y >= canvas.height){
            
            circles.splice(0,circles.length);//empties the entire array
            
            gameStatus.innerHTML="Game Over";
            btn.style.display="";
            btn.innerHTML="Restart";
            
            //clear the previous interval
            clearInterval(interval);
        }

        circles[i].y += speedOfParticle;
        circles[i].drawCircle();


        //increases spawing time and speed
        if(duplicateScore%5 == 0){
            duplicateScore += 1;

            time -= 200;

            clearInterval(interval);

            interval = setInterval(function(){
                randX = Math.random() * margin;
                clr = Math.floor(Math.random() * 8);
                circles.push(new Circle(randX,y,clr));
            },time);

            speedOfParticle += 0.5;
        }
        if(time==0){
            clearInterval(interval);//clear the previous interval
            circles.splice(0,circles.length);//empties the entire array

            gameStatus.innerHTML="You Won";
            btn.style.display="";
            btn.innerHTML="Restart";
        }
    }

    requestAnimationFrame(update);
}

function startGame(){

    clickButtonCount += 1;
    
    update();

    //when restarted
    if(clickButtonCount > 1){
        
        score = 0;
        scoreBoard.innerHTML="Score : " + score;

        time = 2400;
        speedOfParticle= 2.5;

    }

    btn.style.display = "none";
    gameStatus.innerHTML="Game started";

    //creates a new circle after a certain amount of time
    interval = setInterval(function(){
        randX = Math.random() * margin;
        clr = Math.floor(Math.random() * 8);
        circles.push(new Circle(randX,y,clr));
    },time);
    
}

