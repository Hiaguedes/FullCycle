# Escalabilidade

Existe uma mistura de conceitos entre escalabilidade e performance

```txt
Escalabilidade e a capacidade de sistemas suportarem o aumento (ou a reducao) dos workloads incrementando (ou reduzindo) o custo em menor ou igual proporcao
```

## Escalabilidade vs performance

Enquanto performance tem o foco em reduzir a latencia e aumentar o troughput a escalabilidade visa termos a possibilidade de aumentar ou diminuir o throughput adicionado ou removendo a capacidade computacional

Relembrando: escala vertical -> mais poder computacional (se um cair lascou)

Escala horizontal -> colocar mais maquinas (se uma cair tem outras)

## Escalando aplicacoes

E dificil escalar verticalmente o software pra sempre pois uma hora tem um limite da maquina local

Maquinas sao descartaveis, ou seja eu consiga excluir e adicionar elas sem o remorco pois eu quero que ela funcione e ponto final e uma forma muito foda de escalar aplicacoes e espalhando as maquinas por ai, descentralizando os servicos (edge computing e talz ne)

Pra descentralizar suas aplicacoes voce deve pensar que

- Disco e efemero -> informacoes vem e vao e o disco precisa dar conta disso, toda vez q subir a aplicacao tudo q vai ta no disco pode ser perdido sem problemas, o disco e usado apenas pra arquivos temporarios. Imagens se guardam num bucket e pronto

- Servidor de aplicacao vs servidor de assets (uma coisa e a aplicacao outra e de onde pega as artes, imagens, fontes esse tipo de coisa)

- Cache centralizado.

- Sessoes centralizadas

- Upload / gracacao de arquivos (isso nao vai ficar na maquina)

## Escala de banco de dados

Nao e algo simples

- Aumentando recursos computacionais. (nao se esqueca q ha um limite)

- Distribuindo responsabilidades (escrita vs leitura)

- Shards de forma horizontal

- Serverless (quando nao se preocupa com questoes de servidores e confia no cloud provider resolver isso), serverless nao e apenas lambda function da aws mas nao se preocupar com questoes de servidor

## Otimizacao de queries e indices dos bancos de dados (monitore a aplicacao)

- Trabalhe com indices de forma consciente

- APM (application performance monitoring nas queries)

- Explain nas queries

- CQRS (command query responsibility segragation), separar leitura e escrita

## Proxy reverso

O que e ter um proxy, o proxy ele redireciona uma pessoa pra sites desejados ou nao, ele bloqueia. Proxy e um procurador

O proxy reverso entao seria um servidor que fica na frente dos servers web e encaminha as requisicoes de um cliente pra esse servidor, esse proxy reverso encaminha pra um servidor dedicado

Proxy encaminha um cliente pra um site

O proxy reverso encaminha um servidor pra um cliente, por isso reverso

### Solucoes de proxy reverso

- nginx (se fala engine x e eh o mais famosao)

- HAProxy (HA = High Availability)

- Traefik

Entre outros
