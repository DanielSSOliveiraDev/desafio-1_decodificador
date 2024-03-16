const caixaTexto = document.getElementById ("caixaTexto");
console.log (caixaTexto);
const botaoCriptografar = document.getElementById ("botaoCriptografar");
const botaoDescriptografar = document.getElementById ("botaoDescriptografar");
const ladoDireitoTraducao = document.getElementById ("ladoDireitoTraducao");
const botaoCopiar = document.getElementById ("botaoCopiar");
const ladoDireitoAviso = document.getElementById ("ladoDireitoAviso")
const ladoDireito = document.getElementById ("ladoDireito");

const replace = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
function validacaoCaracteresEspeciais (texto) {
    const regexParaBuscaDeEspeciais = /[^\w\s]/;
    const contemEspeciais = regexParaBuscaDeEspeciais.test(texto)

    return contemEspeciais;
}


const criptografar = () => {
      texto = caixaTexto.value.toLowerCase()
      
        for ( let i = 0; i < replace.length; i++){
            if (texto.includes(replace[i][0])){
            texto = texto.replaceAll(replace[i][0], replace[i][1]);
            };
        };
        return texto;
    }
const descriptografar = () => {
    texto = caixaTexto.value.toLowerCase()
        for ( let i = 0; i <replace.length; i++){
            if (texto.includes(replace[i][1])){
                texto = texto.replaceAll(replace[i][1], replace[i][0]);
            };
        };
        return texto;
}
//const = função call back
const traducao = (novoValor) => {
    if (validacaoCaracteresEspeciais(novoValor)) {
        return alert ("Texto incorreto");
        }
    ladoDireitoTraducao.innerHTML = novoValor;
    boneco.style.display = "none";
    ladoDireitoAviso.style.display = "none";
    botaoCopiar.style.display = "block";
    ladoDireito.classList.add("traduzindo");
    ladoDireitoTraducao.classList.add("traduzindo");
    caixaTexto.value = "";
    
}

botaoCriptografar.addEventListener("click", () => traducao(criptografar()));


botaoDescriptografar.addEventListener("click", () => traducao (descriptografar()));


botaoCopiar.addEventListener("click", () => {

    navigator.clipboard.writeText(ladoDireitoTraducao.innerText).then( () => alert("Texto copiado com sucesso!")); 
    

})


const test = document.querySelectorAll("button");
console.log(test);



