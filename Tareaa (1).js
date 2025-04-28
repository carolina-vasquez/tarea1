//Crea tres variables: una que almacene tu nombre (string), otra tu edad (number), y otra que indique si tienes mascotas (boolean). Luego imprímelas por consola.
let nombre = "Carolina";
let edad = 22;
let mascotas = true;
console.log("El nombre es:", nombre);
console.log("La edad es:", edad);
console.log("¿Tiene mascotas?", mascotas);
//Crea dos variables numéricas y muestra en consola su suma, resta, multiplicación y división.
let numero1 = 10;   
let numero2 = 5;
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
console.log("La suma es:", suma);
console.log("La resta es:", resta);
console.log("La multiplicación es:", multiplicacion);
console.log("La división es:", division);
//Crea una función que reciba un nombre como parámetro y devuelva un saludo como string.
function saludarnombre(nombre) {
    return "Hola, " + nombre;
}
console.log(saludarnombre("Carolina"));
//Crea un array con 5 frutas y recórrelo con un bucle for, mostrando cada fruta en consola.
let frutas = ["frutilla", "platano", "naranja", "uva", "manzana"];
for (let i = 0; i < frutas.length; i++) {
    console.log("La fruta es:", frutas[i]);
}
//Crea un array de 3 números, multiplícalos por 2 y guárdalos en un nuevo array usando map.
let numeros = [1, 2, 3];
const numerosMultiplicados = numeros.map(num => num * 2);
console.log("Los números multiplicados son:", numerosMultiplicados);
//Crea un array de objetos donde cada objeto tenga un nombre y una edad. Luego, muestra en consola el nombre de cada persona usando forEach.
let personas = [
    { nombre: "Carolina", edad: 10 },
    { nombre: "Barbara", edad: 15 },
    { nombre: "Patricio", edad: 17 }
];
personas.forEach(persona => {
    console.log(persona.nombre);
});
//Crea un array de números y utiliza filter para obtener los números mayores a 5.
let numerotes = [1, 2, 5, 9, 10];
let numerotesmayores5 = numerotes.filter(numerotes => numerotes > 5);
console.log("Los números mayor a 5 son los siguientes:", numerotesmayores5);
//Crea un array de números y usa reduce para obtener la suma total.
let numerosSuma = [1, 2, 3, 4, 5];
let sumaNumeros = numerosSuma.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("La suma de los números es:", sumaNumeros);
//Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. Usa await para esperar su resultado e imprimirlo.
async function obtenerMensaje() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Mensaje obtenido después de 2 segundos.";
}

async function mostrarMensaje() {
    const mensaje = await obtenerMensaje();
    console.log(mensaje);
}

mostrarMensaje();