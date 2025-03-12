// escribe tu respuesta acá
const imprimirArreglo = (...args)=>{
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}
// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo