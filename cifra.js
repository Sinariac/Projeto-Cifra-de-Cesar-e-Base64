var entrada = document.getElementById('entra')
var saida = document.getElementById('saida')
var chave = document.getElementById('chave')
var radioCodificar = document.getElementById('radioCodificar')
var cifra = document.getElementById('cifra')
var botao = document.getElementById('botao')

function codifica(arr, chave){

    return arr.map((s)=>{
        let cripto = s.charCodeAt();
        if(cripto >= 65 && cripto <= 90){
            return String.fromCharCode(((cripto - 65 + chave)%26) + 65)
        }else if(cripto >= 97 && cripto <= 122){
            return String.fromCharCode(((cripto - 97 + chave)%26) +97)
        }else{
            return s
        }
    }).join('')
}
function decodifica(arr, chave){
    return arr.map((palavra)=>{
        let cripto = palavra.charCodeAt();
        if(cripto >= 65 && cripto <= 90){
            return (cripto -65 -chave < 0)? String.fromCharCode(((cripto - 65 - chave +26 )%26)+65):String.fromCharCode(((cripto - 65 - chave )%26)+65)
        }else if(cripto >= 97 && cripto <= 122){
            return String.fromCharCode(((cripto -97 - chave +26)%26)+97)
        }else{
            return palavra
        }
    }).join('')
}
botao.addEventListener('click', (e)=>{ 
    e.preventDefault ()
    var entradaValor = entrada.value.split('')
    var valorChave = parseInt(chave.value)
    if (cifra.value == "cifraCesar") {
        if(radioCodificar.checked){
            saida.value = codifica(entradaValor, valorChave)
        }else {
            saida.value = decodifica(entradaValor, valorChave)
        }
    } else {
    var entradaValorBase64 = entrada.value
            if(radioCodificar.checked){
            saida.value = btoa(entradaValorBase64)
        }else {
            saida.value = atob(entradaValorBase64)
        }
    }
})

var decide = document.getElementById('decide')
decide.addEventListener('change', ()=>{
    if(decide.value == 'escolheCifra'){
        cifra.style.display = 'flex'
        base.style.display = 'none'
    }else{
        cifra.style.display = 'none'
        base.style.display = 'flex'
    }
})