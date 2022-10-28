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
var avalicao = []
var id2 = []
var nome2 = []
var preco2 = []
var avalicao2 = []
var indexgeral = 0
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


function Cadastrar(){
    alert("Aqui será o local onde você irá cadastrar o seu produto. Vamos começar!")
    id[indexgeral] = numeroid
    nome[indexgeral] = prompt("Informe o nome do produto.")
    preco[indexgeral] = prompt("Informe o preço do produto.")
    avalicao[indexgeral] = prompt("Informe a avaliação do produto (1 a 5 estrelas).")
    numeroid++
    indexgeral++
}

function BuscarId(){
    buscarid = prompt("Qual o id desejado para realizar a busca?")
    alert("ID: " + id[buscarid - 1] + "\n" + "Nome: " + nome[buscarid - 1] + "\n" + "Preço: " + preco[buscarid - 1] + "\n" + "Avaliação: " + avalicao[buscarid - 1])
}

function BuscarNome(){
    buscarnome = prompt("Qual o nome desejado para realizar a busca?")
    for (let index = 0; index < indexgeral; index++) {
        if(buscarnome ==  nome[index]){
            idnome = index + 1
        }       
    }

    alert("ID do produto digitado: " + idnome + "\n" + "Produto digitado: " + buscarnome)
}

function ExibirProdutosId(){
    for (let index2 = 0; index2 < indexgeral; index2++) {
        alert("ID: " + id[index2] + "\n" + "Nome: " + nome[index2] + "\n" + "Preço: " + preco[index2] + "\n" + "Avaliação: " + avalicao[index2])
    }
}

function ExibirProdutosPreco(){
    id2 = id
    nome2 = nome
    preco2 = preco
    avalicao2 = avalicao
  for(let index = 0; index < indexgeral; index++) {
    for (let index2 = 0; index2 < indexgeral; index2++) {
        if(preco2[index] > preco2[index2]){
            precoSuporte[index2] = preco2[index2]
            nomeSuporte[index2] = nome2[index2]
            idSuporte[index2] = id2[index2]
            avaliacaoSuporte[index2] = avalicao2[index2]

            preco2[index2] = preco2[index]
            nome2[index2] = nome2[index]
            id2[index2] = id2[index]
            avalicao2[index2] = avalicao2[index]

            preco2[index] = precoSuporte[index2]
            nome2[index] = nomeSuporte[index2]
            id2[index] = idSuporte[index2]
            avalicao2[index] = avaliacaoSuporte[index2]
        }
    }
  }


  for (let index2 = 0; index2 < indexgeral; index2++) {
    alert("ID: " + id2[index2] + "\n" + "Nome: " + nome2[index2] + "\n" + "Preço: " + preco2[index2] + "\n" + "Avaliação: " + avalicao2[index2])    
    }

}


while(condicao == "s"){
    desejar = parseInt(prompt("O que você deseja fazer?" + "\n" + "1 = Cadastrar produto." + "\n" + "2 = Buscar produto por id." + "\n" + "3 = Buscar produto por nome." + "\n" + "4 = Exibir produto ordenado por Id." + "\n" + "5 = Exibir produto ordenado por preço." + "\n" + "6 = Exibir prodruto ordenado por avaliação."))
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
}