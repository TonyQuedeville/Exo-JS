/* Caste : Parse()) */
console.group('Caste : Parse())');
let a = 3;
let b = 'f';
console.log(a + parseInt(b,16));
console.log(parseInt(b,16)); // Hexadécimal base 16
console.groupEnd();
/*---*/

/* Concatenation */
console.group('Concatenation');
let nom = 'Toto';
let txt = 'Bonjour';
let chiffre = 23;

console.log(txt + ' ' + nom + ' : \n' + chiffre);
// équivalent
console.log(`${txt} ${nom} : 
${chiffre}`); // inclu le saut de ligne
console.groupEnd();
/*---*/

/* Caractère d'échappement */
console.group("Caractère d'échappement");
console.log("Bienvenu à l'utilisateur");
console.log(`Bienvenu à l'utilisateur`);
console.log('Bienvenu à l\'utilisateur \o/');
console.log('Bienvenu à l\'utilisateur \\o/');
console.groupEnd();
/*---*/

/* Longueur de chaine */
console.group('Longueur de chaine');
let password = 'azerty';
console.log(password.length);
password = 'azerty\'uiop';
console.log(password.length); // le caractère échappé ne compte pas
console.groupEnd();
/*---*/

/* Majuscule/Minuscule - Espace - sous chaine */
console.group('Majuscule/Minuscule - Espace - sous chaine');
console.log(nom.toUpperCase());
console.log(nom.toLocaleLowerCase());

let txtEspace = '    coucou toi   ';
console.log(txt + ' ' + txtEspace.trim() + ' !'); // élimine les espaces en début et fin
console.log(txt + ' ' + txtEspace.trimStart() + ' !'); // élimine les espaces en début 
console.log(txt + ' ' + txtEspace.trimEnd() + ' !'); // élimine les espaces en fin

let sousChaine = '45 : control Change';
console.log(sousChaine.substring(5));
console.log(sousChaine.slice(5));
console.log(sousChaine.substring(sousChaine.length - 4));
console.log(sousChaine.slice(-4)); // slice prend des nombres négatifs
console.log(sousChaine.substring(0,2));
console.log(sousChaine.slice(0,2));
console.groupEnd();
/*---*/

