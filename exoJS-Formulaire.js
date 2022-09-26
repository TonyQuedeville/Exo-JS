/* formulaires.html */

/* champ texte */
/*console.group('champ texte')

let inputElets = document.querySelectorAll('input, textarea');

inputElets.forEach((inputElets) => {
   inputElets.addEventListener('focus', function(event) {
       console.log(`entrée dans le champ : ${event.target.name}`);
   });  
   inputElets.addEventListener('blur', function(event){
       console.log(`sortie du champ : ${event.target.name}`)
   });   
});

let textCourt = document.getElementById('textcourt');
textCourt.focus();

console.groupEnd()
/*---*/

/* selecteurs */
console.group('selecteur')

let sel = document.querySelector('#sel');
let rd = document.querySelectorAll('input[type="radio"]');
let chbx = document.querySelector('#chbx');

//selecteur
sel.addEventListener('change', function(event) {
    console.log(event.target.name + ' : ' + event.target.value);
});
sel.value = 'opt2';

//radio bouton
rd.forEach((rd) => {
    rd.addEventListener('change', (event) => {
        console.log(event.target.id + " : " + event.target.checked);
    });
});
rd[2].checked = true;

//case à cocher
chbx.addEventListener('change', (event) => {
    console.log(event.target.name + ' : ' + event.target.checked);
});
chbx.checked = true;

console.groupEnd()
/*---*/


/*  Submit */ 
console.group('Submit')

    let form = document.querySelector('form[name="f2"]');

    form.addEventListener('submit', (event) =>{
        event.preventDefault(); // empeche le rechargement de la page
        console.log('submit !');
    });

    // simulation de click sur submit (ex. pour test unitaire)
    let submit =document.querySelector('button[type="submit"]');

    setTimeout(() => {
        submit.click();
    }, 2000); // delay: 2s

console.groupEnd()
/*---*/