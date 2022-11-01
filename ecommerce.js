/*
Você deve criar funções para:

1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;

2. Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;

3. Buscar um produto pelo nome e retornar o id dele;
E.: Entrada = Mouse Médio
Retorno = 2

4. Exibir todos os produtos ordenados pelo id;

5. Exibir os produtos ordenados pelo preço;

6. Exibir os produtos ordenados pela avaliação;

7. Atualizar o preço de um produto, para isso deve receber o id do produto como
parâmetro e o novo valor para atualizar;
Ex.: Id = 3, Valor = 200

8. Deletar um produto, não esqueça de organizar as informações para que não fique
espaços vazios;
Por fim, utilizando as funções criadas organize a execução do seu código, faça com que o
usuário possa escolher qual função executar e quando encerrar o programa
*/

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
var index2 = 0

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

}


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

        condicao = prompt("Deseja continuar fazendo operações? s = sim e n = não")
}