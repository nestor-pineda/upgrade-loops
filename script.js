"use strict";

// #1: Usa includes
// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ["Camiseta de Pokemon", "Pantalón coquinero", "Gorra de gansta", "Camiseta de Basket", "Cinrurón de Orión", "AC/DC Camiseta"];

for (let i = 0; i < products.length; i++) {
  let camisetaSi = products[i].includes("Camiseta");
  if (camisetaSi) {
    console.log(products[i]);
  }
}

// #2: Condicionales avanzados
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
  if (alumns[i].T1 && alumns[i].T2) {
    alumns[i].isApproved = true;
  } else if (alumns[i].T1 && alumns[i].T3) {
    alumns[i].isApproved = true;
  } else if (alumns[i].T2 && alumns[i].T3) {
    alumns[i].isApproved = true;
  } else {
    alumns[i].isApproved = false;
  }
  console.log(`${alumns[i].name} ha aprobado: ${alumns[i].isApproved}`);
}

// Devuelve:
// Pepe Viruela ha aprobado: false
// script.js:36 Lucia Aranda ha aprobado: true
// script.js:36 Juan Miranda ha aprobado: true
// script.js:36 Alfredo Blanco ha aprobado: false
// script.js:36 Raquel Benito ha aprobado: true

//#3: Probando For...of

const placesToTravel = ["Japon", "Venecia", "Murcia", "Santander", "Filipinas", "Madagascar"];

for (let value of placesToTravel) {
  value += 1;
  console.log(value);
}

// #4: Probando For...in

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (let i in alien) {
  console.log(`${i}: ${alien[i]}`);
}
// Devuelve:
// name: Wormuck
// script.js:65 race: Cucusumusu
// script.js:65 planet: Eden
// script.js:65 weight: 259kg
