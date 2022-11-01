var id = []
var nome = []
var preco = []
var avaliacao = []
var id3 = []
var nome3 = []
var preco3 = []
var avaliacao3 = []
var indexgeral = 0
var indexsuporte = 0
var numeroid = 1
var buscarid = 0
var buscarnome = 0
var idnome = 0
var desejar = 0
var condicao = "s"
var precoSuporte = []
var idSuporte = []
var nomeSuporte = []
var avaliacaoSuporte = []
var novoPreco = 0
var novoPrecoId = 0
var idRemover = 0
var indexsup = 0
var condicaoTotal = "s"
var desejarTotal = " "
var nomeProduto = ""
var quantidadeProduto = 0 
var nomesProdutos = []
var quantidadesProdutos = [] 
var nomesProdutosSup = []
var quantidadesProdutosSup = [] 
var indexProdutosSup = 0
var indexCarrinho = 0


function Cadastrar(){
    alert("Aqui será o local onde você irá cadastrar o seu produto. Vamos começar!")
    id[indexgeral] = numeroid
    nome[indexgeral] = prompt("Informe o nome do produto.")
    preco[indexgeral] = prompt("Informe o preço do produto.")
    avaliacao[indexgeral] = prompt("Informe a avaliação do produto (1 a 5 estrelas).")
    numeroid++
    indexgeral++
}

function BuscarId(){
    for(let index = 0; index < indexgeral; index++) {
        for (let index2 = 0; index2 < indexgeral; index2++) {
            if(id[index] < id[index2]){
                precoSuporte[index2] = preco[index2]
                nomeSuporte[index2] = nome[index2]
                idSuporte[index2] = id[index2]
                avaliacaoSuporte[index2] = avaliacao[index2]
    
                preco[index2] = preco[index]
                nome[index2] = nome[index]
                id[index2] = id[index]
                avaliacao[index2] = avaliacao[index]
    
                preco[index] = precoSuporte[index2]
                nome[index] = nomeSuporte[index2]
                id[index] = idSuporte[index2]
                avaliacao[index] = avaliacaoSuporte[index2]
            }
        }
      }

    buscarid = prompt("Qual o id desejado para realizar a busca?")
    console.log("ID: " + id[buscarid - 1] + "\t" + "Nome: " + nome[buscarid - 1] + "\t" + "Preço: " + preco[buscarid - 1] + "\t" + "Avaliação: " + avaliacao[buscarid - 1])
}

function BuscarNome(){
    buscarnome = prompt("Qual o nome desejado para realizar a busca?")
    for (let index = 0; index < indexgeral; index++) {
        if(buscarnome ==  nome[index]){
            idnome = index + 1
        }       
    }

    console.log("ID do produto digitado: " + idnome + "\t" + "Produto digitado: " + buscarnome)
}

function ExibirProdutosId(){
    for(let index = 0; index < indexgeral; index++) {
        for (let index2 = 0; index2 < indexgeral; index2++) {
            if(id[index] > id[index2]){
                precoSuporte[index2] = preco[index2]
                nomeSuporte[index2] = nome[index2]
                idSuporte[index2] = id[index2]
                avaliacaoSuporte[index2] = avaliacao[index2]
    
                preco[index2] = preco[index]
                nome[index2] = nome[index]
                id[index2] = id[index]
                avaliacao[index2] = avaliacao[index]
    
                preco[index] = precoSuporte[index2]
                nome[index] = nomeSuporte[index2]
                id[index] = idSuporte[index2]
                avaliacao[index] = avaliacaoSuporte[index2]
            }
        }
      }

    for (let index2 = 0; index2 < indexgeral; index2++) {
        console.log("ID: " + id[index2] + "\t" + "Nome: " + nome[index2] + "\t" + "Preço: " + preco[index2] + "\t" + "Avaliação: " + avaliacao[index2])    
    }
    
}

function ExibirProdutosPreco(){
    id = id
    nome = nome
    preco = preco
    avaliacao = avaliacao
  for(let index = 0; index < indexgeral; index++) {
    for (let index2 = 0; index2 < indexgeral; index2++) {
        if(preco[index] > preco[index2]){
            precoSuporte[index2] = preco[index2]
            nomeSuporte[index2] = nome[index2]
            idSuporte[index2] = id[index2]
            avaliacaoSuporte[index2] = avaliacao[index2]

            preco[index2] = preco[index]
            nome[index2] = nome[index]
            id[index2] = id[index]
            avaliacao[index2] = avaliacao[index]

            preco[index] = precoSuporte[index2]
            nome[index] = nomeSuporte[index2]
            id[index] = idSuporte[index2]
            avaliacao[index] = avaliacaoSuporte[index2]
        }
    }
  }


  for (let index2 = 0; index2 < indexgeral; index2++) {
    console.log("ID: " + id[index2] + "\t" + "Nome: " + nome[index2] + "\t" + "Preço: " + preco[index2] + "\t" + "Avaliação: " + avaliacao[index2])    
    }

}


