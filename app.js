// Ejercicio Número 1
// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

// 👉 Crear una función que acepte ese array como parámetro. 

// Dentro de la función, debemos lograr lo siguiente: 
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
// Los ingredientes impares son: (ingredientes en array impares)."

//Array con al menos 10 ingredientes de una pizza
let arrayPizza = ['Harina','Aceite','Levadura','Sal','Agua','Salsa','Huevos','Oregano','Queso','Jamon','Tomate',] ;
let par = [];
let impar = [];
//Defino la funcion que recibe un array
function ParImpar(ingredientes){
    for (let i = 0; i < ingredientes.length; i++){
        if ( ingredientes[i].length % 2 == 0 ){
            par.push(ingredientes[i]);
        } else {
            impar.push(ingredientes[i]);
        }
    }
}
//Llamo a la funcion
ParImpar(arrayPizza);
//Imprimo por pantalla el resultado de ambos arrays
console.log('Los Ingredientes pares son: \n'+ par.toString() + '\n'+ 'Los Ingredientes impares son: \n'+ impar.toString());
