function verificar(){
var data = new Date
var ano = data.getFullYear()
var fano = document.getElementById('txtano') 
var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
      
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            
            if (idade >= 0 && idade < 12){
                    //criança
                    img.setAttribute('src' , 'bebemenino.jpg')
            }else if(idade < 24) {
                    //adolescente
                    img.setAttribute('src' , 'meninoadolescente.jpg')
            }else if (idade < 50){
                    //adulto
                    img.setAttribute('src' , 'homemadulto.jpg')
            }else{
                    //idoso
                    img.setAttribute('src' , 'idosohomem.jpg')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >= 0 && idade < 12){
                    //criança
                    img.setAttribute('src' , 'bebemenina.jpg')
            }else if(idade < 24) {
                    //adolescente
                    img.setAttribute('src' , 'meninaadolescente.jpg')
            }else if (idade < 50){
                    //adulto
                    img.setAttribute('src' , 'mulheradulta.jpg')
            }else{
                    //idoso
                    img.setAttribute('src' , 'idosamulher.jpg')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectei ${genero}, com ${idade} anos.`
     
        res.appendChild(img)
    }

}