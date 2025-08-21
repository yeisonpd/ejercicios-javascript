// escribe tu respuesta acá
const numeroDeAes =(cadena)=>{
    let cont = 0;

    for(let i=0; i <= cadena.length; i++){

        if(cadena[i] == "a"){
            cont ++;
        }
    }

    return cont;
}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0