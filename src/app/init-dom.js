/*In questo documento inizializzo gli elementi di gioco del DOM, creo le parole da inserire nel wrapper, stabilisco un tempo iniziale 
e nascondo il container risultato e il bottone per rigiocare */

function aggiungiTempoRimanente(DOM, elementiDiGioco) {
    DOM.containerTempo.innerText = elementiDiGioco.tempoRimanente;
}

function nascondiElementi(DOM) {
    if (DOM.containerRisultato.className === 'show' ) {
        DOM.containerRisultato.classList.replace('show', 'hide');
        DOM.riprovaBtn.classList.replace('show', 'hide');
    }    
}

function controllaWrapperParole(DOM) {
    if (DOM.paroleSpan) {
        DOM.paroleSpan.forEach(element => {
            element.remove();
        });
    }
}

function creaSpanParole(DOM, elementiDiGioco) {
    controllaWrapperParole(DOM);
    let span;
    elementiDiGioco.arrayParole.forEach((element, index) => {
        span = document.createElement('SPAN');
        span.innerText = element;
        if (index === elementiDiGioco.selezionata) {
            span.classList.add('selezionata');
        }
        DOM.paroleWrapper.appendChild(span);
    });
}

function inizializzaElementiDom(DOM, elementiDiGioco) {
    DOM.inputParole.focus();
    aggiungiTempoRimanente(DOM, elementiDiGioco);
    nascondiElementi(DOM);
    creaSpanParole(DOM, elementiDiGioco);
    DOM.paroleSpan = document.querySelectorAll('#parole-wrapper > span');
}

export default inizializzaElementiDom;