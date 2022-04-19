// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const Pizzas = [
    {id: 0, nombre: "Muzzarella", ingredientes: ["Muzzarella", "Salsa de tomate"], precio: 600},
  
    {id: 1, nombre: "Especial", ingredientes: ["Muzzarella","Salsa de tomate","Jamón Cocido"], precio: 750},
  
    {id: 2, nombre: "Cuatro Quesos", ingredientes: ["Muzzarella", "Gruyere", "Roquefort", "Parmesano", "Salsa de tomate"], precio: 800},
  
    {id: 3, nombre: "Calabresa", ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"], precio: 580},
  
    {id: 4, nombre: "Cebolla", ingredientes:["Muzzarella", "Salsa de tomate", "Cebolla"], precio: 700},
  
    {id: 5, nombre: "Lechuga", ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"], precio: 430}
  ];

  //Inciso A
for(let i=0; i<Pizzas.length; i++){
    if( Pizzas[i].id%2){
      console.log(`Pizzas con id impar: ${Pizzas[i].nombre}`);
    }
  }

  console.log('/*------------------------------------------*/');
  //Inciso B
for(let i=0; i<Pizzas.length; i++){
    if( Pizzas[i].precio < 600 ){
        console.log(`La Pizza ${Pizzas[i].nombre} de valor ${Pizzas[i].precio} es de valor inferior a $600`);
        break;
    }
}
console.log('/*------------------------------------------*/');
//Inciso C
console.log(`Todas las Pizzas disponibles son: `);
for (let i=0; i< Pizzas.length; i++){
    console.log(`${Pizzas[i].nombre} \n `);
}
console.log('/*------------------------------------------*/');
//Inciso D
console.log(`Todos los Precios de las Pizzas son: `);
for (let i=0; i< Pizzas.length; i++){
    console.log(`$${Pizzas[i].precio} \n `);
}
console.log('/*------------------------------------------*/');
//Inciso E
for (let i=0; i< Pizzas.length; i++){
    console.log(`La Pizza ${Pizzas[i].nombre} tiene un valor de $${Pizzas[i].precio}`);
}