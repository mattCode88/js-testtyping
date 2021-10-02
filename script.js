// ELEMENTI DOM
const DIFFICOLTA = document.getElementById("difficolta"),
      MESSAGGIO = document.getElementById("messaggio"),
      INVIO = document.getElementById("invio"),
      GIOCO = document.getElementById("gioco"),
      CONTAINERWORD = document.getElementById("container-word"),
      TIMECONTROL = document.getElementById("time-control"),
      MESSAGGIO2 = document.getElementById("messaggio2"),
      RADIO = document.querySelectorAll("#difficolta > div:nth-of-type(2) > input"),
      STARTGAME = document.getElementById("inizia-gioco"),
      RESET = document.getElementById("reset")
      PAROLECORRETTE = document.getElementById("parole-corrette");

// VARIABILI--------------------------------------------------------------------------------------------------------------------------------------------
let gameValue,
    span,
    arrayElementiParole,
    arrayControlloParole,
    contaParole = 0,
    parole,
    parola,
    indexParola;

// FUNZIONI---------------------------------------------------------------------------------------------------------------------------------------------
let generaNumeroRandom = () => Math.floor(Math.random() * (100 - 0));

let distruggiParole = () => {
    let parole = document.querySelectorAll("#container-word > span");
    parole.forEach(element => {
        element.remove();
    });
}

let controlloNumeroRandomico = (array) => {
    let numero = generaNumeroRandom();
    if(!array.includes(numero)){
        array.push(numero);
    }else{
        while(array.includes(numero) && array.length < 100){
            numero = generaNumeroRandom();  
        }
        array.push(numero);
    }
    return numero;
}

// GENERO ARRAY 100 PAROLE-------------------------------------------------------------------------------------------------------------------------------
let parolePerArray = `facciamo birillo frase molto lunga ancestrale generare array contenete cento parole così ramarro doversi stufare 
                      mettendo virgole eternità spazi ovolollo improprio questa valle lacrime senza reale coercizione implicita esplicita 
                      importante arrivare dunque maldive proseguiamo popi definire qualcosa speciale volendo essere azzurro 
                      comunque cactus cesta televisione playstation mobile tavolo cucina orologio divano gerundio sul piedistallo 
                      posto comune motivo incapzulato dentro orecchino verde computer fernando giocoso pericoloso bella ragazza 
                      camino vicessitudine acrobatica nunchaku elementale convalescente ospedale panorama mamma meritato 
                      riconoscimento facciale ficcanaso famoso cocendo pizza forno microonde spalmabile formaggio vecchio 
                      rotondo tette americane senegal mare sole luna addormentarsi cuniculo fossa arricchito favori`;

function generaArrayParole(frase){
    let array2 = [],
        array = frase.split(' ');
    array.forEach(element => {
        if(!array2.includes(element) && element !== "" && element !== "\n"){
            array2.push(element);
        }
    });
    return array2;
}

let arrayParole = generaArrayParole(parolePerArray);

// SCELTA DIFFICOLTA--------------------------------------------------------------------------------------------------------------------------------------
let arrayIndexRandom = [];
let primoIndexRandom = generaNumeroRandom();
arrayIndexRandom.push(primoIndexRandom);

INVIO.addEventListener("click", () => {
    let count = 0;
    MESSAGGIO.innerHTML = "";
    RADIO.forEach(element => {
        if(!element.checked){
            count += 1;
        }else if(element.checked){
            gameValue = element.value;
        }   
    });

    if(count === 2){
        MESSAGGIO.innerHTML = "Seleziona una difficoltà."
    }else{
        GIOCO.setAttribute("style", "display:block");
        DIFFICOLTA.setAttribute("style", "display:none");
        arrayParole.forEach(element => {
            span = document.createElement("SPAN");
            span.setAttribute("class", "parole");
            span.innerHTML = element;
            CONTAINERWORD.appendChild(span);
        });
    }

    if(count !== 2){
        parole = document.getElementsByClassName("parole");
        arrayElementiParole = Array.from(parole);
        if(gameValue === 'facile'){
            arrayElementiParole[contaParole].classList.add("background");
        }else{
            arrayElementiParole[primoIndexRandom].classList.add("background");
        }
    }
})

// INIZIO DEL GIOCO--------------------------------------------------------------------------------------------------------------------------------------
let control = true;
let time = 60;
let paroleGiuste = 0;
let indexRandom;

STARTGAME.addEventListener("keypress", (e) => {   

    if(e.isTrusted && control){
        control = false;
        let timer = setInterval(myTimer, 1000);
        function myTimer(){
            time -= 1;
            TIMECONTROL.innerText = time;
            if(time === 0){
                clearInterval(timer);
                MESSAGGIO2.setAttribute("style", "display:block");
                PAROLECORRETTE.innerHTML = paroleGiuste;
                RESET.setAttribute("style", "display:block");
            }
        }
    }

    if(e.keyCode === 13 && time > 0 && gameValue === "facile"){
        parola = STARTGAME.value;

        if(arrayParole[contaParole] === parola){
            arrayElementiParole[contaParole].setAttribute("style", "color:lightseagreen");
            paroleGiuste += 1;
        }else{
            arrayElementiParole[contaParole].setAttribute("style", "color:red");
        }

        arrayElementiParole[contaParole].classList.remove("background");
        contaParole += 1;
        arrayElementiParole[contaParole].classList.add("background");  
        STARTGAME.value = '';
    }else if(e.keyCode === 13 && time > 0 && gameValue === "difficile"){
        parola = STARTGAME.value;

        if(primoIndexRandom){

            if(arrayParole[primoIndexRandom] === parola){
                arrayElementiParole[primoIndexRandom].setAttribute("style", "color:lightseagreen");
                paroleGiuste += 1;
            }else{
                arrayElementiParole[primoIndexRandom].setAttribute("style", "color:red");
            }

            arrayElementiParole[primoIndexRandom].classList.remove("background");
            primoIndexRandom = false;
            indexRandom = controlloNumeroRandomico(arrayIndexRandom); 
            arrayElementiParole[indexRandom].classList.add("background");
        }else{

            if(arrayParole[indexRandom] === parola){
                arrayElementiParole[indexRandom].setAttribute("style", "color:lightseagreen");
                paroleGiuste += 1;
            }else{
                arrayElementiParole[indexRandom].setAttribute("style", "color:red");
            }

            arrayElementiParole[indexRandom].classList.remove("background");
            indexRandom = controlloNumeroRandomico(arrayIndexRandom);
                        
            if(arrayIndexRandom.length <= 100){
                arrayElementiParole[indexRandom].classList.add("background");
            }
            
        }
        STARTGAME.value = '';
    }
})

// RIPROVA LA SFIDA-----------------------------------------------------------------------------------------------------------------------------------
RESET.addEventListener("click", () => {
    control = true;
    time = 60;
    contaParole = 0;
    paroleGiuste = 0;
    STARTGAME.value = '';
    arrayIndexRandom = [];
    primoIndexRandom = generaNumeroRandom();
    arrayIndexRandom.push(primoIndexRandom);
    TIMECONTROL.innerHTML = time;
    GIOCO.setAttribute("style", "display:none");
    DIFFICOLTA.setAttribute("style", "display:flex");
    MESSAGGIO2.setAttribute("style", "display:none");
    RESET.setAttribute("style", "display:none");
    distruggiParole();
})


