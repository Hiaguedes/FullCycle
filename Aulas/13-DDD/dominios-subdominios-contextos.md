# Dominios, subdominios e contextos

Quando eu comeco a olhar a complexidade do codigo vemos que temos diversos tipos de problemas que podem destruir nosso codigo, e como se estivessemos num quarto fechado e escuro apenas com uma lanterninha, eu vejo apenas oq meus olhos 

Por que de cara nao temos a visao do todo e identificamos apenas algumas partes dele, e por essas partes eu chamo apenas de subdominio 

Core Domain -> se ele nao existir entao nao faz sentido o dominio nao existir (o coracao do negocio)

Suport Domain -> Ele apoia o dominio principal, imagina um ecommerce sem um centro de distriuicao, ele e necessario apesar de nao ser o principal ele faz a operacao do dominio ser possivel

Generic Subdomain -> De forma geral ele nao tem tanto diferencial competitivo pra empresa, sao softwares auxiliares que facilmente podem ser substituidos

## Espaco do problema vs espaco da solucao

Quando estamos separando em dominios e subdominios nos estamos dividindo o problema a ser resolvido

E precisamos entender que existem espacos entre problemas e solucoes

Espaco do problema -> Visao geral do dominio e suas complexidades (separa em subdominios) quando se tem a ideia geral desse espaco se sabe qual deve ser a bucha a ser enfrentada

Espaco da solucao -> Organizar o problema dentro da solucao, pegar o dominio e suas complexidades e modelar o dominio, analise modelagem do dominio, contextos delimitados

## Contextos delimitados

Ou bounded contexts (por que e melhor pra pesquisar)

Definicao

```txt
Um contexto delimitado ele e uma divisao explicita dentro de um modelo de dominio. Uma das formas de trazer essas delimitacoes sao a partir da lingua ubiqua, e o modelo reflete a exatidao da solucao
```

Esse camarada e uma divisao explicita de um modelo q estamos modelando

Quando a linguagem comeca a mudar e por que estamos entrando em outro modelo

Por isso realco, as solucoes que sao mais simples (uu software da padaria) nao ha essa diferenca de linguagem, todos falam a mesma coisa e por isso o DDD nao e tao 

## Contexto e rei

O contexto sempre vai determinar a area da empresa que estamos, que tipo de problema estamos resolvendo e que linguagem estamos usando no contexto, todas tem significados diferentes. 

Um subdominio um ticket e venda de ingresso em outro lado da empresa um ticket pode ser suporte ao cliente, tenho uma palavra que significa duas coisas em areas diferentes e por conta dessa palavra nos estamos em contextos diferentes, obrigatoriamente

Em um sistema monolitico eu nao poderia criar a classe `Ticket` pois teria conflito nessas duas areas uashuahs

### Elementos tranversais

Por que mesmo tendo palavras iguais e significados diferentes em contextos diferentes, esses dois elementos podem conversar e sobre isso que vamos falar agora

Quando temos palavras diferentes representando a mesma coisa nos tambem estamos em contextos diferentes

O cliente em contextos diferentes podem ter tratativas diferentes em contextos diferentes e nesse caso podemos ter correlacao entre os dois dominios

- Cliente pra vendas eu posso pegar o local onde ele esta, o vendedor q atendeu, o evento que ele foi

- O cliente em suporte eu estou interessado na duvida que ele teve, no responsavel pelo atendimento, o ticket que ele abriu, o departamento onde ele estava 

E essa modelagem de cliente que confunde os desenvolvedores por que ele junta todos esses aspectos, misturando a area de vendas e suporte dentro da mesma entidade e isso nao e o correto, por que a classe fica imensa apenas

Em sistemas monolitocos e comum que tenhamos uma classe Cliente imensa e que vai precisar ser reescrita quando transformado pra microsservicos
