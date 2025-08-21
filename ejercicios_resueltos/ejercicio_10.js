// escribe tu respuesta acá
const numeroDeCaracteres = (string, caracter)=>{
    let cont = 0;

    for(let i=0; i <= string.length; i++){
        if(string[i] == caracter){
            cont++;
        }
    }

    return cont;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4