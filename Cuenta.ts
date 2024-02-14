
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
