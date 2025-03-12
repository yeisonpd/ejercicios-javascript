// escribe la función bmi acá
const bmi = (peso, altura)=>{
    let bmi = peso / (altura**2);

    if(bmi < 18.5){
        return "Bajo de peso";
    }else if( bmi > 18.5 && bmi < 24.0){
        return "Normal";
    }else if(bmi > 25 && bmi < 29.9){
        return "Sobrepeso";
    }else if(bmi > 30){
        return "Obeso";
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"