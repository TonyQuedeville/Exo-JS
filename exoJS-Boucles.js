let n = 5;
let i = 5;

/* while */
console.group(' while ');

while(i < n){
    console.log(i);
    i = ++i;
};

console.groupEnd();
/*---*/

/* do while */
i = 5;
console.group(' do while ');

do {
    console.log(i);
    i = ++i;
} while(i < n);

console.groupEnd();
/*---*/

/* for */
console.group(' for ');

for(i=0; i<5; i++){
    console.log(i);
}

console.groupEnd();
/*---*/

/* for each */
console.group(' for each ');

let animals = ['Lion', 'Chat', 'Ours']
animals.forEach(function(element, index){
    console.log(index + ' : ' + element)
});

console.groupEnd();
/*---*/

/* for of */
console.group(' for of ');

for(let value of animals){
    console.log(value);
}

console.groupEnd();
/*---*/

/* for in */
console.group(' for in ');

let user = {nom: 'Steel', prenom: 'Toto', age: 49}
for(let propriete in user){
    console.log(propriete);
    console.log(user[propriete]);
}

console.groupEnd();
/*---*/


