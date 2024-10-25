"use strict";
console.log("Hola mundo");
console.log(2 + 3);
console.log("carmen");
//Tipado implicito 
let estaActivo = true; //bolean
let nombre = "Carmen"; //string 
let edad = 18; //number
let frutas1 = ["Manzana", "Naranja", "Durazno"];
//Tipado explicito 
let estadoActivo2 = false; //bolean
let nombre2 = "Gohan";
let edad2 = 30;
let frutas2 = ["Manzana", "Durazno", "Kiwi"];
let frutasNumeros = ["Hola", 12];
frutasNumeros[0] = 23;
let myTupla = [1, "Maria"];
let myTupla2 = [1, "Goku"];
let myTupla3 = [undefined, "Goku"];
let cualquierCosa = true;
cualquierCosa = 1;
cualquierCosa = "Hola mundo";
//enum:enumeracion
var Volumen;
(function (Volumen) {
    Volumen[Volumen["Bajo"] = 10] = "Bajo";
    Volumen[Volumen["Medio"] = 50] = "Medio";
    Volumen[Volumen["Alto"] = 100] = "Alto";
})(Volumen || (Volumen = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "administrador";
    UserRoles["Seller"] = "vendedor";
})(UserRoles || (UserRoles = {}));
let volumenActual = Volumen.Medio;
console.log("El valor actual es: " + volumenActual);
let usuario = {
    nombre: "Josue",
    edad: 20,
    iniciarSesion: (email, password, nickname) => {
        console.log("Iniciando sesion...");
    },
};
//clases
class Producto {
    //contructor :crear un objeto mediante una clase
    constructor(id, precio, nombre) {
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
    }
    cambiarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
}
let pcGammer = new Producto(2, 455, "Pc Gammer 16gb ram"); // el resultado de usar new , es la instancia de la clase
let tvLed = new Producto(3, 434, "Tv led 42'");
tvLed.cambiarPrecio(77);
pcGammer.cambiarPrecio(55);
console.log(pcGammer);
class MyEcommerce {
    constructor() {
        this.productos = [];
        this.carrito = [];
    }
    agregarAlCarrito(producto) {
        this.carrito.push(producto);
    }
    calcularTotal() {
        let total = 0;
        this.carrito.forEach((p) => {
            total += p.precio;
        });
        return total;
    }
}
const app = new MyEcommerce();
app.agregarAlCarrito(pcGammer);
app.agregarAlCarrito(tvLed);
console.log(`El total es ${app.calcularTotal()}`);
class MyPaginacion {
    constructor(data, total, hayPaginaSiguiente, hayPaginaAnterior) {
        this.data = data;
        this.total = total;
        this.hayPaginaSiguiente = hayPaginaSiguiente;
        this.hayPaginaAnterior = hayPaginaAnterior;
    }
    irPaginaSig() { }
}
new MyPaginacion([usuario], 100, true, false);
