const contador = document.getElementById("contador");
let contador2 = 0
const incremento = document.getElementById("incremento");
const decremento = document.getElementById(id="decremento");
 

 
incremento.addEventListener("click", function(){
    contador2 +=1;
    contador.textContent = contador2;
    cambiarColor();
})
decremento.addEventListener("click", function(){
    contador2 -=1;
    contador.textContent = contador2;

})

function cambiarColor(){
     if (contador2 >=10){
     contador.style.color = "red"
    }
}

