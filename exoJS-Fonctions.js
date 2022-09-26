/* Fonction récursive */ // équivaux à une boucle while
console.group(' Fonction récursive ');

function countDown(timeLeft){
    console.log(timeLeft);
    timeLeft--;

    if (timeLeft > 0){
        return countDown(timeLeft);
    }

    console.log('fin boucle');
    return(true);
}

countDown(10);

console.groupEnd();
/*---*/


/* Fonction anonyme */
console.group(' Fonction anonyme ');

const tab = [48, 24, 35, 22, 41, 39];

function soustraire(a, b){
    console.log(a-b);   
}
const tabTrie = tab.sort(soustraire); // .sort méthode de tri de tableau
console.log(tabTrie);

// équivalent anonyme
const tabTrie2 = tab.sort(function(a,b){
    console.log(a-b);   
}); // .sort méthode de tri de tableau
console.log(tabTrie2);

console.groupEnd();
/*---*/


/* Fonction Fléchée */
console.group(' Fonction Fléchée ');

let displayAge = tabTrie.map((tabTrieIndex) => { // Parentèses facultatives si un seull paramètre
    return `${tabTrieIndex} ans`;
});
console.log(displayAge);

// équivalent : Fléchage () => {} équivaux à function(){}
displayAge = tabTrie.map(tabTrieIndex => `${tabTrieIndex} ans`);
console.log(displayAge);

const multiplier = n => n * Math.PI;
console.log(multiplier(2));
const multiplier2 = (a,b) => a * b;
console.log(multiplier2(2,4));

console.groupEnd();
/*---*/


