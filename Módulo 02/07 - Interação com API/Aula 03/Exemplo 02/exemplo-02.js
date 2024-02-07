
async function procurar(){
    let resposta = await fetch("mensagem.txt")
    let convertido = await resposta.text()
    
    console.log(convertido)
    alert(convertido)
}

procurar()