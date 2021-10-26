import arrayParole from './dizionario.js';
import inizializzaElementiDom from './init-dom.js';
import initTest from './init-test.js';
import riprovaTest from './retry-test.js';

const DOM = {
    paroleWrapper: document.getElementById('parole-wrapper'),
    inputParole: document.getElementById('input-parole'),
    containerTempo: document.getElementById('tempo-rimanente'),
    containerRisultato: document.getElementById('risultato'),
    riprovaBtn: document.getElementById('nuovo-gioco'),
}

let elementiDiGioco = {
    arrayParole,
    inizioGioco: false,
    selezionata: 0,
    giuste: 0,
    sbagliate: 0,
    tempoRimanente: 60,
    count: 0,
    controlTest: true
}

export default() => {
    inizializzaElementiDom(DOM, elementiDiGioco);
    DOM.inputParole.addEventListener('input', e => initTest(e, DOM, elementiDiGioco));
    DOM.riprovaBtn.addEventListener('click', e => riprovaTest(e, DOM, elementiDiGioco, inizializzaElementiDom));
}