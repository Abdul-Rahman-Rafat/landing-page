let coverImg = document.querySelector(".coverImg") ;
let contain = document.querySelector(".container") ;


function phones(phone){
    console.log(phone)
    coverImg.src=phone;
}

function colors(color){
    console.log(color)
    contain.style.background= color;
}