// escribe tu respuesta acá
const multiplicarArreglo = (array)=>{
    let multiplicaion = 1;

    for(let i=0; i< array.length; i++){
        multiplicaion *= array[i];
    }

    return multiplicaion;
}
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1