function ExibirProdutosAvaliacao(){
  for(let index = 0; index < indexgeral; index++) {
    for (let index2 = 0; index2 < indexgeral; index2++) {
        if(avaliacao[index] > avaliacao[index2]){
            precoSuporte[index2] = preco[index2]
            nomeSuporte[index2] = nome[index2]
            idSuporte[index2] = id[index2]
            avaliacaoSuporte[index2] = avaliacao[index2]

            preco[index2] = preco[index]
            nome[index2] = nome[index]
            id[index2] = id[index]
            avaliacao[index2] = avaliacao[index]

            preco[index] = precoSuporte[index2]
            nome[index] = nomeSuporte[index2]
            id[index] = idSuporte[index2]
            avaliacao[index] = avaliacaoSuporte[index2]
        }
    }
  }


  for (let index2 = 0; index2 < indexgeral; index2++) {
    console.log("ID: " + id[index2] + "\t" + "Nome: " + nome[index2] + "\t" + "Preço: " + preco[index2] + "\t" + "Avaliação: " + avaliacao[index2])    
    }

}

function AtualizarPrecoProduto(){
    novoPrecoId = parseInt(prompt("Informe o ID do produto que deseja alterar o preço."))
    novoPreco = parseInt(prompt("Informe o novo preço do produto que deseja alterar."))
    preco[novoPrecoId - 1] = novoPreco
}

function ExcluirProduto(){
    idRemover = parseInt(prompt("Insira o id do produto que deseja excluir."))
    indexsup = 0

    for (let index = 0; index < id.length; index++) {
        if(idRemover == id[index]){
            id[index] = 0
        }        
    }

    for (let index2 = 0; index2 < id.length; index2++) {
        if(id[index2] != 0){
            id3[indexsup] = id[index2]
            nome3[indexsup] = nome[index2]
            preco3[indexsup] = preco[index2]
            avaliacao3[indexsup] = avaliacao[index2]
            indexsup++
        }        
    }

    id = id3
    nome = nome3
    preco = preco3
    avaliacao = avaliacao3
    indexsup = 0
    indexgeral = indexgeral - 1

}

