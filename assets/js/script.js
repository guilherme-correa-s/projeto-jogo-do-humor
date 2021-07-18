const elementoBotao = document.querySelector('#botao-humor')
const elementoImg = document.querySelector('#img');
const elementoHumor = document.querySelector('#humor')

elementoBotao.addEventListener("click", () => {
    if (elementoBotao.value=="img-1") {
        elementoBotao.value = "img-2"
        elementoImg.src = "./assets/img/empolgado.png"
        elementoHumor.innerText = "Empolgado!"
    }else if (elementoBotao.value=="img-2") {
        elementoBotao.value = "img-3"
        elementoImg.src = "./assets/img/raiva.png"
        elementoHumor.innerText = "Nervoso!"       
    }else if (elementoBotao.value=="img-3") {
        elementoBotao.value = "img-4"
        elementoImg.src = "./assets/img/gear-2.png"
        elementoHumor.innerText = "Gear 2!!!"       
    }else {
        elementoBotao.value = "img-1"
        elementoImg.src = "./assets/img/feliz.png"
        elementoHumor.innerText = "Feliz!"          
    }
})
