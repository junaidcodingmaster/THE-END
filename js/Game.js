class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    bike1 = createSprite(100,200);
    bike1.addImage(bike1img);
    bike1.scale = 0.2;

    bike2 = createSprite(300,200);
    bike2.addImage(bike2img);
    bike2.scale = 0.2;

    bike3 = createSprite(500,200);
    bike3.addImage(bike3img);
    bike3.scale = 0.2;

    bike4 = createSprite(700,200);
    bike4.addImage(bike4img);
    bike4.scale = 2;

    bikes = [bike1, bike2, bike3, bike4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background(groundimg);
      image(trackjpg,0,-displayHeight * 4, displayWidth,displayHeight * 5);
      //index of the array
      var index = 0;

      //x and y position of the bikes
      var x = 60;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the bikes a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the bikes in y direction
        y = displayHeight - allPlayers[plr].distance;
        bikes[index-1].x = x;
        bikes[index-1].y = y;

        if (index === player.index){
          bikes[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance > 3000){
      gameState = 2;
    }

    drawSprites();
  }
  
}
