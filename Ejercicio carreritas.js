// Crear un arreglo con los nombres de los corredores en su posición original
/*
Primer lugar: Roberto
Segundo lugar: Andrea
Tercer lugar: Jorge
Cuarto lugar: Ramiro
Quinto lugar: Sofia
*/

let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

console.log("Posición inicial:");
console.log(corredores);
//////////////////////////////////////////
// Jorge adelanta a Roberto
let temp = corredores[0];
corredores[0] = corredores[2];
corredores[2] = temp;

console.log("Jorge adelanta a Roberto:");
console.log(corredores);
////////////////////////////////////////
// Ramiro adelanta a Jorge
temp = corredores[0];
corredores[0] = corredores[3];
corredores[3] = temp;

console.log("Ramiro adelanta a Jorge:");
corredores.splice(1, 3, "Jorge", "Andrea", "Roberto");
console.log(corredores);
//////////////////////////////////////
// Lesion de Roberto
console.log("Roberto se lesiona y sale de la carrera:");
    corredores.splice(3, 1);
console.log(corredores);

/////////////////////////////////////////////
// Andrea baja una posición
temp = corredores[3];
corredores[3] = corredores[2];
corredores[2] = temp;

console.log("Andrea baja una posición:");
console.log(corredores);
////////////////////////////////////////////
// Ramiro mantiene su lugar

console.log("Ramiro mantiene su lugar:");
console.log(corredores);

///////////////////////////////////////
// El quinto es reemplazado por Jose
corredores[4] = "Jose";

console.log("El quinto es reemplazado por Jose:");
console.log(corredores);