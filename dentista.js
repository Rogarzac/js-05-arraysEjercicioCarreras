


/////crear un array para almacenar mis pacientes

//la variable pacientes esta declarada e indicalizada (tiene un nombre, y tiene un valor, a pesar de que si arreglo este vacio)

//Los indicies del arreglo estan undefined, porque no hay elementos pero si hay espacios disponibles

let pacientes = []; //pacientes = definido

///Funcion para registrar un nuevo paciente
function registrarPaciente(nombre, edad){
    ///Crear un array dentro de otro array
    let paciente ={
        nombre,
        edad,
        citas : []
        };

        ////Agregar pacientes al array
        /////paso 3 ya que tengo el par de datos, le hago un push a mi array para guardar al paciente
        pacientes.push(paciente);
        return paciente;

}

///Funcion para registrar citas de un paciente
///Cuando ejecuto mi funcion, necesito un paciente, una hora y una fecha para registrar la cita
function registrarCita (paciente, fecha, hora){
    ///Cuando tenga estos datos, buscare dentro del paciente del apartado citas para hacerle un push ahi

    paciente.citas.push(
        {
            fecha,
            hora
        }
    );
}


// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente){
console.log("Nombre del paciente: " + paciente.nombre);
console.log("Edad del paciente: " + paciente.edad);
console.log("Citas registradas: "  );



///forEacg para imprimir citas
paciente.citas.forEach((cita, indice) =>{
    console.log("indice: "+  indice  + "fecha: " + cita.fecha + "hora: " + cita.hora)});
}

/* funcionamiento del forEach anterior
-definir una variable temporal llamada cita y otra variable temporal llamada indice
-

*/



////// Funcion para mostrar la informacion del paciente
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr.Simi", 50);

///Registrar la cita de un paciente desde la invocacion de la funcion registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");

////Mostrar informacion del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);





/* ForEach
Es un metodo de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una funcion establecida.

Generalmente el for each se utiliza para imprimir la informacion del arreglo

sintaxis de ForEach
array.forEach(function(elemento, indice, arreglo))

    -elemento: el elemento actual del arreglo que se esta procesando
    -indice: la posicion del elemento actual en el array
    -arreglo: el array que se esta recorriendo

    Ejemplo del supermercado
    -elemento: producto que compre y que esta en el carrito
    -indicie: la posicion de ese producto}
    -arreglo: carrito del super
*/

let carritoSuper = ["manzanas", "papitas", "huevo", "jabon de trastes", "pan"];

///Oye Js, para cada elemnto del tipo "producto" que tenga una posicion dentro del arreglo llmado "carritoSuper", vas a hacer algo
carritoSuper.forEach(function (producto, indice)
{
    console.log("Producto: " + producto + " con la posicion: " + indice)
}
    );
