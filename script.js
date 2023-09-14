/*

Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto)
*/

let nombre = "felipe";
let edad = 31;
let puesto = "intructor";

// Usar un array (arreglo) para "juntaar" nuestras variables
// agregamos los elementos al array separados por coma
let personasDeLACH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

//podemos almacenar cualquier tipo de dato dentro de un array
let cosasRandome = ["Pelota", 31, true, null, "Alejandro"];
console.log(typeof (personasDeLACH31)); // objeto
console.log(typeof (cosasRandome)); // objeto

//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un objeto porque los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)
//Los arreglos, al ser objetos, cuentan con metodos que nos permiten manipular



//ya que tengo mi arreglo, como podemos acceder a esa informacion
//PAra mosntrar la cantidad de elementos que tengo en un arreglo, usamos un metodo llamado length
//MEtodo length para mostrar los elementos de un array
console.log(personasDeLACH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//incializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elmento en especifico utilizando los indices
console.log(personasDeLACH31[0]); //Felipe
console.log(personasDeLACH31[25]); //undefind por que el elemento aun no existe

//Tambien podemos acceder a un elemento de mi arreglo por medio de una variable

//Declaro el indice en una variable
let index = 4;
//Paso esta variable como indice del arreglo
console.log(personasDeLACH31[index]);

let pacientes = [];
let dentista = ["Dr. Smith", "Dra. Garcia", "Dr.House", "Dr.Simi"];

//para jhacer modificaciones, usamos el index para acceder al dato, y luego lo registramos
dentista[3] = "Similares";
dentista[8] = "Strange";
console.log(dentista);

//Funcion para imprimir asteriscos que separan

function asteriscos() {
    console.log("***********************************************************************")
}
asteriscos();


//MEtodos de arrays 
let listaDelSuper = ["Gansitos", "Coca-Cola", "Arroz", "atun", "verduras"];


///MEtodo length para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de : " + listaDelSuper.length);

//Metodo Push() para poner elementos al final de mi array
listaDelSuper.push("JAbon para ropa", "jabon para trastes");
console.log(listaDelSuper.length);
console.log(listaDelSuper);

//Metodo pop() para eliminar elementos del final del array
listaDelSuper.pop();
console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Agregar un elemento al principio del array con el metodo unshift();
listaDelSuper.unshift("Sabrintones");
console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Eliminar el primer elemento de array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la psoicion de las verduritas
console.log(listaDelSuper.indexOf("verduras"));

//Metodo splice para agregar, elminar o reemplazar elementos
//nombreArreglo,splice(inicio, cantidadElementosaEliminar, elementoAInsertar1, elementoAInsertar2, ...);

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");
console.log(listaDelSuper);

function asteriscos() {
    console.log("***********************************************************************")
}
asteriscos();


listaDelSuper.splice(5, 2, "Platano");
console.log(listaDelSuper);


//MEtodo .map()
let numeros = [1, 2, 3, 4, 5];

//crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8, 10]
let numerosPorDos = numeros.map(function (numeros) {
    return numeros * 2;
});

console.log(numerosPorDos);


/*
Imaginemos que tenemos un array de pacientes, este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40  años, el paciente necesita una atencion especial

    Aspectos a considerar>
    -2 arreglos (original y modificado)
    -condicion if
    -funcion para agregar el nuevo dato a cada elemento
    -metodo map()
*/

///Arreglo de pacientes original

let pacientesConsultorio = [
    {
        nombre: "felipe",
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }
]

//Funcion para agregar el texto NEcesita atencion especial
function agregarEstadoDeSalud(paciente){
    let estado = "Saludable";

    ///Si el paciente tiene mas de 40 años
    if(paciente.edad>40){
        estado = "necesita atencion especial";
      }

      return {
        ...paciente, ///copia del paciente
        estadoSalud :estado, // para agregar un nuevo campo o variable (como la edad o el nombre)
      };
}

///Vamos a aplicar la funcion en cada elemento del arreglo con el map

let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoDeSalud);

console.log(pacientesConsultorioConEstado);