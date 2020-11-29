var player
var paper, plasticCup
var gameState= "start"
var playerImg, paperImg, plasticCupImg
var bgImg
var foodWasteImg
var recyclingBinImg
var recyclingBin
var resuablebag, reusableBagImg
var points=300
var germGroup
var boosterGroup
function preload() {
playerImg= loadAnimation("images/alien1.png", "images/alien2.png")

paperImg=loadImage("images/paper.png")

bgImg=loadImage("images/bgImg.png")

plasticCupImg=loadImage("images/plasticcup.png")

foodWasteImg= loadImage("images/foodwaste.png")

recyclingBinImg= loadImage("images/recyclingbin.png")

reusableBagImg= loadImage("images/reusablebag.png")

option1Img= loadImage("images/option1.png")

plusTenImg=loadImage("images/plusTen.png")
minusTenImg=loadImage("images/minusTen.png")

option2Img=loadImage("images/option2.png")

option3Img=loadImage("images/option3.png")

option4Img=loadImage("images/option4.png")

option5Img=loadImage("images/option5.png")

germ1=loadImage("images/germ1.png")

germ2=loadImage("images/germ2.png")
germ3=loadImage("images/germ3.png")
germ4=loadImage("images/germ4.png")
germ5=loadImage("images/germ5.png")
germ6=loadImage("images/germ6.png")

booster1=loadImage("images/booster1.png")
booster2=loadImage("images/booster2.png")

buzzerSound=loadSound("buzzer.mp3")

chaChingSound=loadSound("chaching.mp3")

bombSound=loadSound("bomb.mp3")


scoreSound=loadSound("score.mp3")

startFormImg=loadImage("images/startForm.png")

goodGameOverImg=loadImage("images/goodGameOver.png")
badGameOverImg=loadImage("images/badGameOver.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
   player= createSprite(displayWidth/2-250, displayHeight- 50, 50, 50)
   player.addAnimation("running",playerImg)
   player.scale=0.8

 paper= createSprite( displayWidth/2-650, displayHeight- 290, 30, 30)
 paper.addImage(paperImg)
 paper.scale= 0.2

 plasticCup=createSprite( displayWidth/2 +50, displayHeight- 300, 40, 40)
plasticCup.addImage(plasticCupImg)
plasticCup.scale=0.07

food= createSprite(displayWidth/ 2- 250, displayHeight- 300, 30, 30)
food.addImage(foodWasteImg)
food.scale=0.15

recyclingBin= createSprite(displayWidth/2 + 520, displayHeight- 630, 30, 30)
recyclingBin.addImage(recyclingBinImg)
recyclingBin.scale=0.06
 
reusableBag= createSprite(displayWidth/2 - 300, displayHeight- 630, 30, 30)
reusableBag.addImage(reusableBagImg)
reusableBag.scale=0.15

wall1= createSprite(displayWidth/2 - 170, displayHeight-45, 30, 90)
wall1.visible=false
wall2= createSprite(displayWidth/2 - 350, displayHeight-123, 25, 245)
wall2.visible=false
wall3= createSprite(displayWidth/2 - 172, displayHeight-255, 25, 169)
wall3.visible=false
wall4= createSprite(displayWidth/2 , displayHeight-298, 25, 257)
wall4.visible=false
wall5= createSprite(displayWidth/2+180 , displayHeight-252, 25, 350)
wall5.visible=false
wall6= createSprite(displayWidth/2-172 , displayHeight-624, 25, 236)
wall6.visible=false
wall7= createSprite(displayWidth/2-350, displayHeight-624, 25, 236)
wall7.visible=false
wall8= createSprite(displayWidth/2+387, displayHeight-624, 25, 236)
wall8.visible=false
wall9= createSprite(displayWidth/2+567, displayHeight-624, 25, 236)
wall9.visible=false

wall10= createSprite(displayWidth/2-541, displayHeight/2+132, 357, 13)
wall10.visible=false
wall11= createSprite(displayWidth/2-452, displayHeight/2+40, 535, 13)
wall11.visible=false
wall12= createSprite(displayWidth/2+6, displayHeight/2+287, 323, 13)
wall12.visible=false
wall13= createSprite(displayWidth/2-86, displayHeight/2+195, 148, 13)
wall13.visible=false
wall14= createSprite(displayWidth/2-366, displayHeight/2-50,707,13)
wall14.visible=false
wall15= createSprite(displayWidth/2-541, displayHeight/2-142,357,13)
wall15.visible=false
wall16= createSprite(displayWidth/2+107, displayHeight/2-142,535,13)
wall16.visible=false
wall17= createSprite(displayWidth/2+456, displayHeight/2-50,527,13)
wall17.visible=false


option1=createSprite(displayWidth/2, displayHeight/2, 700, 600)
option1.addImage(option1Img)
option1.scale= 0.5
option1.visible=false

paperoption= createSprite(displayWidth/2-180, displayHeight/2-110, 150, 100)
paperoption.visible=false

plasticoption= createSprite(displayWidth/2+160, displayHeight/2+110, 150, 100)
plasticoption.visible=false

plusTen= createSprite(displayWidth-100, displayHeight-700, 30, 30)
plusTen.addImage(plusTenImg)
plusTen.scale=0.3
plusTen.visible=false

minusTen= createSprite(displayWidth-100, displayHeight-700, 30, 30)
minusTen.addImage(minusTenImg)
minusTen.scale=0.3
minusTen.visible=false

option2=createSprite(displayWidth/2, displayHeight/2, 700, 600)
option2.addImage(option2Img)
option2.scale= 0.5
option2.visible=false

wetWasteOption=createSprite(displayWidth/2- 230,displayHeight/2-150, 100, 170)
wetWasteOption.visible=false

dryWasteOption=createSprite(displayWidth/2+ 230, displayHeight/2+150, 100, 180)
dryWasteOption.visible=false

option3=createSprite(displayWidth/2, displayHeight/2, 700, 600)
option3.addImage(option3Img)
option3.scale= 0.5
option3.visible=false

reusableBagOption=createSprite(displayWidth/2- 230, displayHeight/2-120, 150, 130)
reusableBagOption.visible=false

plasticBagOption=createSprite(displayWidth/2+ 230, displayHeight/2+150, 150, 160)
plasticBagOption.visible=false

option4=createSprite(displayWidth/2, displayHeight/2, 700, 600)
option4.addImage(option4Img)
option4.scale= 0.5
option4.visible=false

plasticCupOption=createSprite(displayWidth/2- 250, displayHeight/2-120, 130, 160)
plasticCupOption.visible=false

bottleOption=createSprite(displayWidth/2+ 230, displayHeight/2+120, 130, 190)
bottleOption.visible=false

option5=createSprite(displayWidth/2, displayHeight/2, 700, 600)
option5.addImage(option5Img)
option5.scale= 0.5
option5.visible=false

dustbinOption=createSprite(displayWidth/2- 220, displayHeight/2-140, 100, 170)
dustbinOption.visible=false

recyclingOption=createSprite(displayWidth/2+ 220, displayHeight/2+140, 110, 200)
recyclingOption.visible=false

startForm=createSprite(displayWidth/2, displayHeight/2, 20, 20)
startForm.addImage(startFormImg)
startForm.scale=0.6

goodGameOver=createSprite(displayWidth/2, displayHeight/2, 20, 20)
goodGameOver.addImage(goodGameOverImg)
goodGameOver.scale=0.6
goodGameOver.visible=false

badGameOver=createSprite(displayWidth/2, displayHeight/2, 20, 20)
badGameOver.addImage(badGameOverImg)
badGameOver.scale=0.6
badGameOver.visible=false

germGroup= new Group()

boosterGroup= new Group()

germ1Group= new Group()

germ2Group=new Group()
germ3Group=new Group()
germ4Group=new Group()
germ5Group=new Group()
germ6Group=new Group()
}

function draw(){
   background(bgImg);
   
   // germs()
   booster()
   spawngerm1()
   spawngerm2()
   spawngerm3()
   spawngerm4()
   spawngerm5()
   spawngerm6()
    textSize(30)
    fill("black")
text("Points : " + points,displayWidth/2- 700, displayHeight/2- 250)

player.collide(wall1)
player.collide(wall2)
player.collide(wall3)
player.collide(wall4)
player.collide(wall5)
player.collide(wall6)
player.collide(wall7)
player.collide(wall8)
player.collide(wall9)
player.collide(wall10)
player.collide(wall11)
player.collide(wall12)
player.collide(wall13)
player.collide(wall14)
player.collide(wall15)
player.collide(wall16)
player.collide(wall17)


if(gameState=="start")
{


}
if (gameState==="start"&& keyDown("SPACE")){
    gameState="play"
   startForm.visible=false

}

    if(gameState==="play"){
        playerMoving()
        
    }
            if(player.isTouching(paper)){
                option1.visible=true
                paperOption()
               
            }
           
            if(player.isTouching(food)){
                    option2.visible=true
                    foodWasteOption()
                   
            }    

            if(player.isTouching(plasticCup)){
                option4.visible=true
                plasticOption()
                
        }    


        if(player.isTouching(reusableBag)){
            option3.visible=true
            reusableOption()
            
    }    

    if(player.isTouching(recyclingBin)){
        option5.visible=true
        recycleOption()

}    


            if(gameState=="paper"){
                option1.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }      
            
            if(gameState=="food"){
                option2.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

            if(gameState=="plastic"){
                option4.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

            if(gameState=="reusable"){
                option3.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

            if(gameState=="recycling"){
                option5.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

if(player.isTouching(germ1Group)){
  points=points-50
  germ1Group.destroyEach()
}

if(player.isTouching(germ2Group)){
    points=points-50
    germ2Group.destroyEach()
    bombSound.play()
  }
  if(player.isTouching(germ3Group)){
    points=points-50
    germ3Group.destroyEach()
    bombSound.play()
  }
  if(player.isTouching(germ4Group)){
    points=points-50
    germ4Group.destroyEach()
    bombSound.play()
  }
  if(player.isTouching(germ5Group)){
    points=points-50
    germ5Group.destroyEach()
    bombSound.play()
  }
  if(player.isTouching(germ6Group)){
    points=points-50
    germ6Group.destroyEach()
    bombSound.play()
  }



  if(player.isTouching(boosterGroup)){
    points=points+100
    boosterGroup.destroyEach()
    chaChingSound.play()
  }

if(points>500){
    goodGameOver.visible=true
    germ1Group.setVelocityEach(0,0)
    germ2Group.setVelocityEach(0,0)
    germ3Group.setVelocityEach(0,0)
    germ4Group.setVelocityEach(0,0)
    germ5Group.setVelocityEach(0,0)
    germ6Group.setVelocityEach(0,0)

    germ1Group.destroyEach()
    germ2Group.destroyEach()
    germ3Group.destroyEach()
    germ4Group.destroyEach()
    germ5Group.destroyEach()
    germ6Group.destroyEach()

    boosterGroup.destroyEach()
    boosterGroup.setVelocityEach(0,0)

    player.destroy()

}

if(points<50){
    badGameOver.visible=true
    germ1Group.setVelocityEach(0,0)
    germ2Group.setVelocityEach(0,0)
    germ3Group.setVelocityEach(0,0)
    germ4Group.setVelocityEach(0,0)
    germ5Group.setVelocityEach(0,0)
    germ6Group.setVelocityEach(0,0)

    germ1Group.destroyEach()
    germ2Group.destroyEach()
    germ3Group.destroyEach()
    germ4Group.destroyEach()
    germ5Group.destroyEach()
    germ6Group.destroyEach()

    boosterGroup.destroyEach()
    boosterGroup.setVelocityEach(0,0)

    player.destroy()  
}


 drawSprites()
}


function playerMoving(){
    if( keyDown(UP_ARROW)){
        player.y=player.y- 10
    }

    if( keyDown(DOWN_ARROW)){
        player.y=player.y+ 10
    }

    if( keyDown(RIGHT_ARROW)){
        player.x=player.x+10
    }

    if( keyDown(LEFT_ARROW)){
        player.x=player.x- 10
    }

}

function paperOption(){
    if(mousePressedOver(paperoption)){
        plusTen.visible=true
        points=points+10
        gameState="paper"
        scoreSound.play()
    }

        else if(mousePressedOver(plasticoption)){
            minusTen.visible=true 
            points=points-10 
        gameState="paper"

buzzerSound.play()
        }
}
 function foodWasteOption(){
    if(mousePressedOver(wetWasteOption)){
        plusTen.visible=true
        points=points+10
        gameState="food"
        scoreSound.play()
    }
    else if(mousePressedOver(dryWasteOption)){
        minusTen.visible=true  
        points=points-10
        gameState="food"
        buzzerSound.play()
       
    
    }
 }

 function plasticOption(){
    if(mousePressedOver(plasticCupOption)){
        plusTen.visible=true
        points=points-10
        gameState="plastic"
        buzzerSound.play()
    }
    else if(mousePressedOver(bottleOption)){
        minusTen.visible=true  
        points=points+10
        gameState="plastic"
        scoreSound.play()
       
    
    } 
 }

 function reusableOption(){
    if(mousePressedOver(reusableBagOption)){
        plusTen.visible=true
        points=points+10
    gameState="reusable"
    scoreSound.play()

    }
    else if(mousePressedOver(plasticBagOption)){
        minusTen.visible=true  
        points=points-10
        gameState="reusable"
        buzzerSound.play()
    
    }
 }

 function recycleOption(){
    if(mousePressedOver(recyclingOption)){
        plusTen.visible=true
        points=points+10
    gameState="recycling"
    scoreSound.play()
    }
    else if(mousePressedOver(dustbinOption)){
        minusTen.visible=true  
        points=points-10
        gameState="recycling"
        buzzerSound.play()
    }
 }


 /*function germs(){
     if(frameCount%60==0){
         germ=createSprite(windowWidth, -windowHeight/4, 20, 20)
         germ.x=random(windowWidth/8,windowWidth)
         germ.scale=0.1
         germ.velocityY=3
         var r= Math.round(random(1,6))
         germGroup.add(germ)

        switch(r){
            case 1: germ.addImage(germ1)

            break

            case 2: germ.addImage(germ2)
            
            break

            case 3: germ.addImage(germ3)

            break

            case 4: germ.addImage(germ4)

            break

            case 5: germ.addImage(germ5)

            break

            case 6: germ.addImage(germ6)
        }

     }
 }*/

 function booster(){
    if(frameCount%340==0){
        boosters=createSprite(displayWidth, -displayHeight*4, 20, 20)
        boosters.x=random(displayWidth/8,displayWidth)
        boosters.scale=0.1
        boosters.velocityY=3
        var r= Math.round(random(1,2))
        boosterGroup.add(boosters)

       switch(r){
           case 1: boosters.addImage(booster1)

           break

           case 2: boosters.addImage(booster2)
       }
    }
}

function spawngerm1(){
if(frameCount%130==0){
    spawnGerm1=createSprite(displayWidth, -displayHeight*3, 20, 20)
    spawnGerm1.x=random(displayWidth/8,displayWidth)
    spawnGerm1.scale=0.1
    spawnGerm1.velocityY=3
    spawnGerm1.addImage(germ1)
    germ1Group.add(spawnGerm1)
}
}


function spawngerm2(){
    if(frameCount%160==0){
        spawnGerm2=createSprite(displayWidth, -displayHeight*3, 20, 20)
        spawnGerm2.x=random(displayWidth/8,displayWidth)
        spawnGerm2.scale=0.1
        spawnGerm2.velocityY=3
        spawnGerm2.addImage(germ2)
        germ2Group.add(spawnGerm2)
    }
    }

    function spawngerm3(){
        if(frameCount%190==0){
            spawnGerm3=createSprite(displayWidth, -displayHeight*3, 20, 20)
            spawnGerm3.x=random(displayWidth/8,displayWidth)
            spawnGerm3.scale=0.1
            spawnGerm3.velocityY=3
            spawnGerm3.addImage(germ3)
            germ3Group.add(spawnGerm3)
        }
        }

        
    function spawngerm4(){
        if(frameCount%220==0){
            spawnGerm4=createSprite(displayWidth, -displayHeight*3, 20, 20)
            spawnGerm4.x=random(displayWidth/8,displayWidth)
            spawnGerm4.scale=0.1
            spawnGerm4.velocityY=3
            spawnGerm4.addImage(germ4)
            germ4Group.add(spawnGerm4)
        }
        }
        
    function spawngerm5(){
        if(frameCount%250==0){
            spawnGerm5=createSprite(displayWidth, -displayHeight*3, 20, 20)
            spawnGerm5.x=random(displayWidth/8,displayWidth)
            spawnGerm5.scale=0.1
            spawnGerm5.velocityY=3
            spawnGerm5.addImage(germ5)
            germ5Group.add(spawnGerm5)
        }
        }

    function spawngerm6(){
        if(frameCount%280==0){
            spawnGerm6=createSprite(displayWidth, -displayHeight*3, 20, 20)
            spawnGerm6.x=random(displayWidth/8,displayWidth)
            spawnGerm6.scale=0.1
            spawnGerm6.velocityY=3
            spawnGerm6.addImage(germ6)
            germ6Group.add(spawnGerm6)
        }
        }
