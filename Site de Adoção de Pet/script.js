let contagem = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaIMG();

}, 5000); //define o tempo que cada slide terá. 5000 é igual a 5 segundos.

function proximaIMG(){
    contagem++

    if(contagem > 5){
        contagem = 1;

    }
    document.getElementById('radio' + contagem).checked = true

}


