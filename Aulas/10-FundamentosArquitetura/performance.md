# Performance

## Metricas para medir a performance

E o desempenho que um software possui pra completar um determinado workload

As unidades para avaliarmos a performance de um software sao:

- Latencia ou response time

- Troughput (o quanto de requisicao o software consegue aguentar)

- Ter um software performartico e diferente de um software escalavel, posso ter um software q e um mas nao e o outro

### Para conseguir melhorar a performance

#### Diminuir latencia

 - Normalmente medida em milisegundos

 - E afetada pelo tempo de processamento da aplicacao, rede e chamadas externas

 - Ter observabilidade pra ver essas chamadas com banco de dados ou apis externas

 #### Aumentando troughput

 - Fazer com que o software aguente mais requisicoes simultaneas

 ## Checklist pra aumento de performance

 ### Quais sao as principais razoes pra se ter baixa performance? 

 - Processamento ineficiente

 - Recursos computacionais limitados

 - Trabalhar de forma bloqueante (se um erro bloquea uma aplicacao inteira por exemplo)

 - Acesso serial a recursos (cada vez q se acessa uma api, espera uma requisicao acabar pra vir a proxima)

 ### Principais formas para aumentar a eficiencia

- Escala da capacidade computacional (CPU, Disco, Memoria, Rede)

- Logica por tras do software (algoritmos, queries, overhead de frameworks) -> conseguir analisar cada um desses topicos de maneira individual

- Concorrencia e paralelismo (trabalhar com uma linguagem que permita isso)

- Banco de dados (tipos de bancos, schema)

- Caching

## Escala, concorrencia e paralelismo

Escala vertical -> APP tendo mais capacidade de requisicoes por ter mais requisitos computacionais

### Escala

Escala horizontal -> ter mais maquinas fazendo coisas pra mim com um load balancer balanceando tudo

Concorrencia e sobre lidar com muitas coisas ao mesmo tempo, paralelismo e fazer muitas coisas ao mesmo tempo. Rob Pike

### Concorrencia e paralelismo

Concorrencia e sobre fazer muitas coisas de forma rapida e paralelismo e fazer mais no mesmo tempo

Um webserver -> tenho cinco requisicoes em um intervalo de 10ms (50 ms no total) em um processo serial

Se eu fizesse de forma paralela teria um total de 10 ms com 5 processos paralelos

## Caching

O que cachear?

- Cache na borda / edge computing (o usuario nem bate na borda pois ja tem dados processados para uso, trazidas de um ponto anterior a nuvem) -> como a cloudflare que ja faz o download de todos os assets do front end que ja coloca esses dados bem perto de voce

- Dados estaticos (html, css) -> por que voce nao precisa servir a mesma coisa o tempo inteiro

- Paginas web

- Funcoes internas (evita reprocessamento de algoritmos pesados, acesso a banco de dados - que e caro)

- Objetos

### Chaching exclusivo ou compartilhado

- Exclusivo
    
    baixa latencia, pois nao precisa sair da borda pra entregar

    Duplicado entre nos

    Problemas relacionados a sessoes (pois nao precisa se autorizar pra pegar certas infos e quando se logar vc pega tudo de novo)

- Compartilhado

    maior latencia (pois alguem vai centralizar esse cache e todo mundo vai acessar ele)

    Nao ha duplicacao de cache pois o cache e espalhado pra todas as maquinas

    Sessoes compartilhadas, pois ele vai logar com o dado do servidor de cache

    Banco de dados externo, todos acessam o mesmo banco (mysql, redis, memcache)

## Edge computing

Ta cada dia mais em evidencia e tem uma tendencia muito forte

Imagina a quantidade de trafego da netflix e imagina trazer essa informacao dos estados unidos toda vez dos USA pra ca, imagina o congestionamento dessas informacoes

Ele nos ajuda a trazer a informacao pra mais perto do usuario, oferecendo servicos q consigam processar informacoes mais proximas do usuario evitando de ficar batendo sempre no nosso servidor

Pq a internet nao e ilimitada

- Cache realizado mais proximo do usuario

- evita a requisicao chegar ate o Cloud Provider / Infra

- Normalmente arquivos estaticos ja estao nesse tipo de cache (cloudflare)

- CDN -> Content delivery network (akamai)

- Cloudflare workers (permite q se faca deploy de aplicacoes js normalmente com a ngine v8 espalhando em todos os datacenters q ela utiliza de forma bem acessivel)

- Vercel (sim a criadora do NextJS) e o dploy da vercel utiliza a edge computing nas suas aplicacoes front end
