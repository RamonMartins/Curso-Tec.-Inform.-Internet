async function buscar(){
    let buscaParametro = new URLSearchParams(window.location.search)
    let parametroId = buscaParametro.get("id")
    
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()

    let indice = null
    for(let x in produtos){
        if(produtos[x].id == parametroId){
            indice = x
        }
    }

    document.title = produtos[indice].nome

    document.body.innerHTML += `
        <h1>${produtos[indice].nome}</h1>
        <img src="${produtos[indice].img}" height="300" width="auto" style="border: 1px solid #000; border-radius: 10px">
        <p>${produtos[indice].descricao}</p>
        <div class="grupoValores">
            <span class="comDesconto">R$ ${(produtos[indice].valorComDesconto).toFixed(2).replace(".", ",")}</span>
            <span class="semDesconto">R$ ${(produtos[indice].valorSemDesconto).toFixed(2).replace(".", ",")}</span>
        </div>
    `
}

buscar()