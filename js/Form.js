class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.loading = createElement('h2');
    this.reset = createButton('Reset')

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.loading.hide();
    
  }

  display(){
    background(indexBackground);
    this.title.html("Racers : The racing game for all");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(displayWidth-100,20);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("ready to go " + player.name);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.loading.html("please wait searching players...");
      this.loading.position(displayWidth/3 - 70, displayHeight/2 + 100);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
        });
        
  }
}
