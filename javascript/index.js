let precio = 2000
let descuento = 1.2
let nroCanchas = 5

console.log("Bienvenido 👋, actualmente contamos con 5 canchas de padel. A continuación los precios de los turnos:")
for(let i = 1; i <= nroCanchas; i++){
    console.log("El turno en la cancha " + i + " cuesta " + precio + " pesos.")
}
console.log("Si venis a jugar 3 días o mas tenes un 20% de descuento")


function turnosDisponibles(codigoDia){
    switch(parseInt(codigoDia)){
        case 1:
            alert("Lunes turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        case 2:
            alert("Martes turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        case 3:
            alert("Miercoles turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        case 4:
            alert("Jueves turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        case 5:
            alert("Viernes turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        case 6:
            alert("Sabado turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        case 7:
            alert("Domingo turnos disponibles: 13:00 hs, 15:00hs, 17:00hs y 19:00hs")
            break;
        default:
            alert("No entendimos tu seleccion, por favor ingrese un codigo asociado al día que quiere reservar.") 
        turno()           
    }
}

function turno(){
    let turno = confirm("¿Desea reservar un turno de padel?")
    if(turno){
        let codigoDia = parseInt(prompt("Ingrese el codigo del día para reservar un turno"))
        if (codigoDia){
            turnosDisponibles(codigoDia)
        }
    } 
}

function reservarTurno(precio, descuento){ 
    alert("Bienvenido 👋 a continuación turnos de padel: ")
    let dias = parseInt(prompt("¿Cuantos días vas a venir a jugar en la semana?"))
    if(dias <= 7 && dias >= 3){
        let promocion = (precio * dias) / descuento 
        alert("Si venis " + dias + " dias tu total a pagar es: " + promocion.toFixed(2) + " pesos")
        turno()
    }else{
        confirm("Si venis mas de 3 días en la semana, tenes un 20% de descuento.")
        return turno()    
    }
    }