console.log( "OPERACIONES")
class Operaciones {
    numero1 : number
    numero2 : number

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1
        this.numero2 = numero2
    }

    //GETS
    getNumero1 (){
        return this.numero1
    }
    getNumero2(){
        return this.numero2
    }

//SETS
    setNumero1(num1: number){
        return this.numero1 = num1
    }
    setNumero2(num2: number){
        return this.numero2 = num2
    }
    
    //  METODOS (RESTA)
    restaNumeros(){
        return this.numero1 - this.numero2
    }

}
//FUNCION DE SUMA
function sumarNumbers(nums: Operaciones[]){
    for(let i=0 ;i < nums.length;i++){
   console.log(`${nums[i].numero1} + ${nums[i].numero2} = ${nums[i].numero1 + nums[i].numero2}`) 
    }
}
//FUNCION DE MULTIPLICACION
function multiplicarNums(nums: Operaciones[]){
    for(let i=0; i<nums.length; i++){
        console.log(`${nums[i].numero1} * ${nums[i].numero2} = ${nums[i].numero1 * nums[i].numero2}`)
    }

}
//FUNCION DE DIVISION
function divisonNums(nums: Operaciones[]){
    for(let i = 0; i < nums.length; i++){
        console.log(`${nums[i].numero1} / ${nums[i].numero2} = ${nums[i].numero1 / nums[i].numero2}`)
    }
}

//OBJECTS
let Numeros1 = new Operaciones(10,30)
let Numeros2 = new Operaciones (90,841)
let Numeros3 = new Operaciones (100,85)
let Numeros4 = new Operaciones (2356,9496)
let Numeros5 = new Operaciones (4546,10)
//Resta
Numeros1.restaNumeros()
//Lleno de arrays
let nums: Operaciones[] = [Numeros1,Numeros2,Numeros3,Numeros4,Numeros5]

//Muestra suma
console.log("SUMA")
console.log(sumarNumbers(nums))
//Muestra resta
console.log("RESTA")
console.log(`${Numeros1.getNumero1()} - ${Numeros1.getNumero2()} = ${Numeros1.getNumero1() - Numeros1.getNumero2()}`)
console.log(`${Numeros2.getNumero1()} - ${Numeros2.getNumero2()} = ${Numeros2.getNumero1() - Numeros2.getNumero2()}`)
console.log(`${Numeros3.getNumero1()} - ${Numeros3.getNumero2()} = ${Numeros3.getNumero1() - Numeros3.getNumero2()}`)
console.log(`${Numeros4.getNumero1()} - ${Numeros4.getNumero2()} = ${Numeros4.getNumero1() - Numeros4.getNumero2()}`)
console.log(`${Numeros5.getNumero1()} - ${Numeros5.getNumero2()} = ${Numeros5.getNumero1() - Numeros5.getNumero2()}`)
//Muestra multiplicaion
console.log("MULTIPLICACION")
console.log(multiplicarNums(nums))
//Muestra division 
console.log("DIVISION")
console.log(divisonNums(nums))