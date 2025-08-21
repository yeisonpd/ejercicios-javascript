// escribe tu respuesta acá
const sumarArreglo = (array)=>{
    let suma = 0
    for(let i=0; i< array.length; i++){
        suma += array[i];
    }

    return suma;
}

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0