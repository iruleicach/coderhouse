//Simulador interactivo: heladería

//1)Usuarix ingresa su nombre 
let nombreConsumidor = prompt("Bienvenidx! Por favor ingresá tu nombre")

//2)Declaro variables con los precios del helado 
let precioCuarto = 200;
let precioMedio = 500;
let precioKilo = 1000;
let saldoDeudor = 0;

//3)Creo un array que contiene los sabores y sus descripciones
let saboresDescripcion = [
    {gusto: "Chocolate del alpi",
    descripcion: "Chocolate 100% cacao con pedacitos de choco blanco"},
    {gusto: "Crema de la casa",
    descripcion: "Chantilly con licor"},
    {gusto: "Vainilla",
    descripcion: "Receta original de vanilla con nueces"},
    {gusto: "Suspiro de ddl",
    descripcion: "Mousse de dulce de lehce con galletitas"},
    {gusto: "KIDS",
    descripcion: "Crema americana con rocklets"},
    {gusto: "Frambuesa granizada",
    descripcion: "Frambuesa al agua con pedazos de chocolate"},
];

//Creo la funcionalidad de mi heladería el usuarix puede ver gustos - agregar gustos - comprar helado - salir

let heladeria = ""

while (heladeria != "SALIR"){
    heladeria = prompt("Hola " + nombreConsumidor + " ingresá qué preferis entre: VER AGREGAR COMPRAR O SALIR")
    switch (heladeria){
        case "VER":
            verSabores()
            break;
        case "COMPRAR":
            eleccionTamanio();
            break;
        case "AGREGAR":
            agregarHelado();
            break;
        case "SALIR":
            alert("Gracias por visitarnos!")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}

//4) El usuarix puede elegir ver o no los sabores de la heladería
function verSabores(){
        saboresDescripcion.forEach(sabor => {
        alert(sabor.gusto + "  -  Descripción del gusto: " + sabor.descripcion)
        });
}


//5) Creo función donde usuarix ingresa cantidad deseada
function eleccionTamanio(){

    let pedido = prompt("Hola " + nombreConsumidor + " cuántos kilos de helado querés entre: 1/2 , 1/4 o 1?")

    if(pedido == "1/2"){
        alert("El medio kilo te sale $" + precioMedio)
        alert("Muchas gracias por tu compra")    
    }else if(pedido == "1/4"){
        alert("El cuarto kilo te sale $" + precioCuarto)
        alert("Muchas gracias por tu compra")       
    }else if(pedido == "1"){
        alert("El kilo te sale $" + precioKilo)
        alert("Muchas gracias por tu compra")      
    }else{
        alert("Estás ingresando una cantidad incorrecta. Por favor volvé a elegir una opción")
    } 

}


/*//7) Creo la función agregarHelado() 
- Guardo el gusto y descripción del helado del usuario. 
- Corroboro si el gusto existe entre mis sabores
- Creo la funcion verSaboresActualizados() para que el usuarix pueda ver cómo se agregó su sabor
*/

function agregarHelado() {
            
    let saborNuevo = prompt("Elegí un nombre para tu nuevo sabor");
    let descripcionNueva = prompt("Describí brevemente el sabor");

    let corroboroGusto = saboresDescripcion.some((helado)=>{
        return helado.gusto == saborNuevo
    });


    if(corroboroGusto){
        alert("Ese gusto ya lo tenemos :)")
    } else {                
        const saborUsuarix = {
            gusto: saborNuevo,
            descripcion: descripcionNueva,
        }

        function verSaboresActualizados(){
            let verGustoNuevo = prompt("Querés ver si tu gusto fue correctamente agregado? responde SI o NO");
            if(verGustoNuevo == "SI"){
            verSabores();
            }else{
            alert("Hasta la próxima visita!")
            };
        }

        saboresDescripcion.push(saborUsuarix); 
        verSaboresActualizados()
    }
}


/*     let incluirGusto = prompt("Querés agregar un sabor a la heladaría? Responde SI o NO")
    if (incluirGusto == "SI"){
       agregarHelado();
    }else if(incluirGusto == "NO"){
        alert("Qué pena! Hasta la próxima visita!")
    }else{
        alert("no pudimos entenderte! Hasta la próxima visita!")
    } */