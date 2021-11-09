class chamarBoss{
    constructor(){
        this.fundodoBoss = createElement("div"); 
        this.canvasBoss = createCanvas(1600,600)
    }
    setElementsPosition() {
        this.fundodoBoss.position(360,100);
        this.fundodoBoss.style("width","60%");
        this.fundodoBoss.style("height","80%")
        this.fundodoBoss.style("background-color","saddlebrown");
      }
    hide(){
        this.fundodoBoss.hide(); 
    }
    show(){
        this.fundodoBoss.show();
    }
    display(){
        this.show();
        background("white");
        
    }
}