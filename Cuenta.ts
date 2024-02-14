
console.log("CLASE CUENTA")
class Cuenta {
    titular : String
    valorActual : number

        //constructor
    constructor (titular: String, valorActual : number){
        this.titular = titular
        this.valorActual = valorActual
    }
    //GETS
    getTitular(){
        return this.titular
    }
    getValorActual(){
        return this.valorActual
    }
    //SETS
    setTitular(titu: String){
        return this.titular = titu
    }
    setValorActual(valu : number){
        return this.valorActual = valu
    }
}


function muestraDatos(datos: Cuenta[]) { 
    for (let i = 0; i < datos.length; i++) {
        console.log(`Datos: ${datos[i].titular} ${datos[i].valorActual}`)
     }
}
function Ingresar(datos: Cuenta[]) { 
    for (let i = 0; i < datos.length; i++) { 
        if (datos[i].valorActual < 0) {
            console.log("No es VALIDO")
        } else { 
           console.log(`SUMA DE DATOS : ${datos[i].valorActual + datos[i].valorActual}`) 
        }
    }

}
function Retirar(datos: Cuenta[]) {
    
}

let Persona1 = new Cuenta("Maryuri Lopez", -565)
let Persona2 = new Cuenta("Angie Lopez", 8.000)
let datos: Cuenta[] = [Persona1, Persona2]

console.log("MUESTRA DE DATOS")
console.log(muestraDatos(datos))

console.log(Ingresar(datos))

