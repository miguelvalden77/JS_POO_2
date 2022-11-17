
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
console.log(Lucia)



