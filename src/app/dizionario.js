/*In questo documento creo una stringa di parole dinamica e attraverso alcune funzioni genero un array di 50 parole 
randomiche contenute nella stringa. */

export let stringaParole = `creo una stringa composta da varie parole in modo poi di ricavare un array per giocare al test di velocita 
        sono già bloccato perchè non so più che mobile scrivere in cucina sono alla sala divertimento intrattenere 
        ovolollo principe egizio ramarro pierfederico arrivato al capolinea in copertina grigia uggioso tempo neve 
        rabarbaro tutto rosso inneggiava domenica rivoluzione virus accidentale formica gialla dormire cantina buco 
        nero raccapricciante ravvivato sole luna esproprio popi lamentosa tritacarne cucina cuoco muratore developer 
        francescano giocoso friggeva carne lontana letame incapsulato uovo struzzo lilla serpeggiante valle lacrime 
        abbandonata destino vigile fucile sparare dado ginocchio febbricitante ornitorinco profondo istanziato 
        coercizione implicita esplicita raro oro diamante fermo spero di avere finito frattale ingegnoso americano 
        riso barbagianni barbaro tritone focoso dominante ululato ypsilon greca inbrunire tramonto oceanico birbante 
        fluttuare tratto grosso fine sale pepe liquore fendente arancione dado pulsante voce soave vilipendio tabacco 
        mobile bagno sigarette elettrinica accendino frate nonna mamma sorella attentato allegro felice triste faville
        icona castello girasole genere alimentare bestia odio lamento postura rituale antico nano chitarra fermentato
        posacenere pennello matita rifiuti ugola tonsille rammaricato ginepro arrosto gino fazzoletti maldive orecchino
        formaggio spalmabile pizza birillo`;

function creaArrayDaStringa(stringa) {
    let array = stringa.split(' ');
    return array
}

function controlArray(array, nuovoArray, numeroRandom, parola) {
    while(nuovoArray.length < 50) {
        numeroRandom = Math.random() * array.length | 0;
        parola = array[numeroRandom];
        if (!nuovoArray.includes(parola) && parola !== '' && parola !== `\n`) {
            nuovoArray.push(parola);
        } 
    }
    return nuovoArray;
}

export function creaArrayParoleRandom(stringa) {
    let arrayDaStringa = creaArrayDaStringa(stringa);
    let nuovoArray = [], numeroRandom, parola;
    controlArray(arrayDaStringa, nuovoArray, numeroRandom, parola);
    return nuovoArray;
}

let arrayParole = creaArrayParoleRandom(stringaParole);

export default arrayParole;

