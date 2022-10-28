/*
Você deve criar funções para:

1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
Ex.:

2. Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;
Ex.: Entrada = 3

3. Buscar um produto pelo nome e retornar o id dele;
E.: Entrada = Mouse Médio
Retorno = 2

4. Exibir todos os produtos ordenados pelo id;

5. Exibir os produtos ordenador pelo preço;
Ex.:

6. Exibir os produtos pela ordem de avaliação;
Ex.:

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
var indexgeral = 0
var numeroid = 1

function Cadastrar(){
    alert("Aqui será o local onde você irá cadastrar o seu produto. Vamos começar!")
    id[indexgeral] = numeroid
    nome[indexgeral] = prompt("Informe o nome do produto.")
    preco[indexgeral] = prompt("Informe o nome do produto.")
    avalicao[indexgeral] = prompt("Informe o nome do produto.")


}