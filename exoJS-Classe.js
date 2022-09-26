/* index.html */

/*
function ES5() {
    // notation ES5
}

class ES6 {
    // Notation ES6
}

/*---*/

/* Constructeur */

class Voiture {
    constructor(couleur, marque, nbSiege){
        this.couleur = couleur;
        this.marque = marque;
        this.nbSiege = nbSiege;
        this.moteurOn = false;
        this.vitesse = 0;
        this.categorieVéhicule = 'Véhicule motorisé'; 
    }

    demarrer() {
        this.moteurOn = true;
        this.vitesse = 1;
    }
    arreter() {
        this.moteurOn = false;
    }
    changerVitesse(vitesse){
        this.vitesse = vitesse;
    }
}

let megane = new Voiture('noire', 'Renault', 4);
console.log(megane);
console.log(megane.marque);

megane.demarrer();
console.log(megane);