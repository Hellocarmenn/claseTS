console.log("Hola mundo");
console.log(2 + 3);
console.log("carmen");

//Tipado implicito 
let estaActivo = true;//bolean
let nombre = "Carmen" //string 
let edad = 18 //number
let frutas1 = ["Manzana", "Naranja","Durazno"]

//Tipado explicito 
let estadoActivo2 : boolean = false;//bolean
let nombre2: string = "Gohan";
let edad2 :number = 30;
let frutas2 : string[]= ["Manzana","Durazno","Kiwi"];
let frutasNumeros : (string | number)[] = ["Hola",12];

frutasNumeros [0]= 23;
let myTupla: [number,string]= [1,"Maria"];
let myTupla2:[number,"Goku" | "Vegeta"] = [1,"Goku"];
let myTupla3:[number | undefined,"Goku" | "Vegeta"] = [undefined,"Goku"];

let cualquierCosa :any = true;
cualquierCosa = 1;
cualquierCosa = "Hola mundo";

//enum:enumeracion
enum Volumen{
    Bajo = 10,
    Medio = 50, 
    Alto = 100
}

enum UserRoles{
    Admin = "administrador",
    Seller = "vendedor",
}
let volumenActual :Volumen = Volumen.Medio;
console.log("El valor actual es: " + volumenActual);

//tipar objetos
interface Usuario{
    nombre:string;
    edad: number;
    // en simbolo ? permite que ese atributo sea opcional
    //void significa que retorna un vacio a diferencia de return que siempre regresa algo
    iniciarSesion:(email:string, password:string,nickname?:string) => void
}
 let usuario: Usuario = {
    nombre:"Josue",
    edad:20,
    iniciarSesion:(email:string,password:string,nickname? :string) =>{
        console.log("Iniciando sesion...");
    },
 };


 //clases
 class Producto {
    id:number;
    precio:number;
    nombre:string;
 //contructor :crear un objeto mediante una clase
    constructor(id:number,precio:number,nombre:string){
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
    }
    cambiarPrecio(nuevoPrecio: number):void{
        this.precio = nuevoPrecio;
    }
 }

 let pcGammer = new Producto(2, 455,"Pc Gammer 16gb ram");// el resultado de usar new , es la instancia de la clase
 let tvLed = new Producto(3,434,"Tv led 42'")

 tvLed.cambiarPrecio(77);
 pcGammer.cambiarPrecio(55);

 console.log(pcGammer);

 class MyEcommerce{
    productos: Producto[]=[];
    carrito: Producto[] = [];
    agregarAlCarrito(producto:Producto){
        this.carrito.push(producto);
    }
    calcularTotal():number{
        let total = 0;
        this.carrito.forEach((p) =>{
            total += p.precio;
        });
        return total;
    }

 }

 const app = new MyEcommerce();

 app.agregarAlCarrito(pcGammer);
 app.agregarAlCarrito(tvLed);
 console.log(`El total es ${app.calcularTotal()}`);

 //Genericos

interface Paginacion<T>{
    data:T[];
    total:number;
    hayPaginaSiguiente: boolean;
    hayPaginaAnterior:boolean;
    irPaginaSig: () => void;
}

class MyPaginacion<T> implements Paginacion<T>{
    data: T[];
    total: number;
    hayPaginaSiguiente: boolean;
    hayPaginaAnterior:boolean;
    constructor(
        data: T[],
        total:number,
        hayPaginaSiguiente: boolean,
        hayPaginaAnterior:boolean,
    ){
        this.data= data;
        this.total = total;
        this.hayPaginaSiguiente = hayPaginaSiguiente;
        this.hayPaginaAnterior = hayPaginaAnterior;
    }
    irPaginaSig(): void{}
}

new MyPaginacion<Usuario>([usuario],100,true, false)


