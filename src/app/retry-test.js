import { creaArrayParoleRandom, stringaParole } from './dizionario.js';

function riprovaTest(e, DOM, elementiDiGioco, inizializzaElementiDom) {
    resettaElementiDiGioco(DOM, elementiDiGioco);
    inizializzaElementiDom(DOM, elementiDiGioco);
}

function resettaElementiDiGioco(DOM, elementiDiGioco) {
    elementiDiGioco.arrayParole = creaArrayParoleRandom(stringaParole);
    elementiDiGioco.inizioGioco = false;
    elementiDiGioco.selezionata = 0;
    elementiDiGioco.giuste = 0;
    elementiDiGioco.sbagliate = 0;
    elementiDiGioco.tempoRimanente = 60;
    elementiDiGioco.count = 0;
    elementiDiGioco.controlTest = true;
    DOM.inputParole.value = '';
}

export default riprovaTest;



