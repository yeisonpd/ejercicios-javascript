// escribe tu respuesta acá
const sumarRango = (num1, num2)=>{
    let suma = 0;

    for(let i=num1; i <= num2; i++){
        if(num1 == num2){
            return 0;
        }else{
            suma += i;
        }
    }

    return suma;
}

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0