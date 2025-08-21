// escribe tu respuesta acá
const contarRango =(num1, num2)=>{
    let cont = 0;

    for(let i=num1+1; i<num2; i++){
        cont++;
    }

    return cont;
}

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0