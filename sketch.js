var bg1;
var story,storyImg;
// titles or subtitles
var title,titleImg;
var heading1,heading1Img;
var heading2,heading2Img;

//buttons
var startbutton,startbuttonImg;
var optionsButton,optionsButtonImg;
var nextbutton,nextbutton1,nextbuttonImg;

//levels
var planet1,planet1Img;
var planet2,planet2Img;

//objects
var comet,cometImg;
var jupiter,jupiterImg;

//signs
var minus,minus1,minusImg;
var isEqualTo,isEqualTo1,isEqualToImg;

var jupiterbroken,jupiterbrokenImg;

// numbers
var one,oneImg;
var two,twoImg;
var three,threeImg;
var four,fourImg;
var five,fiveImg;
var six,sixImg;
var seven,sevenImg;
var eight,eightImg;
var nine,nineImg;

//sounds
var die,dieSound;

//sounds
var intro;
var substraction;
var next;

function preload(){
 bg1 = loadImage("images/background2.png");
 storyImg = loadImage("story.png");
 //buttons
 startbuttonImg = loadImage("images/start button.png");
 optionsButtonImg = loadImage("images/options button.jpg");
 nextbuttonImg = loadImage("images/next button.png");
 nextbutton1Img = loadImage("images/next button.png");

 //titles and subtitles
 heading1Img = loadImage("images/subtraction.png");
 heading2Img = loadImage("images/addition.png");
 titleImg = loadImage("images/title.png");

 //levels
 planet1Img = loadImage("images/planet-4.jpg");
 planet2Img = loadImage("images/planet-2.jpg");

 //objects
 cometImg = loadImage("images/comet1.png");
 jupiterImg = loadImage("images/jupiter.jpg");
 jupiterbrokenImg = loadImage("images/jupiterbroken.jpg");

 //signs
 minusImg = loadImage("images/minus sign.png");
 isEqualToImg = loadImage("images/is equal to.png");

 //numbers
 oneImg = loadImage("NUMBERS/1.png");
 twoImg = loadImage("NUMBERS/2.png");
 threeImg = loadImage("NUMBERS/3.png");
 fourImg = loadImage("NUMBERS/4.png");
 fiveImg = loadImage("NUMBERS/5.png");
 sixImg = loadImage("NUMBERS/6.png");
 sevenImg = loadImage("NUMBERS/7.png");
 eightImg = loadImage("NUMBERS/8.png");
 nineImg = loadImage("NUMBERS/9.png");
 
 //sounds
 intro = loadSound("voice/story.m4a");
 substraction = loadSound("voice/substraction.m4a");
 next = loadSound("voice/Telling to click next button.m4a");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight - 143);

  story = createSprite(displayWidth/2,displayHeight/2-90);
  story.addImage(storyImg);
  story.visible = false;
  
  //buttons

  startbutton = createSprite(displayWidth/2,displayHeight/2+100);
  startbutton.addImage(startbuttonImg);

  optionsButton = createSprite(displayWidth/6-150,displayHeight/6-70);
  optionsButton.addImage(optionsButtonImg);
  optionsButton.scale = 0.6;
  optionsButton.visible =false

  nextbutton = createSprite(displayWidth/2+700,displayHeight/2+230);
  nextbutton.addImage(nextbuttonImg);
  nextbutton.scale=1.7;
  nextbutton.visible=false;

  nextbutton1 = createSprite(displayWidth/2+700,displayHeight/2+230);
  nextbutton1.addImage(nextbutton1Img);
  nextbutton1.scale=1.7;
  nextbutton1.visible=false;

  //titles and subtitles

  title = createSprite(displayWidth/2-10,displayHeight/2-150);
  title.addImage(titleImg);
  title.scale = 0.9;

  heading1 = createSprite(displayWidth/6-20,displayHeight/6-70);
  heading1.addImage(heading1Img);
  heading1.scale = 0.7;
  heading1.visible = false

  heading2 = createSprite(displayWidth/6-20,displayHeight/6-70);
  heading2.addImage(heading2Img);
  heading2.scale = 0.7;
  heading2.visible = false

  //levels

  planet1 = createSprite(displayWidth/2-450,displayHeight/2-100);
  planet1.addImage(planet1Img);
  planet1.visible =false

  planet2 = createSprite(displayWidth/2-250,displayHeight/2-100);
  planet2.addImage(planet2Img);
  planet2.visible =false

  //objects

  comet = createSprite(displayWidth/2,displayHeight/2-100);
  comet.addImage(cometImg);
  comet.visible = false

  jupiter = createSprite(displayWidth/2-425,displayHeight/2-100);
  jupiter.addImage(jupiterImg);
  jupiter.scale = 0.8
  jupiter.visible = false

  jupiterbroken = createSprite(displayWidth/2+400,displayHeight/2-100);
  jupiterbroken.addImage(jupiterbrokenImg);
  jupiterbroken.scale=0.8;
  jupiterbroken.visible=false

  //signs
  minus = createSprite(displayWidth/2-200,displayHeight/2-100);
  minus.addImage(minusImg);
  minus.scale =0.6
  minus.visible = false

  minus1 = createSprite(displayWidth/2-200,displayHeight/2+100);
  minus1.addImage(minusImg);
  minus1.scale =0.6
  minus1.visible = false

  isEqualTo = createSprite(displayWidth/2+200,displayHeight/2-100);
  isEqualTo.addImage(isEqualToImg);
  isEqualTo.scale = 0.5
  isEqualTo.visible = false

  isEqualTo1 = createSprite(displayWidth/2+200,displayHeight/2+100);
  isEqualTo1.addImage(isEqualToImg);
  isEqualTo1.scale = 0.5
  isEqualTo1.visible = false

  // numbers
  one = createSprite(displayWidth/2,displayHeight/2+100);
  one.addImage(oneImg);
  one.scale = 0.8
  one.visible = false

  two = createSprite(displayWidth/2,displayHeight/2+100);
  two.addImage(twoImg);
  two.visible = false

  three = createSprite();
  three.addImage(threeImg);
  three.visible = false

  four = createSprite(displayWidth/2+400,displayHeight/2+100);
  four.addImage(fourImg);
  four.visible = false

  five = createSprite(displayWidth/2-425,displayHeight/2+100);
  five.addImage(fiveImg);
  five.scale = 0.8
  five.visible = false

  six = createSprite(displayWidth/2-425,displayHeight/2);
  six.addImage(sixImg);
  six.visible = false

  seven = createSprite();
  seven.addImage(sevenImg);
  seven.visible = false

  eight = createSprite();
  eight.addImage(eightImg);
  eight.visible = false

  nine = createSprite();
  nine.addImage(nineImg);
  nine.visible = false
}
function draw(){
   background(bg1);
   
   if(mousePressedOver(startbutton)){
     startbutton.visible = false;
     title.visible = false;
     story.visible=true;
     intro.play();
     nextbutton1.visible=true
    }
   if(mousePressedOver(planet1)){
     level1();
     reset();
     six.visible=true;
     two.visible=true;
     heading1.visible = true; 
   }
   if(mousePressedOver(planet2)){
     level2();
   }
   if(mousePressedOver(nextbutton)){
    nextbuttonpress();
   }
   if(mousePressedOver(nextbutton1)){
    nextbutton1press();
  }
  drawSprites();
}
function level1(){
  //which should not be showed
  optionsButton.visible = false;
  story.visible = false;
  planet1.visible = false;
  planet2.visible=false;
  //headings
  heading1.visible = true;
  //buttons
  nextbutton.visible=true;
  nextbutton1.visible=false;
  //objects 
  comet.visible = true;
  jupiter.visible = true;
  jupiterbroken.visible=true;
  //signs
  minus.visible = true;
  minus1.visible = true;
  isEqualTo.visible = true;
  isEqualTo1.visible = true
  //numbers
  five.visible = true;
  one.visible = true;
  four.visible = true;
  //sounds
  substraction.play();
}
function level2(){
  //which should not be showed
  optionsButton.visible = false;
  story.visible = false;
  planet1.visible = false;
  planet2.visible = false;

  //headings
  heading2.visible = true;
  
}
function nextbuttonpress(){
  //which should not be seen
  story.visible = false;
  planet2.visible=false;
  nextbutton.visible=false; 
  nextbutton1.visible = false;
  comet.visible = false;
  jupiter.visible = false;
  jupiterbroken.visible = false;
  minus.visible = false;
  minus1.visible = false;
  isEqualTo.visible = false;
  isEqualTo1.visible = false;
  five.visible = false;
  one.visible = false;
  four.visible = false;
  //sound stop
  substraction.stop();

}
function nextbutton1press(){
  story.visible = false;
  nextbutton1.destroy();
  optionsButton.visible=true;
  planet1.visible=true;
  heading1.visible = false;
  six.visible = false;
  two.visible = false;
  intro.stop();
}
function reset(){
  planet1.destroy();
  optionsButton.destroy();
}