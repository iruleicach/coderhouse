//Simulador interactivo

//1)Usuarix ingresa su nombre 
let nombreConsumidor = prompt("Bienvenidx! Por favor ingresá tu nombre")

//2)Declaro variables con los precios del helado 
let precioCuarto = 200;
let precioMedio = 500;
let precioKilo = 1000;
let saldoDeudor = 0;

/*)Creo función donde usuarix ingresa cantidad deseada 
(en caso de elegir un tamaño de helado inválido, debe volver a ingresar)*/

let eleccion = '';
    do {
        let pedido = prompt("Hola " + nombreConsumidor + " cuántos kilos de helado querés entre: 1/2 , 1/4 o 1?")
        
        switch (pedido) {
            case "1/2":
                eleccion = "1/2"
                alert("El medio kilo te sale $" + precioMedio)      
                break;
            case "1/4":
                eleccion = "1/4"
                alert("El cuarto kilo te sale $" + precioCuarto)  
                break;
            case "1":
                eleccion = "1"
                alert("El kilo te sale $" + precioKilo)
                break;
            default:
                alert("Estás ingresando una cantidad incorrecta. Debés elegir entre 1/2, 1/4 y 1")
                break;
            } 


    }while (eleccion == '');
    
  
//4)Calculo cuánto vuelto se le dará en función de su compra
let calcularVuelto = () => {
        if(eleccion == "1"){
            saldoDeudor = precioKilo
        }else if(eleccion == "1/4"){
            saldoDeudor = precioCuarto
        }else{
            saldoDeudor = precioMedio
        }
        
        let abono = prompt("Con cuánto deseás abonar?");
        if (abono < saldoDeudor) {
            alert("No te alcanza el dinero")
        } else {
            let vuelto = (abono - saldoDeudor);
            alert("Tu vuelto es: " + vuelto);
        }
    } 

    calcularVuelto(); 