/*1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, 
muestra por consola: 
"Acceso permitido a la App". 
Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
 */

function digital() {
    let edad = parseInt(prompt("ingresar edad:"));
    if (edad >= 18) {
        alert("Acceso permitido a la app")
    }
    else if (edad <= 0 && edad >= 120) {
        alert("Ingrese una edad valida:")
    } else {
        alert("Acceso denegado: necesita ser mayor de edad.")
    }
}

____________________________________________________________________________

/*2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
 */


function nombre(){
    let nombre = parseInt(prompt("Ingresar nombre:"));
    let usuarios = [];

    if (nombre.length > 0){
        usuarios.push(nombre);
        alert(usuarios)
    } else {
        alert("error: el nombre no puede estar en blanco");
    }
}