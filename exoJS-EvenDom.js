/* Methodes de récupération des élements du DOM */

let elementBtn = document.getElementById('btn');
let elementsText = document.getElementsByName('text');
let elementsSpan = document.getElementsByTagName('span');
let elementsTitle = document.getElementsByClassName('title');
let elementsForm = document.querySelectorAll('form');
let elementClassCss = document.querySelector('.class-css');
let elementClassCss2 = document.querySelector('.class-css').querySelector('#span');
//équivalent : let elementClassCss3 = document.querySelector('.class-css').getElementById('span');
console.dir(elementBtn); // affiche les propriètés de 'élement.
/*---*/

/* Evenement */
const callback = (() => { // externalisation de l'action de l'évenement
    alert('click');
})
elementBtn.addEventListener('click', callback); 
// elementBtn.addEventListener('click', callback, true); // inverse les phases d'execution. true: bouillement, false: capture
/*elementBtn.addEventListener('click', callback, {
    capture: true, // phase d'execution
    once: true, // execution une seul fois
    passive: true // inibition de l'execution
});*/

elementBtn.removeEventListener('click', callback); // suppression de l'évenement
/*---*/



/* Evement personnalisé */
let event = new CustomEvent('personnalEvent', { detail : { 'myData': 'mon événement perso' } });
let element = document.getElementById('navBar');

element.addEventListener('personnalEvent', displayMe);

element.dispatchEvent(event);

function displayMe(e) {
  console.log(e.detail.myData);
}

/*---*/