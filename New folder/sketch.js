var slideshow, slideShow2;
var startImage ,startImageSprite;
var Next;


function preload(){
slideshow = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png",)
startImage = loadImage("images/11.jpg")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
  slideshow.frameDelay = 100;
  slideShow2 = createSprite(windowWidth/2, windowHeight/2, 10,10)
  slideShow2.addAnimation('slideshow', slideshow)
  slideShow2.scale = 0.75
  console.log(frameCount)

 Next = createButton("Next")
 Next.position(100,700)
 Next.scale = 0.75;
}

function draw() {
 
  console.log(frameCount)

  if(frameCount === 850){
    slideShow2.remove()
    image(startImage,0,0,1600,800)
  }
  drawSprites();
}