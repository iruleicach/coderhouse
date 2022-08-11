//Simulador interactivo: heladería

//1)Usuarix ingresa su nombre 
let nombreConsumidor = prompt("Bienvenidx! Por favor ingresá tu nombre")

//2)Declaro variables con los precios del helado 


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

//4)
let preciosHelados = [{
    tamanio: "1/4",
    precio: 200},
    {tamanio: "1/2",
    precio: 500},
    {tamanio: "1",
    precio: 1000}
];

//4) Creo la funcionalidad de mi heladería el usuarix puede ver gustos - agregar gustos - comprar helado - salir

let heladeria = ""

while (heladeria != "SALIR"){
    heladeria = prompt("Hola " + nombreConsumidor + " ingresá qué preferis entre: VER - AGREGAR - PRECIOS - COMPRAR - SALIR")
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
        case "PRECIOS":
            verPrecios();
            break;
        case "SALIR":
            alert("Gracias por visitarnos!")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}

//5) El usuarix puede elegir ver o no los sabores de la heladería
function verSabores(){
        saboresDescripcion.forEach(sabor => {
        alert(sabor.gusto + "  -  Descripción del gusto: " + sabor.descripcion)
        });
}

//El usaurio puede ver los precios
function verPrecios(){
    preciosHelados.forEach(helado => {
    alert("El helado de " + helado.tamanio + " sale " + helado.precio)
    });
}

//6) Creo función donde usuarix ingresa cantidad de helado deseada
function eleccionTamanio(){
    
    let pedido = prompt("Hola " + nombreConsumidor + " cuántos kilos de helado querés entre: 1/2 , 1/4 o 1?")
    let abono = prompt("Con cuánto deseas abonar?")
    let saldoDeudor = "";

    if(pedido == "1/2"){
        let saldoDeudor = 500;
        let vuelto = abono - saldoDeudor;
        if(vuelto >= 0){
            alert(`Tu vuelto es: ${abono - saldoDeudor}`)
            alert("Muchas gracias por tu compra")    
        }else{
            alert("No te alcanza el dinero")
        } 
    }else if(pedido == "1/4"){
        let saldoDeudor = 200;
        let vuelto = abono - saldoDeudor
        if(vuelto >= 0){
            alert(`Tu vuelto es: ${abono - saldoDeudor}`)
            alert("Muchas gracias por tu compra")    
        }else{
            alert("No te alcanza el dinero")
        } 
    }else if(pedido == "1"){
        let saldoDeudor = 1000;
        let vuelto = abono - saldoDeudor
        if(vuelto >= 0){
            alert(`Tu vuelto es: ${abono - saldoDeudor}`)
            alert("Muchas gracias por tu compra")    
        }else{
            alert("No te alcanza el dinero")
        } 
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
        alert("Ya teníamos ese sabor :)")
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