function SistemaDeCadastro(){
        while(condicao == "s"){
            desejar = parseInt(prompt("O que você deseja fazer?" + "\n" 
            + "1 = Cadastrar produto." + "\n" + "2 = Buscar produto por id." + "\n" 
            + "3 = Buscar produto por nome." + "\n" 
            + "4 = Exibir produto ordenado por Id." + "\n" 
            + "5 = Exibir produto ordenado por preço." + "\n" 
            + "6 = Exibir prodruto ordenado por avaliação." + "\n"
            + "7 = Atualizar preço de um produto." + "\n" 
            + "8 = Excluir um produto."))

                if(desejar == "1"){
                    Cadastrar()
                }
                if(desejar == "2"){
                    BuscarId()
                }
                if(desejar == "3"){
                    BuscarNome()
                }
                if(desejar == "4"){
                    ExibirProdutosId()
                }
                if(desejar == "5"){
                    ExibirProdutosPreco()
                }
                if(desejar == "6"){
                    ExibirProdutosAvaliacao()
                }
                if(desejar == "7"){
                    AtualizarPrecoProduto()
                }
                if(desejar == "8"){
                    ExcluirProduto()
                }

                condicao = prompt("Deseja continuar no sistema de vendas? s = sim e n = não")
        }
    } 

    function CarrinhoDeVendas(){
        while(condicao == "s"){
            desejar = parseInt(prompt("O que você deseja fazer?" + "\n" 
            + "1 = Adicionar produto no carrinho." + "\n" 
            + "2 = Excluir produto do carrinho." + "\n" 
            + "3 = Valor total dos produtos." + "\n" 
            + "4 = Listar produtos do carrinho e o valor total."))

                if(desejar == "1"){
                    nomeProduto = prompt("Informe o nome do produto que deseja adicionar ao carrinho.")
                    quantidadeProduto = parseInt(prompt("Informe a quantidade do produto que deseja adicionar ao carrinho."))
                    AdicionarProduto(nomeProduto, quantidadeProduto)
                }
                if(desejar == "2"){
                    nomeProduto = prompt("Informe o nome do produto que excluir.")
                    quantidadeProduto = parseInt(prompt("Informe a quantidade que deseja excluir."))
                    ExcluirProduto(nomeProduto, quantidadeProduto)
                }
                if(desejar == "3"){
                    InformarValorTotal()
                }
                if(desejar == "4"){
                    ListarProdutosCarrinhoValor()
                }

                condicao = prompt("Deseja continuar no Carrinho de compras? s = sim e n = não")
        }
    }

    function AdicionarProduto(nomeProduto, quantidadeProduto){
        var contador = 0
        var cont = 0

        for (let index5 = 0; index5 < nomesProdutos.length; index5++){
            if(nomeProduto == nomesProdutos[index5]){
                quantidadesProdutos[index5] = quantidadesProdutos[index5] + quantidadeProduto
                alert("Quantidade adicionada com sucesso")
                contador++
            }
        }  

        while(contador == 0){
            for (let index = 0; index < nome.length; index++) {
                if(nomeProduto == nome[index]){
                    nomesProdutos[indexCarrinho] = nomeProduto
                    quantidadesProdutos[indexCarrinho] = quantidadeProduto
                    indexCarrinho++            
                    alert("Produto cadastrado com sucesso")
                    cont++
                }
            }
            if(cont == 0){
                alert("Não existe nenhum produto com esse nome, por favor se certifique que o nome digitado está correto.")
            }
            contador++
        }

        console.log(nomesProdutos)
        console.log(quantidadesProdutos)
    }

    function ExcluirProduto(nomeProduto, quantidadeProduto){
        
        for (let index = 0; index < nomesProdutos.length; index++) {
            if(nomeProduto == nomesProdutos[index] && quantidadesProdutos[index] == quantidadeProduto){
                nomesProdutos[index] = 0
                quantidadesProdutos[index] = 0
                alert("Produto excluido com sucesso")
                for (let index2 = 0; index2 < id.length; index2++) {
                    if(nomesProdutos[index2] != 0 && quantidadesProdutos[index2] != 0){
                        nomesProdutosSup[indexProdutosSup] = nomesProdutos[index2]
                        quantidadesProdutosSup[indexProdutosSup] = quantidadesProdutos[index2]
                        indexProdutosSup++
                    }        
                }
            }   
            
            if(nomeProduto == nomesProdutos[index] && quantidadesProdutos[index] > quantidadeProduto){
                quantidadesProdutos[index] = quantidadesProdutos[index] - quantidadeProduto
            }    

            if(nomeProduto == nomesProdutos[index] && quantidadesProdutos[index] < quantidadeProduto){
                nomesProdutos[index] = 0
                quantidadesProdutos[index] = 0
                alert("Produto excluido com sucesso")
                for (let index2 = 0; index2 < id.length; index2++) {
                    if(nomesProdutos[index2] != 0){
                        nomesProdutosSup[indexProdutosSup] = nomesProdutos[index2]
                        quantidadesProdutosSup[indexProdutosSup] = quantidadesProdutos[index2]
                        indexProdutosSup++
                    }        
                }
            }  

        }

        indexProdutosSup = 0
        nomesProdutos = nomesProdutosSup
        quantidadesProdutos = quantidadesProdutosSup
    }

    function InformarValorTotal(){  
    var valorTotal = 0
        for (let index = 0; index < nomesProdutos.length; index++) {
            for (let index2 = 0; index2 < nome.length; index2++) {
                if(nomesProdutos[index] == nome[index2]){
                    valorTotal = valorTotal + (preco[index2] * quantidadesProdutos[index])
                }
            }
        }
        alert("O valor total do seu carrinho é de: R$" + valorTotal + ",00.")
    }

    function ListarProdutosCarrinhoValor(){
        var valorTotal = 0
        var precosCarrinho = []
        var indexPrecoCarrinho = 0
        for (let index = 0; index < nomesProdutos.length; index++) {
            for (let index2 = 0; index2 < nome.length; index2++) {
                if(nomesProdutos[index] == nome[index2]){
                    valorTotal = valorTotal + (preco[index2] * quantidadesProdutos[index])
                    precosCarrinho[indexPrecoCarrinho] = preco[index2]
                    indexPrecoCarrinho++
                }
            }
        }

        for (let index = 0; index < nomesProdutos.length; index++) {
            console.log("Produto: " + nomesProdutos[index] + ". Quantidade: " + quantidadesProdutos[index] + ". O valor desse produto é: " + precosCarrinho[index])            
        }
            console.log("O valor total do seu carrinho é: " + valorTotal)
    }


    while(condicaoTotal == "s"){
        desejarTotal = prompt("O que você deseja no nosso sistema?" + "\n" 
        + "1 = Sistema de cadastro" + "\n" 
        + "2 = Carrinho de compras" + "\n" 
        + "3 = Finalizar procedimentos")

        if(desejarTotal == "1"){
            SistemaDeCadastro()
            condicao = "s"
        }
        if(desejarTotal == "2"){
            CarrinhoDeVendas()
        }
        if(desejarTotal == "3"){
            condicaoTotal = "n"
        }

    }