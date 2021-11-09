class abrirmenu{
    constructor(){
        this.button5 = createButton("Equipamentos");
    }
    setElementPosition(){
        this.button5.position(100,750);
    }
    hide(){
        this.button5.hide();
    }
    display(){
        this.setElementPosition();
    }
}