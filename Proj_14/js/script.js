const cvs=document.getElementById("canvas");
const ctx = cvs.getContext('2d');
let btn = document.getElementById("btn");
$("#btn").hide();

let imageName = new Image();
/*imageName.src="path/img.png";*/

let box = 10;

let snake = [];
snake[0] = {x: 9*box, y:10*box};
snake[1] = {x: 8*box, y:10*box};

let score = 0;

let d="RIGHT";

document.addEventListener("keydown", direction);
function direction(event){
  if(event.keyCode == 37 && d!="RIGHT"){
    d="LEFT";
  }
  else if(event.keyCode == 38 && d!="DOWN"){
    d="DOWN";
  }else if(event.keyCode == 39 && d!="LEFT"){
    d="RIGHT";
  }else if(event.keyCode == 40 && d!="UP"){
    d="UP";
  }
}



let food={
  x: Math.floor(Math.random()*17 + 1)*box,
  y: Math.floor(Math.random()*15 + 3)*box
};
function drawFood(){
  ctx.fillStyle = "yellow";
  ctx.fillRect(food.x + box, food.y + box, box, box);

  ctx.strokeStyle="white";
  ctx.strokeRect(food.x + box, food.y + box, box, box);
}
function drawSnake(){
  for(let i = 0; i<snake.length; i ++){
    ctx.fillStyle = (i == 0)? "green":"white";
    ctx.fillRect(snake[i].x + box, snake[i].y + box, box, box);

    ctx.strokeStyle="white";
    ctx.strokeRect(snake[i].x + box, snake[i].y + box, box, box);
  }
}

function collision(newHead, snake){
  for(let i = 1; i<snake.length; i++){
    if(newHead.x == snake[i].x && newHead.y == snake[i].y){
      return true;
    }
  }
  return false;
}


function draw(){
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  drawSnake();
  drawFood();

  let snakeX=snake[0].x;
  let snakeY=snake[0].y;

  if(d=="RIGHT"){
    snakeX += box;
  }else if(d=="LEFT"){
    snakeX -= box;
  }else if(d=="UP"){
    snakeY += box;
  }else if(d=="DOWN"){
    snakeY -= box;
  }

  if(snakeX == food.x && snakeY == food.y){
    score ++;
    food ={
      x: Math.floor(Math.random()*17 + 1)*box,
      y: Math.floor(Math.random()*15 + 3)*box
    };
  }else{
    snake.pop();
  }
  let newHead = {
    x:snakeX,
    y:snakeY
  }
  snake.unshift(newHead);

  if(snake[0].x  < 0 || snake[0].y<0 || snake[0].x > 600 -box || snake[0].y> 600 - box
     || collision(newHead, snake)){
      ctx.font = "60px Arial";
      ctx.fillStyle = "Black";
      ctx.blackground="Black";
      ctx.fillText("Try Again?",20,100);
      $("#btn").show();
      clearInterval(draw);

  }

  ctx.fillStyle ="white";
  ctx.font="45px Change One";
  ctx.fillText(score, 2* box, 6*box);

}
let intervalid = setInterval(draw, 100);

btn.onclick=function(){
  location.reload();
};













/* snake eat food */
/*if(snakeX == food.x && snakeY == food.y){
  score ++;
  food ={
    x: unit* Math.floor(Math.random()*17 + 1),
    y: unit* Math.floor(Math.random()*15 + 3)
  }
  // we add a newHead without snake.pop();
}else{

}
let game=setInterval(draw, 100);

/*const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

let imageName = new Image();
imageName.src="path/img.png";
/* ctx.drawImage(imageName, x, y, width, height) 加入图片并设计图片大小位置*/
/*ctx.fillStyle = "red"; 加颜色*/
/*ctx.fillRect (x, y, width, height);*/

/*let box = 32;
ctx.fillStyle="black";
ctx.fillRect(5*box, 6*box, 2*box, 3*box);

let snake=[];
snake[0] = {x: 9*box, y:10*box};
snake[0] = {x: 8*box, y:10*box};
let food={
  x: Math.floor(Math.random()*17 + 1)*box
  y: Math.floor(Math.random()*15 + 3)*box
};
let score = 0;

function draw(){
  ctx.drawImage(ground, 0, 0);
  for(let i = 0; i<snake.length; i++){
    for(let i = 0; i<snake.lenght; i ++){
      ctx.fillStyle = (i == 0)? "green":"white";
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
      ctx.strokeStyle="red";
      ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.fillStyle ="white";
    ctx.font="45px Change One";
    ctx.fillText(score, 2* box, 1.6*box);
  }
  let game=setInterval(draw, 100);
}

document.addEventListener("keydown", direction);
function direction(event){
  if(event.keyCode == 37 && d!="RIGHT"){
    d="LEFT";
  }
  else if(event.keyCode == 38 && d!="DOWN"){
    d="UP";
  }else if(event.keyCode == 39 && d!="LEFT"){
    d="RIGHT";
  }else if(event.keyCode == 40 && d!="UP"){
    d="DOWN";
  }
}

Array = [9, 0, 1, 2, 3]

Array.unshift(9);
Array.pop();

snake.pop();

snakeX=snake[0].x;
snakeY=snake[0].y;

snakeX += box;
snakeX -= box;
snakeY -= box;
snakeY += box;

let newHead = {
  x:snakeX,
  y:snakeY
}

snake.unshift(newHead);*/

/* snake eat food */
/*if(snakeX == food.x && snakeY == food.y){
  score ++;
  food ={
    x: unit* Math.floor(Math.random()*17 + 1),
    y: unit* Math.floor(Math.random()*17 + 1),
  }
  // we add a newHead without snake.pop();
}else{

}*/

/*Game over*/
/*function collision(newHead, snake){
  for(let i = 0; i<snake.length; i++){
    if(newHead.x == snake[i].x && newHead.y == snake[i].y){
      return true;
    }
  }
  return false;
}

snakeX< box || snakeY < 3*box
snakeX > 17*box || snakeY > 17 * box */
