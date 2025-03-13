// escribe tu respuesta acá
const likes = (likes)=>{
    if(likes < 1000){
        return likes.toString()
    }else if(likes < 1000000){
        return Math.floor(likes/1000) + "K";
    }else if(likes < 1000000000){
        return Math.floor(likes/1000000) + "M";
    }
}
// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25822444)) // "25M"