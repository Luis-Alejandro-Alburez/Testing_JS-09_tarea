/*    DÃAS DE ENTRENAMIENTO


Imaginemos que eres un maratonista experimentado.  Utilizas un servicio
llamado DÃ­as de entrenamiento que envÃ­a mensajes del evento al que
te has inscrito y los dÃ­as que tienes para entrenar.

Los organizadores se han enterado de que eres un codificador y te han
pedido que les ayudes a resolver un problema: el programa actualmente utiliza
el Ã¡mbito incorrecto para sus variables.

Saben que esto puede ser problemÃ¡tico a medio que su servicio evoluciona.
En este proyecto, harÃ¡s que DÃ­as de Entrenamiento sea mÃ¡s fÃ¡cil de 
mantener y menos propenso a errores al corregir los Ã¡mbitos de las variables.

*/
//El siguiente programa no funciona
// EL scope de `random` es demasiado amplio

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope de `days` es demasiado limitado
let days = 0;
const getTrainingDays = (event) => {
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// El scope de`name` es demasiado limitado
const logEvent = (name, event) => {
  //const name = "Nala";
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  //const name = "Nala";
  console.log(`${name}'s time to train is: ${days} days`);
};

const event1 = getRandEvent();
const days1 = getTrainingDays(event1);

//Defina una variable `name`.
// Ãšsela como argumento despuÃ©s de actualizar logEvent y logTime

logEvent("Nala", event1);
logTime("Nala", days1);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);

/*TAREA 1

    Empecemos ejecutando el archivo trainingDays.js . En la consola podemos  
    ver que el programa no funciona.

    Lo ideal es que la funciÃ³n getRandEvent() seleccione un evento al azar.

    La funciÃ³n getTrainingDays() devuelve la cantidad de dÃ­as de 
    entrenamiento en funciÃ³n del evento seleccionado. 
    
    Las funciones logEvent() y logTime() imprimen el nombre del atleta, 
    el evento y la cantidad de dÃ­as en la consola.

    Pero las variables con un alcance inadecuado estÃ¡n causando errores.
    
    
TAREA 2

    Para evitar el ReferenceError, declare days dentro de 
    la  funciÃ³n getTrainingDays, antes de la declaraciÃ³n if.

TAREA 3

    Ejecute el programa nuevamente: no hay error, pero days es undefined!
    Las variables days se estan definiendo en el scope de cada declaraciÃ³n
    if/else if. 
   
    Elimine los tres let dentro de las declaraciones if/ else if.

TAREA 4

    Ejecute el programa de nuevo: arreglado! Ahora las declaraciÃ³nes 
    if/else if cambian el valor de days en lugar de definir un day nuevo.


HAGA QUE EL NOMBRE SEA GLOBAL

TAREA 5

Las funciones log -- logEvent() y logTime() -- utilizan la misma variable
name.  Parece haber un problema con el alcance (Observa el cÃ³digo y descubre
la cantidad de cÃ³digo duplicado) AdemÃ¡s de las variables con un alcance dema-
siado amplio, el cÃ³digo duplicado puede indicar que una variable puede tener
un alcance demasiado estricto.

Evitemos esta repeticiÃ³n apregando name como pimer parÃ¡metro para
cada funciÃ³n.

Averigua Â¿Por quÃ© la variable name tiene una linea tachandola?


TAREA 6

Mueva la variable name al Ã¡mbito global.


TAREA 7

Pase name como primer argumento a logEvent() y logTime().

TAREA 8

Comprueba que el programa sigue funcionando.
EjecÃºtalo y comprueba el resultado.

TAREA 9

Pruebe las funciones de otro competidor.  Copia y pega este cÃ³digo
al final del archivo.

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

TAREA 10

Ejecuta el programa.  Los eventos se asignan aleatoriamente, pero Naila
y Warren ejecutan los mismos eventos.

TAREA 11

Vemos que la variable ramdom estÃ¡ definida en el Ã¡mbito global.
Cada vez que se llama a getRandEvent se utiliza el mismo valor.

En la parte superior del archivo, mueva la variable random del
Ã¡mbito global al Ã¡mbito de bloque dentro de la funciÃ³n getRandEvent.

Felicitaciones "DÃ­as de Entenamiento" es mÃ¡s fÃ¡cil de mantener y tiene menor
errores gracias a tu trabajo. 
Ejecuta el programa varias veces para asegurarte de que los resultados sean 
aleatorios.


*/
