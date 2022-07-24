# Resiliencia

Resiliencia e um conjunto de estrategias adotadas intencionalmente para a adaptacao de um sistema quando uma falha ocorre

E o poder de adaptacao a algo que nao deveria acontecer

Ter estrategias de resiliencia nos possibilita minimizar os ricos de perda de dados e transacoes importantes para o negocio

## Quais as estrategias de resiliencia?

### Proteger e ser protegido 

hoje e super comum termos sistemas q conversam um com o outro e por isso temos que proteger a nossa aplicacao e proteger a dos vizinhos

Um sistema em uma arquitetura distribuida precisa adotar mecanismos de autopreservacao pra garantir ao maximo sua operacao com 

Imagina que tenho 3 sistemas, eu preciso ao maximo q esses sistemas estejam saudaveis mesmo os sistemas que eu nao fiz, pq eles me afetam

Um sistema precisao nao pode ser egoista ao ponto de realizar mais requisicoes em um sistema que esta falhando

Se e ruim pegar informacao de um sistema imagina se ele esta fora

E da mesma forma vc nao espera que isso nao aconteca com vc

Um sistema lento no ar muitas vezes e pior do que um sistema fora do ar (efeito domino)

Imagina A chama B que chama C e C esta quebrado, entao B fica prejudicado e A esta sendo prejudicado por tabela, entao e melhor q C avise que esta fora

### Health Check

E a forma que voce informa que esta disponivel ou nao.

- Sem sinais vitais nao e possivel saber a saude de um sistema, e se nao ha sinal entao retorna 500 uahuhas

- Um sistema que nao esta saudavel possui uma chance de se recuperar caso o trafego pare de ser redirecionado a ele temporariamente pra depois ir retornando ao normal (depois se fala quais estrategias podemos tomar pra parar com as requisicoes), isso se chama de self healing

- Health check de qualidade (nao se faz sempre por html mas sim por requisicoes a banco de dados ou requisicoes a servicos do back, e o tempo de resposta como uma media)

### Rate Limiting

- Protege o sistema baseado no que ele foi projetado pra suportar, se ele suporta 100 req/s entao essa regra que vamos trabalhar

- Preferencia programada por tipo de client (pq existem sistemas que nao tem uma criticidade tao grande pro seu sistema funcionar), limite programado por tipo de client

### Circuit breaker

Protege o sistema fazendo com que as requisicoes feitas para ele sejam negadas (retornam 500)

Ele e o disjuntor do sistema, que abre quando ha uma sobrecarga minima ate o sistema comecar a recuperar

Tipos de circuito:

- Circuito fechado: Quando as requisicoes chegam normalmente

- Circuito aberto: Requisicoes nao chegam ao sistema. Erro instantaneo ao client

- Meio aberto: Permite uma quantidade limitada de requisicoes para verificacao se o sistema tem condicoes de voltar ao ar integralmente, eu abro o sistema aos poucos

Existem bibliotecas dedicadas a circuit breaker ou com service mesh que e aplicada na rede

### API gateway

Um api gateway e o cara que centraliza todas as requisicoes

E nesse cara podemos aplicar regrinhas de inserir politicas e regrinhas e plugins pra se continuar uma requisicao ou nao.

O api gateway tem a capacidade de enteder as demandas de cada tipo de servico.

Num api gateway eu posso executar varios tipos de coisa, ate regras de negocio

- Garante que requisicoes "inapropriadas" cheguem ate o sistema. Ex: Usuario nao autenticado. Se o cara nao tem a chave ele nem entra no predio uahsuahs Um api gateway e o kong

- Implementa politica de rate limiting e health check e etc

### Service Mesh

Ou malha de servicos, players de service mesh: Istio

Nosso papel nao e de infraestrutura e sim de codificar e saber usar boas tecnologias

- Controla o trafego de rede (coloca proxy do lado de cada sistema, um sistema A e B nao conversam diretamente pois um sistema manda mensagem pra um proxy e os dois proxys que se chamam)

- Evita implementacoes de protecao pelo proprio sistema (voce pode adicionar muita complexidade no projeto sem necessidade e sem estar na camada correta e como voce vai dizer quantas requisicoes o seu sistema aguenta? voce? vai ser um chute o sevice mesh tem meios pra isso)

- mTLS (mutual TLS, comunicacao entre sistemas tem que ser criptografads o service mesh garante isso)

- Circuit Breaker, retry, timeout, fault injection e etc...

### Trabalhar de forma assincrona

Trabalhar com filas de processamento, por que se tenho um numero maximo de requisicoes a fazer e eu chego nesse limite eu nao quero perder o excedente, eu digo espera ai amigao q ja te atendo, em horarios de pico maior eu tenho uma demora maior pra atender

- Evita perda de dados

- Nao ha perda de dados no envio de uma transacao por que o server estar fora

- Servidor pode processar a transacao em seu tempo quando estiver online (se usa um message broker como um Kafka)

- Entender com profundidade o message broker / sistema de stream

### Garantias de Entrega

#### Com retry

Quando queror realizar uma requisicao eu tenho q garantir que a mensagem que eu estou enviando esta de fato chegando la e nesse meio do caminho temos varias variaveis que podem fazer com que a mensagem nao chegue no destino, por questao de sistema fora do ar e etc... e uma das formas de minimizar esses tipos de problema e com politicas de retry

Se um sistema nao responde a mensagem voce repete a chamada e assim vai indo hahah

O problema desse tipo de abordagem e que podemos sobrecarregar o sistema do amiguinho

Mas isso nao quer dizer que nao tenha solucao pra esse tipo de politica e pra isso temos o Exponential Backoff

No linear backoff eu mando uma requisicao a cada sla 2 s e assim vai indo sucessivamente, porem se em 2 s ele continua nao respondendo a probabilidade e que em mais 2s ele continue nao conseguindo

No exponentional ele manda uma requisicao em 2s, dps 4s, dps 8s e assim vai pra que se de espaco pro sistema se recuperar, mas se todos usarem isso lascou auhsuahs por que mesmo que se melhore o tempo todos vao estar sobrecarregando o sistema de forma igual

O jump the cat (pulo do gato pros intimos da linguagem) esta na estrategia chamada `Exponential Backoff - Jitter` que consiste em colocar um pequeno ruido de tempo no intervalo entre as requisicoes, o que faz com que aumente a probabilidade da chamada dar resultado se diferenciando da chamada de outras pessoas

#### Com Kafka

Com qq message broker da pra se trabalhar de forma igual 

Como se ter certeza que uma transacao nao se perca ne, um message broker e um sistema que armazena essa mensagem e garante que ele sera entrega pra outro sistema

Fire and forget -> dispara a mensagem e nao espera que o broker recebeu a msg, isso e util pra ganho de velocidade das requisicoes em um sistema q manda muitas informacoes por s (trackeamento do carro no uber)

No kafka tem um nivel de garantia vs velocidade no seu sistema de broker leader / followers, com ack0, ack1 e ack all no curso de kafka isso vai ser explicado mais detalhes

### Situacoes complexas

A resiliencia da resiliencia

- O que acontece se o message broker cair? O sqs? O rabbit mq? Como o sistema se comporta

- Havera perda de mensagem?

- O sistema fica fora do ar?

- Como garantir resiliencia nesses casos?

Resiliencia e algo complexo e um jeito de gerenciar riscos, custa caro e vc precisa saber definir riscos com cargos altos da empresa

Se sua cloud cair? sua empresa trabalha com multi cloud ou em varias regioes diferentes? Alguns tipos de perguntas que envolvem dinheiro e acoes e mais pra um C-level responder
