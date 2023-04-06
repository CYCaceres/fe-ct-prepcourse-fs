/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]; // la posición del array va entre []corchetes
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1]; //[0, 1, 2, 3, 4] resultado 5 - 1 = 4 (muestra el último elemento)
   // un array tiene una propiedad llamada .length que cuenta los 
   //elementos que tiene el arreglo
   // otra manera de hacerlo:
   // return array.pop(); //.pop() muestra el último elemento 
   //se puede utilizar si estamos seguros de que la cantidad de los elementos no va a variar 
   devolverPrimerElemento
}



function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   
   //forma tradicional de haerlo
   for(var i = 0; i < array.length; i ++){// mientras i sea menor al array
       array[i] = array[i] + 1;
   } 
   return array;
}

// otra forma:

// return array.map(elem => elem + 1); // arrow functions
// return array.map(function (elem) {return elem + 1} )

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

//array[array.length] = elemento;
array.push(elemento);
return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.unshift(elemento);// .shift al principio
return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(var i  = 0; i < array.length; i ++){
      if(array[i] === elemento){
         return true;
      }
         
   }
   return false;
};
//otra forma:
// return array.includes(elemento);



function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   //var suma = 0; (NO ME CORRE)
   //for (var i = 0; i = arrayOfNums.length; i++) {
   //suma = suma + arrayOfNums[i];
   //}
   //return suma;

   // otra forma:

   var suma = 0;
   for(const num of arrayOfNums) {
      suma = suma + num;
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var suma = 0;
   for(const num of resultadosTest) {
      suma = suma + num;
   }
   return suma / resultadosTest.length;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   //var numeroMasGrande = arrayOfNums [0]; (NO ME CORRIO)
  // arrayOfNums.array.forEach(numero => {
  //    if(numero > numeroMasGrande) numeroMasGrande = numero;
  // });
  // return numeroMasGrande;

   var maximo = arrayOfNums[0];
   for(var i = 1; i < arrayOfNums.length; i ++) {
      if (arrayOfNums[i] > maximo) {
         maximo = arrayOfNums[i];
      }
   }
   return maximo;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. 
   //Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

//if(arguments.length === 0) {return 0} // no me corrió
//if(arguments.length === 0){ return arguments}

//var resultado = 1;
//for(var i = 0; i < arguments.length; i++){
//   resultado = resultado + arguments[i]
//}
//return resultado;

if(arguments.length < 1) return 0;
var total = 1; // vamos a iniciar la variable en 1
for(var i = 0; i < arguments.length; i++){  // y vamos a recorrer el arreglo arguments
  total = total * arguments[i];
}       
return total;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos 
   //del arreglo cuyo valor sea mayor que 18.
   // Tu código:

  
   // hacemos las 3 partes de for: variable = 0 y lo va a 
// realizar mientras i sea menor al array.length y va a ir aumentando de uno e uno
 var contador = 0;
 for (var i = 0; i < array.length; i++) { // y va a ir verificando
   if (array[i] > 18) { // éste bucle va a decir ¿eres mayor a 18?
      contador ++; // 18 es mayor que 18? No, sigo, 20 es mayor que 18? si entonces sumale a mi contador(++)
   }
 }
 return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if(numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   }   return "Es dia laboral";
}




function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   // 9
   // 900
   // 09


   const numero = num.toString() //vamos a crear una constante
   if(numero[0] === "9")
        return true
   else 
        return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   const primerElemento = array[0]
   for (let i = 1; i < array.length; i ++){ // de ésta manera recorremos el array
      const element = array[i];
      if(primerElemento !== element)
      return false
   }
   return true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, 
   //buscar los meses "Enero", "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   //const segundoArray = [] (no me corrió)
   //for (let i = 0; i < array.length; i ++) {
   //   const element = array[i];
   //   if ("Enero" === element || "Marzo" === element || "Noviembre" === element)
   //      segundoArray.push(element)
   //}
   //if (segundoArray.length = 0)
   //  return segundoArray
   //else
   //return "No se encontraron los meses pedidos"


   // vamos a preguntar si ese array en su posición 0 es = a enero, marzo o noviembre
   // en caso de que sea asi lo vamos a pushear a un nuevo array que va a ser igual a un array vacio[]
   //entonces cada vez que sea igual lo va a pushear
   let newArray = [];
   for (let i = 0; i < array.length; i ++){// vamos a crear un bucle for para ir recorriendo cada posición de éste array
             if(array[i] === "Enero"||array[i] === "Marzo"||array[i] === "Noviembre"){ //también vamos a hacer un condicional 
               newArray.push(array[i])
             }

   }        
   if(newArray.length === 3) return newArray
   return "No se encontraron los meses pedidos"
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let multiploDe6 = [];
   for(let i = 0; i <= 10; i ++) {
     multiploDe6.push(i * 6);
   }
   return multiploDe6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   //let newArray = []; // (si funciona)
  // for(let i = 0; i < array.length; i ++) {
  //    if (array[i] > 100 ) {
    //     newArray.push(array[i])
      //}
  // }
  // return newArray;

  // OPCION CON METODOS:

    let newArray = array.filter((mayor) => mayor > 100);
    return newArray;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   const newArray = []
   let wasBreak = false
   for(let i = 0; i < 10; i ++) {
      if (num === i) {  
         wasBreak = true 
         break
      }
      newArray.push(num += 2)
   }
   if(wasBreak) return "Se interrumpió la ejecución"
   return newArray
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   const newArray = [];
   for(let i = 0; i < 10; i ++) {
      if(i === 5) continue

      newArray.push(num +=2)
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
