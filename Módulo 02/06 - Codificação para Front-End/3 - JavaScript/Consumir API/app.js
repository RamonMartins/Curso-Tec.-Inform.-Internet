let endpoint = 'https://raw.githubusercontent.com/RamonMartins/Curso-Tec.-Inform.-Internet/master/M%C3%B3dulo%2002/06%20-%20Codifica%C3%A7%C3%A3o%20para%20Front-End/3%20-%20JavaScript/Consumir%20API/produtos.json'

let produtos = []
let inserirProduto = document.getElementById('produtos__lista')
buscarProdutos()

async function buscarProdutos() {           // Cria uma função assíncrona(pausa a execução até o comando concluir por completo e receber uma resposta)
    let resposta = await fetch(endpoint)    // await solicita a pausa da execução ate receber a resposta
    produtos = await resposta.json()
    console.log(produtos[0].nome)
    console.log("oi")
    exibirProdutos(produtos)
}

function exibirProdutos(produtos) {
    produtos.forEach(produto => {
        console.log(produto.nome)

        inserirProduto.innerHTML += `
        <li class="produtos__item">
            <div class="produtos__content">
                <img src="${produto.img}" alt="Imagem de celular">
                <div class="produtos__informacoes">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}
                    </p>
                    <h4>R$ ${produto.valorComDesconto}<s>R$ ${produto.valorSemDesconto}</s></h4>
                    <p>${produto.tipoEntrega}</p>
                </div>
            </div>
        </li>
        `

    });
}