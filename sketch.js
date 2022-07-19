var background1;
var main,mainimg;
var bullet,bulletimg;
var delay=50;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16;
var eimg;
var score=0;
function preload(){
    background1 = loadImage("background.png");
    eimg = loadImage("main1.jpg");
    bulletimg = loadImage("bullet.png");
    mainimg = loadImage("main.jpg");
}
function setup(){
    createCanvas(600,400);
    bullet = createSprite(700,350,50,50);
    main = createSprite(300,350,50,75);
    main.addImage("I",mainimg);
    e1 = createSprite(100,50,50,50);
    e2 = createSprite(100,110,50,50);
    e3 = createSprite(100,170,50,50);
    e4 = createSprite(100,230,50,50);
    e5 = createSprite(250,50,50,50);
    e6 = createSprite(250,110,50,50);
    e7 = createSprite(250,170,50,50);
    e8 = createSprite(250,230,50,50);
    e9 = createSprite(350,50,50,50);
    e10 = createSprite(350,110,50,50);
    e11 = createSprite(350,170,50,50);
    e12 = createSprite(350,230,50,50);
    e13 = createSprite(500,50,50,50);
    e14 = createSprite(500,110,50,50);
    e15 = createSprite(500,170,50,50);
    e16 = createSprite(500,230,50,50);
    enemy = createGroup();
    enemy.add(e1);
    enemy.add(e2);
    enemy.add(e3);
    enemy.add(e4);
    enemy.add(e5);
    enemy.add(e6);
    enemy.add(e7);
    enemy.add(e8);
    enemy.add(e9);
    enemy.add(e10);
    enemy.add(e11);
    enemy.add(e12);
    enemy.add(e13);
    enemy.add(e14);
    enemy.add(e15);
    enemy.add(e16);
    e1.addImage("I",eimg);
    e2.addImage("I",eimg);
    e3.addImage("I",eimg);
    e4.addImage("I",eimg);
    e5.addImage("I",eimg);
    e6.addImage("I",eimg);
    e7.addImage("I",eimg);
    e8.addImage("I",eimg);
    e9.addImage("I",eimg);
    e10.addImage("I",eimg);
    e11.addImage("I",eimg);
    e12.addImage("I",eimg);
    e13.addImage("I",eimg);
    e14.addImage("I",eimg);
    e15.addImage("I",eimg);
    e16.addImage("I",eimg);
}
function draw(){    
    background(background1);
    main.velocityX=0;
    if(keyDown("A")&&main.x>0){
        main.velocityX = -3;
    }
    else if(keyDown("D")&&main.x<600){
        main.velocityX = 3;
    }
    if(keyDown("Space")&&delay >= 50){
        bullet = createSprite(main.x,350,50,50);
        bullet.addImage("I",bulletimg);
        bullet.velocityY = -10;
        delay = 0;
    }
    if(e1.collide(bullet)){
        bullet.destroy();
        e1.destroy();
        score+=1;
    }
    if(e2.collide(bullet)){
        bullet.destroy();
        e2.destroy();
        score+=1;
    }
    if(e3.collide(bullet)){
        bullet.destroy();
        e3.destroy();
        score+=1;
    }
    if(e4.collide(bullet)){
        bullet.destroy();
        e4.destroy();
        score+=1;
    }
    if(e5.collide(bullet)){
        bullet.destroy();
        e5.destroy();
        score+=1;
    }
    if(e6.collide(bullet)){
        bullet.destroy();
        e6.destroy();
        score+=1;
    }
    if(e7.collide(bullet)){
        bullet.destroy();
        e7.destroy();
        score+=1;
    }
    if(e8.collide(bullet)){
        bullet.destroy();
        e8.destroy();
        score+=1;
    }
    if(e9.collide(bullet)){
        bullet.destroy();
        e9.destroy();
        score+=1;
    }
    if(e10.collide(bullet)){
        bullet.destroy();
        e10.destroy();
        score+=1;
    }
    if(e11.collide(bullet)){
        bullet.destroy();
        e11.destroy();
        score+=1;
    }
    if(e12.collide(bullet)){
        bullet.destroy();
        e12.destroy();
        score+=1;
    }
    if(e13.collide(bullet)){
        bullet.destroy();
        e13.destroy();
        score+=1;
    }
    if(e14.collide(bullet)){
        bullet.destroy();
        e14.destroy();
        score+=1;
    }
    if(e15.collide(bullet)){
        bullet.destroy();
        e15.destroy();
        score+=1;
    }
    if(e16.collide(bullet)){
        bullet.destroy();
        e16.destroy();
        score+=1;
    }
    if(score == 16){
        alert("WIN");
    }
    delay += 1;
    drawSprites();
}