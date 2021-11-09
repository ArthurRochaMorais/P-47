class Player{
    constructor(x,y){
        //this.image =addImage();
        this.jogador = createSprite();
        this.def = 0;
        this.atk = 1;
        this.life = 100;
        this.position.x = 0;
        this.position.y = 0;

    }
    showAtk() {
        push();
        image(ImageAtk, width / 2 - 130, 820 - 400, 20, 20);
        fill("white");
        rect(width / 2 , 820 , 185, 20);
        fill("#f50057");
        rect(width / 2 , 820 ,this.atk, 20);
        noStroke();
        pop();
      } 
      showDef() {
        push();
        image(imageAtk, width / 2 - 130, 820, 20, 20);
        fill("white");
        rect(width / 2 - 100, 820, 185, 20);
        fill("#ffc400");
        rect(width / 2 - 100, 820, this.def, 20);
        noStroke();
        pop();
      }
      showLife() {
        push();
        image(lifeImage, height, 20, 20);
        fill("white");
        rect(width / 2 - 100, height , 185, 20);
        fill("#f50057");
        rect(width / 2 - 100, height, this.life, 20);
        noStroke();
        pop();
      }
      display(){
         this.showAtk(); 
         this.showDef();
      }
}