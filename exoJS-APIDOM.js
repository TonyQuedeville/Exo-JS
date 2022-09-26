/* 
    API DOM 
    api-dom.html
*/

/* accés aux selecteurs */
console.group('Méthode Getby');

let lis = document.getElementsByTagName('li');
console.log(lis[2].innerText);

const li = document.getElementById('objet');
console.log(li.innerText);

const lis2 = document.getElementsByClassName('document');
console.log(lis2);
console.log(lis2[0].innerText);
console.log(lis2[1].innerText);

const lis3 = document.getElementsByName('model');
console.log(lis3);
console.log(lis3[0].innerText)


console.groupEnd();
/*---*/


/* accés aux selecteurs */
console.group('Méthode Query');

const objet = document.querySelector('#objet');
console.log(objet.innerText);

const objet2 = document.querySelector('ul li');
console.log(objet2.innerText);

const all = document.querySelectorAll('ul li');
console.log(all);
console.log(all[0].innerText);

console.groupEnd();
/*---*/

/* accés aux attributs */
console.group('Attributs');

let nom = document.getElementById('nom');
for (let attribute of nom.attributes) {
    console.log(attribute.name);
    console.log(attribute.textContent);
}

const attributName = nom.getAttribute('name');
console.log(attributName);

const attributs = nom.getAttributeNames('name');
console.log(attributs);

for (let attribute of nom.getAttributeNames()) {
    console.log(attribute);
}

console.log(nom.getAttributeNode('id').value);

console.groupEnd();
/*---*/

/* Verification si un noeuf possede l'attribut */
console.group('Verif');

for( let elt of lis) {
    if(elt.hasAttribute('class')){
        console.log(elt.innerText);
    }
}

for( let elt of lis) {
    if(elt.hasAttributes()){
        console.log(elt.innerText);
    }
}

console.groupEnd();
/*---*/

/* Modifier un attribut */
console.group('Verif');

const chbx = document.getElementById('box');
chbx.setAttribute('checked', 'checked') // modifier
chbx.removeAttribute('checked');  // supprimer

console.groupEnd();
/*---*/

/* Ajouter des éléments au DOM */
let liste = document.getElementById('liste');
let li4 = document.createElement('li');
li4.innerText = 'item';
liste.append(li4);

let li5 = document.createElement('li');
li5.innerText = 'item';
liste.prepend(li5);
/*---*/

/* Supprimer un élément du DOM */
let autre = document.getElementById('autre');
//autre.remove(); // supprime l'élémnent

// .removeChild : supprimer l'élément à partir du parent et retourne l'élément
liste.append(liste.removeChild(autre)); // le remet lélément supprimé à la fin
/*---*/