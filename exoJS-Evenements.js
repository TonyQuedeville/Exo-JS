
/* Evenement globaux */
/* Load */
console.group('Chargement page');

window.addEventListener('load', function(event){
    console.log('page chargée !')
})

console.groupEnd();

// offline : perte de connexion internet
// abort : annulation du chargement d'une ressource
// ended : fin de chargement d'une ressource
// success : ressource chargée correctement
/*---*/

/* Evenements Souris*/
/* click Bouton */
const btn = document.getElementById('btn');

function evenement(){
    console.log('clic sur le bouton');
};
btn.addEventListener('click', evenement);
/*---*/
function evenementSurvol(){
    console.log('Survol du bouton');
};
btn.addEventListener('mouseenter', evenementSurvol);
/*---*/
function evenementSortie(){
    console.log('Sortie du bouton');
};
btn.addEventListener('mouseleave', evenementSortie);
/*---*/
function evenementUp(){
    console.log('Relachement du clic sur le bouton');
};
btn.addEventListener('mouseup', evenementUp);
/*---*/

/* Evenements clavier */
console.group(' Clavier ');

const input = document.getElementById('input');

function txtKeyDown(){
    console.log('touche clavier appuyée sur le champ texte');
};
input.addEventListener('keydown', txtKeyDown);

function txtKeyUp(){
    console.log('touche clavier relachée sur le champ texte');
};
input.addEventListener('keyup', txtKeyUp);

// keypress : appuyer sur une touche

console.groupEnd();
/*---*/

/* Evenements de formulaire */
console.group(' Formulaire ');

const formulaire = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');
const body = document.getElementsByTagName('body')[0];

function evenementSubmit(event){
    event.preventDefault();  // empêche le rechargement de la page
    event.stopPropagation(); // evite le répercuter l'evenement sur les éléments parents (form et body)
    console.log(event.target);
    console.log('Submit !');
};
formulaire.addEventListener('submit', evenementSubmit);
body.addEventListener('click', evenementSubmit);

console.groupEnd();
/*---*/

/* Evenements Clic intempestif */
/*console.group(' Clic intempestif ');

btn.addEventListener('click', debounce(function(e){
    console.log('clic intemptestif')
}, 2000));

function debounce(callback, delay){
    let timer
    return function() {
        const args = arguments;
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args)
        }, delay)
    }
}

console.groupEnd();
/*---*/