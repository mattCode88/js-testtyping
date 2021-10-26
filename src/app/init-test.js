// FUNZIONE DI GIOCO---------------------------------------------------------------------------------------------------------------------------------
function initTest(e, DOM, elementiDiGioco) {
    if ( !elementiDiGioco.inizioGioco ) {
        startTimer(DOM, elementiDiGioco);
        elementiDiGioco.inizioGioco = true;
    }
    if (e.data === ' ' && elementiDiGioco.tempoRimanente > 0 && elementiDiGioco.controlTest) {
        ++elementiDiGioco.count;
        let parolaInserita = recuperaParolaInserita(DOM);
        controllaParole(DOM, elementiDiGioco, parolaInserita);
        cambiaSelezionata(DOM, elementiDiGioco);    
    } 
}

// FUNZIONI ACCESSORIE---------------------------------------------------------------------------------------------------------------------------------
function startTimer(DOM, elementiDiGioco) {
    let timer = setInterval(myTimer, 1000);
    function myTimer() {
        DOM.containerTempo.innerText = --elementiDiGioco.tempoRimanente;
        if( elementiDiGioco.tempoRimanente === 0 ) {
            clearInterval(timer);
            mostraRisultato(DOM, elementiDiGioco);
            mostraPulsante(DOM);
        }
    }
}

function cambiaSelezionata(DOM, elementiDiGioco) {
    if ( elementiDiGioco.count < elementiDiGioco.arrayParole.length ) {
        DOM.paroleSpan[elementiDiGioco.selezionata++].classList.remove('selezionata');
        DOM.paroleSpan[elementiDiGioco.selezionata].classList.add('selezionata');
    }
    if (elementiDiGioco.count === elementiDiGioco.arrayParole.length) {
        DOM.paroleSpan[elementiDiGioco.selezionata].classList.remove('selezionata');
        elementiDiGioco.controlTest = false;
    }
} 

function recuperaParolaInserita(DOM) {
    let parolaInserita = DOM.inputParole.value;
    DOM.inputParole.value = '';
    return parolaInserita;
}

function controllaParole(DOM, elementiDiGioco, parolaInserita) {
    if ( parolaInserita.trim() == DOM.paroleSpan[elementiDiGioco.selezionata].textContent ) {
        DOM.paroleSpan[elementiDiGioco.selezionata].classList.add('giusta');
        elementiDiGioco.giuste++;
    } else {
        DOM.paroleSpan[elementiDiGioco.selezionata].classList.add('sbagliata');
        elementiDiGioco.sbagliate++;
    }
}

function mostraRisultato(DOM, elementiDiGioco) {
    DOM.containerRisultato.innerHTML = `Parole giuste: ${elementiDiGioco.giuste}.<br>
                                        Parole sbagliate: ${elementiDiGioco.sbagliate}.`
     DOM.containerRisultato.classList.replace('hide', 'show');
}

function mostraPulsante(DOM) {
    DOM.riprovaBtn.classList.replace('hide', 'show');
}

export default initTest;