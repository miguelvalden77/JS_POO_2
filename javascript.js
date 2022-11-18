
// crear clases con -> class

class persona {

    constructor(nombre, apellidos, edad){
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.edad = edad
    }

    getNombre(){
        return this.nombre
    }

    getApellidos(){
        return this.apellidos
    }
}

class perro {

    constructor(nombre, edad, dueño){
        this.nombre = nombre,
        this.edad = edad,
        this.dueño = dueño
    }

    getNombre(){
        return this.nombre
    }

    setNombre(nombre){
        this.nombre = nombre
    }

}

let saludar = (nombre)=>{
    console.log(`hola ${nombre}`)
}

let perro_1 = new perro("Illita", 2, "mama")
console.log(perro_1.getNombre())


let nombre = "Ternasco"
perro_1.setNombre(nombre)


// crear un objeto con la clase indicada

let Miguel = new persona("Miguel", "Martín", 22)
console.log(Miguel)


// extends -> extensión de una clase
    // super

class alumno extends persona{
    constructor(clase, nota_media, nombre, apellidos, edad){
        super(nombre, apellidos, edad)

        this.nota_media = nota_media,
        this.clase = clase
    }
}

let Lucia = new alumno("2ºB", 8.4, "Lucia", "Martín", 18)
console.log(Lucia.getApellidos())



