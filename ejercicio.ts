class Persona {
    nombre: String
    edad: number
    telefono: number
    direccion: string
    ciudad: string

    constructor(nombre: string, edad: number, telefono: number, direccion: string, ciudad: string) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    }

    //Get
    getNombre() {
        return this.nombre
    }
    getEdad() {
        return this.edad
    }
    getTelefono() {
        return this.telefono
    }
    getDireccion() {
        return this.direccion
    }
    getCiudad() {
        return this.ciudad
    }
    //set
    setNombre(name: string) {
        this.nombre = name
    }
    setEdad(edad: number) {
        this.edad = edad
    }
    setTelefono(telefo: number) {
        this.telefono = telefo
    }
    setDireccion(direccion: string) {
        this.direccion = direccion
    }
    setCiudad(city: string) {
        return this.ciudad = city
    }

    //METODOS

}
function mostrarDatos(personas: Persona[]) {
    for (let i = 0; i < personas.length; i++) {
        console.log(personas[i].nombre, personas[i].edad, personas[i].telefono, personas[i].direccion, personas[i].ciudad)
    }
}
function mayorOmenor(personass: Persona[]) {
    for (let i = 0; i < personass.length; i++) {
        if (personas[i].edad > 18) {
            console.log("ES MAYOR: "+personass[i].edad,personass[i].nombre)
        } else {
            console.log("Es MENOR de edad: "+personass[i].nombre)
        }
    }
}
let persona1 = new Persona("Manuel", 18, 6975754, "Calle 26N 58", "Popayan")
let persona2 = new Persona("Maryuri", 18, 94667796, "Calle 26N 5242", "Bolivar Cauca")
let persona3 = new Persona("Carlos", 22, 54601575754, "carrera 10 #56", "Popayan")
let persona4 = new Persona("Miranda", 30, 976468754, "Calle 26N 60", "Cali")
let persona5 = new Persona("Nicolas", 45, 97531046, "Calle 27N 30", "Popayan")

let personas: Persona[] = [persona1, persona2, persona3, persona4, persona5]
let personass: Persona[] = [persona1, persona2, persona3, persona4, persona5]


console.log("METODOS")
console.log("MOSTRAR DATOS")
console.log("Todas las personas")
console.log(mostrarDatos(personas))
console.log(mayorOmenor(personas))
// console.log(` Datos de la perosna ${persona1.getNombre() , persona1.getEdad(),persona1.getTelefono