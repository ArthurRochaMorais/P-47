class Menu{
    constructor(){
        this.fundo = createElement("div");
        this.item0 = createElement("h2");
        this.item0.html("Item0");
        this.item1 = createElement("h2");
        this.item1.html("Item1");
        this.item2 = createElement("h2");
        this.item2.html("Item2");
        this.item3 = createElement("h2");
        this.item3.html("Item3");
        this.item4 = createElement("h2");
        this.item4.html("Item4");
        this.button0 = createButton("Comprar");
        this.button1 = createButton("Comprar");
        this.button2 = createButton("Comprar");
        this.button3 = createButton("Comprar");
        this.button4 = createButton("Comprar");     
        this.buttonMenu = createButton("ABRIR MENU")
        this.buttonMenuBoss = createButton("BOSS")
    }
    setElementsPosition() {
        this.fundo.position(550,230);
        this.fundo.style("width","40%");
        this.fundo.style("height","40%")
        this.fundo.style("background-color","saddlebrown");
        this.item0.position(800, 270);
        this.item1.position(800, 320);
        this.item2.position(800, 370);
        this.item3.position(800, 420);
        this.item4.position(800, 470);
        this.button0.position(1000,300);
        this.button1.position(1000,350);
        this.button2.position(1000,400);
        this.button3.position(1000,450);
        this.button4.position(1000,500);
        this.buttonMenu.position(100,800);
        this.buttonMenuBoss.position(1700,800);
      }
    hide(){
        this.item0.hide();
        this.item1.hide();
        this.item2.hide();
        this.item3.hide();
        this.item4.hide();
        this.button0.hide();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();   
        this.fundo.hide(); 
    }
    mostrarBotoes(){
        this.buttonMenu.show();
        this.buttonMenuBoss.show();
    }
    show(){
        this.item0.show();
        this.item1.show();
        this.item2.show();
        this.item3.show();
        this.item4.show();
        this.button0.show();
        this.button1.show();
        this.button2.show();
        this.button3.show();
        this.button4.show(); 
        this.fundo.show();
        this.buttonMenu.show();
        this.buttonMenuBoss.show();
        }
    display(){
        this.show();

    }
    mostrar(){
        this.mostrarBotoes();
    }
}