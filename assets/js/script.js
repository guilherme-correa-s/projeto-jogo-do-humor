let click = 0;
function clickEvent(){    
    let newImagem = "";
    let imgHumor = "";
    if(click == 0){
        newImagem = "./assets/img/empolgado.png"
        imgHumor = "Empolgado."
    }else if(click == 1){
        newImagem = "./assets/img/raiva.png"
        imgHumor = " Com Raiva."
    }else {
        newImagem = "./assets/img/feliz.png";
        click = -1;
        imgHumor = "Feliz."
    }
    const img = document.getElementById("img");
    const humor = document.getElementById("humor");
    img.setAttribute('src', newImagem);
    humor.innerHTML = imgHumor;
    click++;
}